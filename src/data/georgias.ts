import type { StaticImageData } from "next/image";

import babyTruck from "@/assets/images/truck-2021.jpg";
import baklavaBox from "@/assets/images/baklava-box.jpg";
import cateringTray from "@/assets/images/catering-tray.jpg";
import falafel from "@/assets/images/falafel.jpg";
import greekBurger from "@/assets/images/greek-burger.jpg";
import greekCoffee from "@/assets/images/greek-coffee.jpg";
import heroTruck from "@/assets/images/hero-truck.jpg";
import lambSalad from "@/assets/images/lamb-salad.jpg";
import marketTea from "@/assets/images/market-tea.jpg";
import moussaka from "@/assets/images/moussaka.jpg";
import privateParty from "@/assets/images/private-party.jpg";
import spanakopita from "@/assets/images/spanakopita.jpg";
import truckNight from "@/assets/images/truck-night.jpg";
import yeero from "@/assets/images/yeero.jpg";

// Every fact below comes from the verified table in the demo brief (checked 2026-10-24) or from
// Georgia's own posts and listings, noted beside each one. Nothing here is invented: no prices,
// hours, ratings or reviews.

export type Photo = { src: StaticImageData; alt: string; caption?: string };

export const shop = {
  name: "Georgia's Greek",
  // Name on the truck, the logo and the Instagram profile.
  fullName: "Georgia's Greek Food Truck",
  // Brief, hero copy.
  tagline: "Seattle's Greek family kitchen for over 30 years, now on wheels",
  description:
    "Georgia's Greek: classic Greek food from Seattle's Greek family kitchen, now on wheels. Find the truck, see the menu, and plan catering for weddings and events.",
  // Google Maps (brief).
  street: "8007 Lake City Way NE",
  city: "Seattle, WA 98115",
  // Google Maps description (brief): "Classic Greek fare & live music on weekends, plus a retail area
  // offering food products to take home".
  lakeCityNote: "Classic Greek fare and live music on weekends, plus a market corner with Greek foods to take home.",
  phone: "(206) 783-1228",
  phoneHref: "tel:+12067831228",
  instagramHandle: "georgiasgreekfoodtruck",
  instagramUrl: "https://www.instagram.com/georgiasgreekfoodtruck/",
  // Linked from their Instagram bio as "Georgia's Greek Restaurant Food Truck Market & Deli".
  facebookUrl: "https://www.facebook.com/70183234042",
  // Their live truck schedule (Instagram bio and the Google listing's website link). The page never
  // lists hours of its own: they aren't public and change week to week.
  scheduleUrl: "https://www.seattlefoodtruck.com/food-trucks/georgia-s-greek-food-truck",
  mapEmbedUrl: "https://www.google.com/maps?q=8007+Lake+City+Way+NE,+Seattle,+WA+98115&output=embed",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=8007+Lake+City+Way+NE+Seattle+WA+98115",
  demoNotice: "Demo by Sarmad Rehan · not the official Georgia's Greek website",
};

// The Google listing's "Place an order" link goes to a qMenu store, qmenu.us/#/georgia-s-greek-deli.
// Checked 2026-10-24: qMenu's own API reports that store as disabled, with no menu, still at the closed
// 323 NW 85th St restaurant, and the page loads blank. So "Order online" opens an honest panel instead
// of linking there (Sarmad's choice). Don't link the qMenu store unless it's live again.

export const heroPhoto: Photo = {
  src: heroTruck,
  alt: "The sky-blue Georgia's Greek Food Truck, painted with Georgia's portrait and a Greek island village, parked by the water",
};

export const story = {
  // Pacific NW Seasons (2017), Stewart Hendrickson, Laki's Facebook, Food Network, Triple D Life, and
  // the Instagram bio ("serving Seattle over 30 years"), all via the brief. Est. 2021 is on the logo.
  paragraphs: [
    "Georgia's Greek began with Georgia Kazakos and her restaurant and deli at 323 NW 85th St, where her cooking fed Seattle for over 30 years.",
    "Along the way, the restaurant was featured on Diners, Drive-Ins and Dives.",
    "Today her son, chef and owner Laki Kazakos, carries the family recipes on Georgia's Greek Food Truck, on the road since 2021.",
  ],
  milestones: [
    { label: "Georgia's restaurant", detail: "323 NW 85th St, Seattle" },
    { label: "Diners, Drive-Ins and Dives", detail: "Featured on Food Network" },
    { label: "The truck today", detail: "On the road since 2021" },
  ],
  photo: {
    src: babyTruck,
    alt: "The Georgia's Greek Food Truck parked under tall evergreens, with the phone number and logo on its side",
    // Instagram, Sep 24, 2021: "Here is our beauty 💙 We are brand new Greek Food Truck Seattle!"
    caption: "The truck's first post, September 2021",
  } satisfies Photo,
};

