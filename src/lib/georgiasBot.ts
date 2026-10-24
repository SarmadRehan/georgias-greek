import { shop } from "@/data/georgias";

// "Ask Georgia's" is scripted: keyword matching over a fixed set of answers, all from the brief. There
// is no AI model, no API key and no network call. Prices, allergies and anything it can't match get
// the fallback, which passes the question to Georgia's, so it never makes up a price, an hour or an
// allergy claim.

export type BotAction = "cater" | "schedule" | "menu" | "order" | "contact";

export type BotReply = {
  text: string;
  action?: BotAction;
  /** Run the action by itself after the reply (scroll to the form or open the demo panel), not just offer it. */
  auto?: boolean;
};

export type Suggestion = { label: string; question: string };

export const suggestions: Suggestion[] = [
  { label: "Catering", question: "Do you cater?" },
  { label: "Where's the truck?", question: "Where's the truck today?" },
  { label: "Menu", question: "What's on the menu?" },
  { label: "Vegetarian", question: "Do you have vegetarian options?" },
  { label: "Order online", question: "Can I order online?" },
  { label: "Prices", question: "How much does it cost?" },
  { label: "Allergies", question: "Can you tell me about allergens?" },
];

export const greeting: BotReply = {
  text: "Yassou! I can help with catering, where the truck is, the menu, vegetarian options and ordering. Tap a question or type your own.",
};

const replies = {
  cater: {
    text: "Yes! Weddings, events and parties. Tell us about yours.",
    action: "cater",
    auto: true,
  },
  truck: {
    text: "Check our live schedule. The truck moves around Seattle, so it shows today's spot and times.",
    action: "schedule",
  },
  menu: {
    text: "Yeero (traditional gyro), souvlaki, housemade spanakopita, dolmas, falafel, hummus & warm pita, Greek salad with chicken, Greek fries and a burger.",
    action: "menu",
  },
  vegetarian: {
    text: "Try the falafel, spanakopita, dolmas, hummus and Greek salad. Ask us about anything else.",
    action: "menu",
  },
  order: {
    text: `Online ordering is coming soon. For now, call ${shop.phone} or find the truck on today's schedule.`,
    action: "order",
  },
  halal: { text: "Our menu lists the yeero, chicken souvlaki and roasted leg of lamb as halal." },
  lakeCity: { text: `${shop.street}, ${shop.city}. ${shop.lakeCityNote}` },
  market: { text: "Take home Greek favorites from our market, like Greek mountain tea, Greek coffee and baklava. Ask us what's in today." },
  story: {
    text: "Georgia Kazakos fed Seattle for over 30 years at her restaurant on 85th Street, which was featured on Diners, Drive-Ins and Dives. Her son Laki carries the recipes on the truck today.",
  },
  hello: { text: "Yassou! Ask me about catering, where the truck is, the menu, vegetarian options or ordering online." },
  thanks: { text: "You're welcome! Opa!" },
  fallback: {
    text: `Great question! DM @${shop.instagramHandle} or call ${shop.phone}.`,
    action: "contact",
    auto: true,
  },
} satisfies Record<string, BotReply>;

type Topic = keyof typeof replies;

// Checked in order. Prices, allergies, special diets and anything the brief doesn't cover (delivery
// areas, deposits, hiring) go straight to the fallback, even inside a catering or menu question, so
// "how much is catering" or "is the falafel gluten-free" is never answered here. Catering wins over
// the truck ("can the truck come to my wedding"), and the truck over ordering ("order at the truck").
const rules: { topic: Topic; pattern: RegExp }[] = [
  // A bare greeting only, so "hi, do you cater?" still reaches the catering answer.
  { topic: "hello", pattern: /^(hi|hey|hello|yassou|yiasou|yassas|kalimera|good (morning|afternoon|evening))( there)?$/ },
  {
    topic: "fallback",
    pattern:
      /\b(prices?|pricing|cost|costs|how much|rates?|fees?|charge|charges|quotes?|per (person|plate|head)|budget|expensive|cheap|afford\w*|deposits?|minimums?|allerg\w*|gluten|celiac|coeliac|wheat|nuts?|peanuts?|tree nuts?|dairy|lactose|eggs?|sesame|shellfish|soy|vegan|plant[- ]based|keto|calories|kosher|spicy|deliver\w*|doordash|uber ?eats|grubhub|jobs?|hiring|apply|gift cards?|discounts?|coupons?)\b/,
  },
  {
    topic: "cater",
    pattern:
      /\b(cater\w*|weddings?|events?|party|parties|corporate|office|private|reserve|reservation|rent|hire|book (the |your )?truck|bring (the |your )?truck|celebrations?|birthdays?|graduations?|funerals?|memorials?|reunions?|large orders?|trays?|pans?)\b/,
  },
  {
    topic: "truck",
    pattern:
      /\b(wheres?|location|located|festivals?|today|tonight|tomorrow|this week|weekend|schedule|calendar|hours?|open|opens|opening|close|closes|closing|what time|when|parked|park|brewer(y|ies)|find (the |your )?truck|truck)\b/,
  },
  { topic: "order", pattern: /\b(order\w*|online|pick ?up|takeout|take out|to go|ahead|app|qmenu)\b/ },
  { topic: "vegetarian", pattern: /\b(vegetarian|veggie|meatless|no meat|without meat|lent|fasting)\b/ },
  { topic: "halal", pattern: /\bhalal\b/ },
  { topic: "market", pattern: /\b(market|groceries|grocery|shop|store|retail|take home|products?|imports?|coffee|tea|olive oil|feta|deli)\b/ },
  { topic: "lakeCity", pattern: /\b(lake city|address|music|live music|band|dine[- ]?in|seating|sit down|parking)\b/ },
  {
    topic: "story",
    pattern: /\b(story|history|founded|family|georgia|laki|lakis|kazakos|diners|drive[- ]ins?|dives|triple d|guy fieri|food network|tv|restaurant|85th)\b/,
  },
  {
    topic: "menu",
    pattern:
      /\b(menu|food|eat|dish(es)?|serve|serving|yeero|yeeros|gyros?|souvlaki|skewers?|spanakopita|tyropita|dolmas?|dolmathakia|falafel|hummus|pita|salads?|fries|burgers?|lamb|chicken|baklava|desserts?|sweets|kids)\b/,
  },
  { topic: "thanks", pattern: /\b(thanks|thank you|thx|ty|efharisto|opa)\b/ },
];

export function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function answer(input: string): BotReply {
  const text = normalize(input);
  if (!text) return replies.hello;
  const match = rules.find(({ pattern }) => pattern.test(text));
  return match ? replies[match.topic] : replies.fallback;
}
