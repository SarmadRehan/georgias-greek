# Georgia's Greek: Landing Page Prototype

A demo site for Georgia's Greek, the Greek food truck in Seattle carried on by chef and owner Laki
Kazakos from his mother Georgia's restaurant. It is built as a client prototype and is not the official
website; banners at the top and bottom of the page say so. It is unlisted (`noindex`) and meant to be
shared only with Georgia's Greek.

Live demo: https://sarmadrehan.github.io/georgias-greek/

## Main features

Catering and weddings are the high-value part of the business, so the inquiry form is the main
feature.

- **Demo catering and wedding inquiry form** (`src/components/CateringSection.tsx`). Event type
  (wedding, corporate, party, brewery or event), date (no past days, by Seattle's clock), guest count,
  location, menu interests, name, phone or email, preferred contact and notes. The form has no action
  and makes no network request: submitting only opens the demo panel ("This is a demo. For now, DM
  @georgiasgreekfoodtruck or call (206) 783-1228."). On phones the form comes straight after the
  photos.
- **"Ask Georgia's" chatbot** (`src/lib/georgiasBot.ts`). A floating, scripted helper with
  suggested-question chips and free text, answered by keyword matching. There is no AI model, no API
  key and no network call on the page.
  - Catering: "Yes! Weddings, events and parties. Tell us about yours." Then it opens the form.
  - Where's the truck (and any hours question): "Check our live schedule", with a link to it. It never
    gives hours.
  - Menu, vegetarian and order online use the brief's answers.
  - Prices, gluten-free, allergies, vegan, delivery and anything else: "Great question! DM
    @georgiasgreekfoodtruck or call (206) 783-1228." Then the demo panel. It never gives a price or an
    allergy claim.
- **Order online** (header, hero, menu, mobile bar) opens an honest panel: online ordering is coming
  soon, with Call to order and Today's location. See "qMenu" below for why it doesn't link out.
- **Find the truck**: "See today's location" links to their live schedule on SeattleFoodTruck.com.
  Lake City Way address with a map embedded by street address, live music on weekends.
- Our story (Georgia, Diners, Drive-Ins and Dives, the truck), the menu in the brief's five groups,
  and the Greek market.

## Stack

- Next.js 15 (App Router) with static export (`output: "export"`)
- TypeScript (strict) and Tailwind CSS v4
- Fonts via `next/font`: Cinzel (headings, classical capitals like the logo's lettering) and Source
  Sans 3 (body)
- Hosted on GitHub Pages from the `gh-pages` branch

## Project layout

```
src/
  app/            layout, page, global styles (palette, Greek-key band), icons
  assets/images/  logo and photos from Georgia's own Instagram, imported statically
  components/     one component per page section, plus the chatbot and the shared panel
  data/           georgias.ts: facts, story, menu, catering, market (with sources)
  lib/            georgiasBot.ts: the scripted chatbot's answers and keyword rules
```

## Content sources

Facts come from the verified table in the demo brief (checked 2026-10-24):

| Fact | Source |
| --- | --- |
| Founded by Georgia Kazakos; her son, chef/owner Laki Kazakos, carries it on | Pacific NW Seasons (2017); Stewart Hendrickson; Laki's Facebook |
| Served Seattle for over 30 years; original restaurant and deli at 323 NW 85th St (now closed) | Instagram bio; Food Network; Triple D Life |
| Featured on Diners, Drive-Ins and Dives (mentioned in text only, no logo) | Food Network; TV Foodies; Triple D Life |
| Georgia's Greek Food Truck, 8007 Lake City Way NE, Seattle, WA 98115 | Google Maps |
| Classic Greek fare and live music on weekends, plus a retail area with food to take home | Google Maps description |
| Truck schedule on SeattleFoodTruck.com | Google Maps; Instagram bio |
| Phone (206) 783-1228 | Google Maps (also painted on the truck) |
| Catering, weddings, events, breweries, Greek market | Instagram highlights |
| Est. 2021 | The logo |

- **Menu**: the brief's groups, filled with Georgia's own item names and descriptions from their menu
  on SeattleFoodTruck.com, prices removed, lightly shortened. "Halal" is kept as they wrote it
  (Sarmad's choice).
- **Catering**: pan dishes and desserts from their "We cater!" post (Dec 27, 2021), the truck at
  private parties from Aug 9, 2022.
- **Photos**: 14 photos from Georgia's own Instagram posts (2021–2023), each with its caption noted in
  `src/data/georgias.ts`. A photo showing one dish of a group is labelled "Pictured: …". No customer
  photos, and no family or memorial posts.
- **Logo**: their Instagram profile picture, cut to its round badge.
- **Colors**: a blend Sarmad chose. The logo leads (sky blue `#1dc1f1`, navy `#142c44`, antique gold
  `#c0a865`, olive `#7c7c4c`, white), with the brief's terracotta (`#b5532f`) as a small accent. The
  Greek-key band is redrawn from the ring on the logo.

### qMenu (not linked)

The brief asks for an "Order online" button to their qMenu page. The Google listing's "Place an order"
link goes to `qmenu.us/#/georgia-s-greek-deli`, but on 2026-10-24 qMenu's own API reported that store
as disabled, with no menu, still listed at the closed 85th St restaurant, and the page loaded blank.
So "Order online" opens an honest coming-soon panel instead (Sarmad's choice). Link it once Georgia's
has a live ordering page.

### Left out on purpose

Prices, hours, star ratings, review quotes, testimonials, the Diners, Drive-Ins and Dives logo, the
Seattle Magazine Reader's Choice vote, allergy or gluten-free claims, delivery details, and any market
products not shown in their own posts.

## Development

```bash
npm ci
npm run dev       # http://localhost:3000
npm run lint
npm run build     # static site in ./out
npm run preview   # serve ./out locally
```

## Deployment (GitHub Pages)

```bash
npm run deploy
```

This builds with `NEXT_PUBLIC_BASE_PATH=/georgias-greek` (the Pages project path), adds `.nojekyll`
so the `_next/` folder is served, and pushes `./out` to the `gh-pages` branch. If the repository is
renamed, update the base path in the `deploy` script.

## Notes

- Nothing on the page sends data anywhere. The only third-party request is the Google Maps embed of
  the Lake City Way address; fonts are self-hosted by `next/font`.
- Sky blue, gold and olive are fills only. Text uses navy, the deeper `aegean` shade of the sky
  (6.2:1 with white), `olive-ink`, `gold-ink` or `terracotta-ink`, all 4.5:1 or better.
- The page is marked `noindex` so the demo never competes with the business's own listings.