export type MenuItem = { name: string; description: string };
export type MenuGroup = { id: string; title: string; photo: Photo; items: MenuItem[] };

// Groups from the brief. Item names and descriptions are Georgia's own, from their menu on
// SeattleFoodTruck.com (prices removed), with "halal" kept as they wrote it (Sarmad's choice).
// Photos are their own Instagram posts, labelled "Pictured" where the photo shows one dish of several.
export const menu: MenuGroup[] = [
  {
    id: "yeero",
    title: "Yeero & souvlaki",
    photo: {
      src: yeero,
      alt: "A traditional yeero wrapped in warm pita, with greens, tomato and plenty of tzatziki",
      // Instagram, Jul 9, 2022: "You never go wrong with a traditional yeero!"
      caption: "Pictured: Traditional yeero",
    },
    items: [
      {
        name: "Traditional Yeero",
        description:
          "Halal lamb and beef yeero meat wrapped in a warm pita with mixed greens, red onions and sliced tomatoes, topped with our housemade tzatziki.",
      },
      {
        name: "Chicken Souvlaki",
        description:
          "Marinated halal chicken souvlaki wrapped in a warm pita with mixed greens, red onions and sliced tomatoes, topped with our housemade tzatziki.",
      },
      {
        name: "Roasted Leg of Lamb",
        description:
          "Halal braised and roasted leg of lamb, thinly sliced and wrapped in a warm pita with greens, onions and tomatoes, topped with tzatziki and feta.",
      },
    ],
  },
  {
    id: "spanakopita",
    title: "Spanakopita & dolmas",
    photo: {
      src: spanakopita,
      alt: "Two flaky bourekia spanakopita triangles cut open to show the spinach and cheese filling",
      // Instagram, Apr 9, 2022: "Bourekia spanakopita!"
      caption: "Pictured: Bourekia spanakopita",
    },
    items: [
      { name: "Bourekia Spanakopita", description: "Two triangles of spinach, myzithra and feta in fillo." },
      { name: "Bourekia Tyropita", description: "Triangles of myzithra and feta cheese in fillo." },
      { name: "Dolmathakia", description: "Vegetarian stuffed grape leaves with a side of tzatziki." },
    ],
  },
  {
    id: "falafel",
    title: "Falafel & hummus",
    photo: {
      src: falafel,
      alt: "A tray of golden, herb-flecked falafel",
      // Instagram, Jan 13, 2022: "Falafels".
      caption: "Pictured: Falafel",
    },
    items: [
      {
        name: "Falafel",
        description:
          "Housemade falafel wrapped in warm pita with mixed greens, red onions and sliced tomatoes, topped with Georgia's traditional tzatziki.",
      },
      { name: "Falafel Meze", description: "Housemade falafel with cherry tomatoes, cucumbers, carrots and tzatziki." },
      { name: "Hummus & Pita", description: "Chickpeas with tahini, garlic, olive oil and lemon, with warm pita bread." },
      { name: "Melitzanasalata & Skorthalia", description: "Roasted eggplant dip, and a garlic and potato dip, each with pita." },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    photo: {
      src: lambSalad,
      alt: "A Greek salad topped with sliced roasted lamb, crumbled feta, parsley and cherry tomatoes, with dressing on the side",
      // Instagram, Jan 16, 2022: "Roasted leg of lamb salad!!"
      caption: "Pictured: Greek salad with roasted leg of lamb",
    },
    items: [
      {
        name: "Greek Salad",
        description:
          "Mixed greens, red onions, cherry tomatoes, bell peppers, cucumbers, olives and crumbled feta with our housemade lemon, olive oil and herb dressing.",
      },
      {
        name: "Make it a meal",
        description: "Top it with halal chicken souvlaki, halal yeero meat, falafel or halal roasted leg of lamb.",
      },
    ],
  },
  {
    id: "fries",
    title: "Greek fries & more",
    photo: {
      src: greekBurger,
      alt: "A Greek burger with feta, lettuce, tomato and red onion beside a pile of Greek fries with feta and herbs",
      // Instagram, Dec 24, 2021: "Our Greek Burger with Greek fries!"
      caption: "Pictured: Greek burger with Greek fries",
    },
    items: [
      { name: "Greek Fries", description: "French fries topped with feta cheese and Greek seasoning." },
      { name: "Yeero Fries & Falafel Fries", description: "Fries loaded with yeero meat or falafel, feta, tzatziki and our Greek-style pico." },
      {
        name: "Greek Lamb Burger",
        description: "Our 50/50 lamb and beef burger on a toasted brioche bun with feta, greens, tomato, red onion and tzatziki.",
      },
      { name: "Baklava", description: "Layers of fillo and walnuts soaked in a honey lemon syrup." },
    ],
  },
];

export const eventTypes = ["Wedding", "Corporate", "Party", "Brewery or event"] as const;

// "Menu interests" for the inquiry form. Pan dishes and desserts are from their Instagram post of
// Dec 27, 2021 ("We cater! ... spanakopita, tyropita, kotopita, mousaka, pasticio and of course our
// desserts"), and "the truck on site" from Aug 9, 2022 ("Reserve our truck for your event today!").
export const menuInterests = [
  "The truck at our event",
  "Yeero & souvlaki",
  "Falafel & vegetarian",
  "Pan dishes (spanakopita, mousaka, pastitsio)",
  "Greek desserts",
  "Not sure yet",
] as const;

export const contactOptions = ["Call", "Text", "Email"] as const;

export const catering = {
  // Brief: from their IG highlights (Catering, S & Z Wedding, J & K Wedding, Events, Breweries).
  line: "We've catered weddings and events across Seattle.",
  kinds: ["Weddings", "Corporate events", "Parties", "Breweries & events"],
  panDishes: ["Spanakopita", "Tyropita", "Kotopita", "Mousaka", "Pastitsio"],
  desserts: ["Bougatsa", "Galaktoboureko", "Baklava", "Kataifi", "Flogera"],
  photos: [
    {
      src: privateParty,
      alt: "The Georgia's Greek truck parked under the trees at a private party by the water",
      // Instagram, Aug 9, 2022: "We are in a private party! Reserve our truck for your event today!"
      caption: "The truck at a private party",
    },
    {
      src: cateringTray,
      alt: "A server holding a long tray of golden fillo pastry triangles",
      // Instagram, Dec 27, 2021, the "We cater!" post.
      caption: "Fillo pastries on a catering tray",
    },
    {
      src: moussaka,
      alt: "A full pan of baked mousaka with a browned béchamel top",
      // Instagram, Jan 21, 2022: "Mousaka ready for your party!"
      caption: "Mousaka, ready for a party",
    },
  ] satisfies Photo[],
};

export const truckPhoto: Photo = {
  src: truckNight,
  alt: "The Georgia's Greek truck lit up at night outside a brewery's tall windows",
  // Instagram, Jan 7, 2022: "Optimism Brewing!"
  caption: "Parked at Optimism Brewing",
};

export const market = {
  // Brief: "Take home Greek favorites from our market". Products only from their own posts.
  photos: [
    {
      src: marketTea,
      alt: "Baskets of Greek mountain tea in bunches, in yellow Athina packets",
      // Instagram, Oct 15, 2021: "Our Greek Market coming soon 🇬🇷".
      caption: "Pictured: Greek mountain tea",
    },
    {
      src: greekCoffee,
      alt: "A cup of Greek coffee and a copper briki beside a bag of Loumidis Papagalos coffee",
      // Instagram, Dec 26, 2021: "Loumidis Papagalos Greek coffee!"
      caption: "Pictured: Loumidis Papagalos Greek coffee",
    },
    {
      src: baklavaBox,
      alt: "A gift box of assorted baklava with pistachio, walnut and kataifi pieces",
      // Instagram, Dec 26, 2021: "Baklava Variety with salted caramel, chocolate roll, pistachio
      // rich, walnut bite, almond kataif & hazelnut roll!"
      caption: "Pictured: Baklava variety box",
    },
  ] satisfies Photo[],
};
