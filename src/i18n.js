// Page copy in Hungarian (default) and English. Strings stay in one place so the
// two languages can be compared side by side.
import { reactive } from 'vue'

const saved = (() => { try { return localStorage.getItem('tg_site_lang') } catch { return null } })()
export const lang = reactive({ current: saved === 'en' || saved === 'hu' ? saved : 'hu' })

export function setLang(l) {
  lang.current = l
  document.documentElement.lang = l
  try { localStorage.setItem('tg_site_lang', l) } catch {}
}

const HU = {
  meta: { title: 'TastyGo – ingyenes éttermi weboldal, online rendelés és asztalfoglalás jutalék nélkül' },
  nav: { how: 'Hogyan működik', free: 'Ingyenes weboldal', pro: 'Pro', pricing: 'Árak', faq: 'GYIK', login: 'Belépés', start: 'Kezdd el ingyen', menu: 'Menü' },
  hero: {
    eyebrow: 'Éttermeknek, bisztróknak, büféknek',
    title: 'Az éttermed weboldala 10 perc alatt.',
    titleAccent: 'Ingyen.',
    sub: 'Kattints bármelyik szövegre, és írd át. Válassz színeket, töltsd fel az étlapot és a fotóidat, majd tedd közzé a saját címeden. Ha készen állsz, a Pro csomaggal online rendelést és asztalfoglalást is fogadsz, 0% jutalékkal.',
    cta: 'Ingyenes oldal létrehozása',
    demo: 'Nézd meg a demó éttermet',
    note: 'Nem kell bankkártya. Az ingyenes csomag örökre ingyenes.',
    tryIt: 'Próbáld ki: kattints a színekre',
  },
  demo: {
    url: 'makos-bistro.tastygo.hu', brand: 'Mákos Bistro', heroTitle: 'Őszinte ételek, lassan főzve', heroSub: 'Magyaros házi konyha Budapest szívében.', cta: 'Nézd meg az étlapot',
    menu: 'Étlap', starters: 'Előételek', edit: 'Szerkesztés', preview: 'Előnézet', publish: 'Közzététel', live: 'Élő',
    items: [['Gulyásleves', 'Marhahús, burgonya, csipetke', '2 490 Ft', 0], ['Lángos', 'Tejföl, fokhagyma, sajt', '1 690 Ft', 1]],
    hint: 'Kattints a szövegre a szerkesztéshez',
  },
  stats: [['0%', 'jutalék az online rendelésekből'], ['10 perc', 'alatt kész az első oldalad'], ['2 nyelv', 'magyar és angol felület'], ['0 Ft', 'az ingyenes csomag, örökre']],
  how: {
    eyebrow: 'Hogyan működik', title: 'Három lépés, és fent vagy az interneten',
    steps: [
      ['Regisztrálj', 'Add meg az éttermed nevét. Kapsz egy kész mintaoldalt, amit azonnal szerkeszthetsz.'],
      ['Szabd a saját ízlésedre', 'Kattints bármelyik szövegre, és írd át. Színek, betűtípusok, főoldali képek, étlap és szekciók – minden azonnal látszik.'],
      ['Tedd közzé', 'Válassz egy címet: etteremneve.tastygo.hu. Egy kattintás, és él az oldal. A változtatásokat bármikor frissítheted.'],
    ],
  },
  free: {
    eyebrow: 'Ingyenes csomag', title: 'Minden, ami egy szép éttermi weboldalhoz kell',
    sub: 'A szerkesztő úgy működik, mint maga az oldal: amit látsz, az lesz kint. Nincs sablonkódolás, nincs külön admin.',
    items: [
      ['MousePointerClick', 'Szerkesztés helyben', 'Kattints a címre, az árakra vagy a leírásra, és írd át. Enter, és kész.'],
      ['Palette', 'Színek és betűtípusok', 'Menüsor, háttér és kiemelő szín, 8 betűtípus. A szöveg színe automatikusan olvasható marad.'],
      ['Image', 'Főoldali képváltó', 'Több fotó, amelyek 5 másodpercenként váltják egymást az élő oldalon.'],
      ['Utensils', 'Étlap kategóriákkal', 'Ételek, árak, leírások, fotók és vegetáriánus / gluténmentes jelölés.'],
      ['LayoutTemplate', '9 féle szekció', 'Kedvenc ételek, rólunk, nyitvatartás, kapcsolat térképpel, galéria, vendégvélemény, közösségi linkek.'],
      ['Smartphone', 'Mobilra kész', 'Asztali és mobil előnézet egy kattintással. Az oldal minden képernyőn jól néz ki.'],
      ['Undo2', 'Visszavonás és automatikus mentés', 'Minden lépést visszavonhatsz, a piszkozat magától mentődik.'],
      ['Globe', 'Saját aldomain', 'Az oldalad a neved.tastygo.hu címen érhető el, ingyenes tárhellyel.'],
    ],
  },
  pro: {
    eyebrow: 'TastyGo Pro', title: 'Rendelés, foglalás és konyha egy helyen', sub: 'Tartsd meg az ingyenes oldaladat, és add hozzá azt, ami a látogatóból vendéget csinál. Saját márkád alatt, jutalék nélkül.',
    groups: [
      { icon: 'Bike', title: 'Online rendelés', items: ['Kiszállítás és személyes átvétel', 'Azonnali vagy előre időpontra szóló rendelés idősávokkal', 'Kiszállítási zónák térképen, díjszabás rendelési érték szerint', 'Minimum rendelés, készletkezelés, feltétek és opciók', 'Kuponok, akciós árak, borravaló'] },
      { icon: 'CreditCard', title: 'Fizetés és számla', items: ['Online bankkártyás fizetés SimplePay-jel', 'Készpénz vagy kártya átvételkor', 'Céges számlaadatok és magyar adószám ellenőrzés', 'Visszatérítés a rendelés oldaláról'] },
      { icon: 'CalendarDays', title: 'Asztalfoglalás', items: ['Szabad időpontok a nyitvatartás és az asztalok alapján', 'Összetolható asztalok nagyobb társaságnak', 'Automatikus vagy kézi visszaigazolás e-mailben', 'Telefonos és walk-in foglalások rögzítése'] },
      { icon: 'Receipt', title: 'Napi menü előrendeléssel', items: ['Heti menütervező napokra bontva', 'Rendelési határidő a szállítási nap előtt', 'Adagkorlát és napi minimum rendelés', 'Konyhai összesítő és kiszállítási lista nyomtatáshoz'] },
      { icon: 'ChefHat', title: 'Konyhai tábla és irányítópult', items: ['Élő rendeléstábla hangjelzéssel', 'Beérkezett → Készül → Kész → Úton', 'Bevételi statisztikák, legnépszerűbb ételek', 'Vendéglista, vendégfiókok, értékelések'] },
      { icon: 'Store', title: 'A te márkád', items: ['Saját domain, TastyGo jelvény nélkül', 'Több helyszín egy fiókban', 'Munkatársak szerepkörökkel', 'Szerkeszthető e-mailek magyarul és angolul'] },
    ],
    board: { title: 'Konyhai tábla', cols: ['Beérkezett', 'Készül', 'Kész'], asap: 'ASAP', pickup: 'Átvétel', delivery: 'Kiszállítás', next: 'Elkezdem', done: 'Kész', out: 'Átadva' },
  },
  plans: {
    eyebrow: 'Árak', title: 'Kezdd ingyen, válts, amikor szükséged van rá', sub: 'Nincs jutalék, nincs hűségidő. A Pro csomagot havonta fizeted, és bármikor lemondhatod.',
    free: { name: 'Ingyenes', price: '0 Ft', per: 'örökre', desc: 'Egyoldalas éttermi weboldal a saját tastygo.hu címeden.', cta: 'Kezdd el ingyen', items: ['Vizuális szerkesztő', 'Étlap, galéria, nyitvatartás, térkép', 'Főoldali képváltó, színek, betűtípusok', 'neved.tastygo.hu aldomain', 'Ingyenes tárhely és SSL'] },
    pro: { name: 'Pro', badge: 'Legnépszerűbb', price: '20 000 Ft', per: '/ hó', setup: '+ 50 000 Ft egyszeri beállítás', desc: 'Online rendelés, asztalfoglalás és minden, ami a működéshez kell.', cta: 'Pro kipróbálása', items: ['Minden az ingyenes csomagból', 'Online rendelés, 0% jutalék', 'Asztalfoglalás', 'Napi menü előrendeléssel', 'Konyhai tábla és irányítópult', 'SimplePay kártyás fizetés', 'Saját domain, TastyGo jelvény nélkül', 'Több helyszín és munkatárs'] },
    custom: { name: 'Egyedi', price: 'Ajánlat alapján', desc: 'Étteremláncoknak, egyedi integrációkhoz (pénztárgép, számlázó, futárszolgálat).', cta: 'Kérj ajánlatot' },
    compare: 'Részletes összehasonlítás',
    rows: [
      ['Vizuális weboldal-szerkesztő', true, true], ['tastygo.hu aldomain', true, true], ['Saját domain', false, true], ['TastyGo jelvény eltávolítása', false, true],
      ['Online rendelés (kiszállítás, átvétel)', false, true], ['Kiszállítási zónák és díjak', false, true], ['SimplePay bankkártyás fizetés', false, true], ['Céges számlaadatok', false, true],
      ['Asztalfoglalás', false, true], ['Napi menü előrendeléssel', false, true], ['Konyhai tábla, élő értesítés', false, true], ['Kuponok és akciók', false, true],
      ['Vendégfiókok és értékelések', false, true], ['Több helyszín', false, true], ['Munkatársak és szerepkörök', false, true], ['Jutalék a rendelésekből', '—', '0%'],
    ],
    feature: 'Funkció',
  },
  audience: {
    eyebrow: 'Kiknek szól', title: 'Független éttermeknek, akik a saját vendégkörüket építik',
    items: [['Utensils', 'Éttermek és bisztrók', 'Szép oldal, étlap és asztalfoglalás egy helyen.'], ['Bike', 'Gyorséttermek és pizzériák', 'Kiszállítási zónák, idősávok, élő konyhai tábla.'], ['Receipt', 'Menüs konyhák, ételfutárok', 'Heti napi menü előrendeléssel és határidővel.'], ['Store', 'Street food és büfék', 'Ingyenes oldal, ami a Facebook oldal mellé is jól mutat.']],
  },
  faq: {
    eyebrow: 'Gyakori kérdések', title: 'Kérdésed van?',
    items: [
      ['Tényleg ingyenes az ingyenes csomag?', 'Igen. Az ingyenes weboldal örökre ingyenes, nincs próbaidő, és nem kérünk bankkártyát. Az oldal alján egy kis „TastyGo” jelvény jelenik meg.'],
      ['Mennyi jutalékot vonunk le a rendelésekből?', 'Semennyit. A Pro csomag fix havidíjas, a rendelések teljes összege a tiéd. Online kártyás fizetésnél csak a SimplePay tranzakciós díja terhel.'],
      ['Megmarad az oldalam, ha Pro-ra váltok?', 'Igen. Ugyanazt az oldalt szerkeszted tovább, csak új szekciókat kapsz: online rendelés, asztalfoglalás, napi menü és értékelések.'],
      ['Használhatom a saját domainemet?', 'A Pro csomagban igen. Elég egy CNAME rekordot beállítani a domainszolgáltatódnál, a többit mi intézzük, a TastyGo jelvény pedig eltűnik.'],
      ['Kell szerződnöm a SimplePay-jel?', 'Az online kártyás fizetéshez saját SimplePay kereskedői fiók kell, így a pénz közvetlenül hozzád érkezik. Készpénzes és átvételkori kártyás fizetéshez nem kell semmi.'],
      ['Tudok számlát adni céges vendégeknek?', 'A pénztárban a vendég megadhatja a cégnevet és az adószámot, amit a rendszer ellenőriz. Az adatok a rendelésnél és az exportban is megjelennek.'],
      ['Milyen nyelven működik?', 'A szerkesztő és a vezérlőpult magyarul és angolul is elérhető, a vendégoldal az étterem nyelvén jelenik meg.'],
      ['Lemondhatom bármikor?', 'Igen, nincs hűségidő. Ha visszaváltasz az ingyenes csomagra, a weboldalad megmarad.'],
    ],
  },
  contact: {
    eyebrow: 'Kapcsolat', title: 'Segítsünk az indulásban?', sub: 'Kérj ingyenes, személyes bemutatót, vagy kérdezz bátran. Egy munkanapon belül válaszolunk.',
    name: 'Neved', email: 'E-mail cím', restaurant: 'Étterem neve', message: 'Miben segíthetünk?', send: 'Bemutató kérése', sending: 'Küldés…',
    sent: 'Köszönjük! Hamarosan jelentkezünk.', error: 'Nem sikerült elküldeni. Írj nekünk az info@tastygo.hu címre.', or: 'vagy írj nekünk:',
  },
  footer: { tagline: 'Éttermi weboldal, online rendelés és asztalfoglalás jutalék nélkül.', product: 'Termék', company: 'Kapcsolat', rights: 'Minden jog fenntartva.', terms: 'ÁSZF', privacy: 'Adatvédelem' },
}

const EN = {
  meta: { title: 'TastyGo – free restaurant website, online ordering and table booking with no commission' },
  nav: { how: 'How it works', free: 'Free website', pro: 'Pro', pricing: 'Pricing', faq: 'FAQ', login: 'Log in', start: 'Start for free', menu: 'Menu' },
  hero: {
    eyebrow: 'For restaurants, bistros and food counters',
    title: 'Your restaurant website in 10 minutes.',
    titleAccent: 'Free.',
    sub: 'Click any text and type. Pick your colors, add your menu and photos, then publish at your own address. When you are ready, Pro adds online ordering and table bookings with 0% commission.',
    cta: 'Create your free site',
    demo: 'See the demo restaurant',
    note: 'No card needed. The free plan is free forever.',
    tryIt: 'Try it: click the colors',
  },
  demo: {
    url: 'makos-bistro.tastygo.hu', brand: 'Mákos Bistro', heroTitle: 'Honest food, cooked slowly', heroSub: 'Hungarian home cooking in the heart of Budapest.', cta: 'See the menu',
    menu: 'Menu', starters: 'Starters', edit: 'Edit', preview: 'Preview', publish: 'Publish', live: 'Live',
    items: [['Gulyásleves', 'Beef, potato, csipetke', '2 490 Ft', 0], ['Lángos', 'Sour cream, garlic, cheese', '1 690 Ft', 1]],
    hint: 'Click any text to edit it',
  },
  stats: [['0%', 'commission on online orders'], ['10 min', 'to your first live site'], ['2 languages', 'Hungarian and English'], ['0 Ft', 'for the free plan, forever']],
  how: {
    eyebrow: 'How it works', title: 'Three steps to being online',
    steps: [
      ['Sign up', 'Enter your restaurant name. You get a ready-made sample page you can edit straight away.'],
      ['Make it yours', 'Click any text and type. Colors, fonts, hero pictures, menu and sections all update as you go.'],
      ['Publish', 'Pick an address like yourname.tastygo.hu. One click and you are live. Update it whenever you like.'],
    ],
  },
  free: {
    eyebrow: 'Free plan', title: 'Everything a good restaurant website needs',
    sub: 'The editor works like the page itself: what you see is what goes live. No templates to code, no separate admin.',
    items: [
      ['MousePointerClick', 'Edit in place', 'Click a title, price or description and type. Press Enter and you are done.'],
      ['Palette', 'Colors and fonts', 'Navbar, background and accent colors, 8 fonts. Text color stays readable automatically.'],
      ['Image', 'Hero slideshow', 'Several photos that rotate every 5 seconds on your live site.'],
      ['Utensils', 'Menu with categories', 'Dishes, prices, descriptions, photos and vegetarian / gluten-free tags.'],
      ['LayoutTemplate', '9 section types', 'Top dishes, about us, opening hours, contact with map, gallery, testimonial, social links.'],
      ['Smartphone', 'Ready for phones', 'Desktop and mobile preview with one click. Your site looks right on every screen.'],
      ['Undo2', 'Undo and autosave', 'Undo any step; your draft saves itself.'],
      ['Globe', 'Your own subdomain', 'Your site lives at yourname.tastygo.hu with free hosting.'],
    ],
  },
  pro: {
    eyebrow: 'TastyGo Pro', title: 'Orders, bookings and the kitchen in one place', sub: 'Keep your free site and add what turns visitors into guests. Under your own brand, with no commission.',
    groups: [
      { icon: 'Bike', title: 'Online ordering', items: ['Delivery and pickup', 'ASAP or scheduled orders with time slots', 'Delivery zones on a map, fees by order value', 'Minimum order, stock, extras and options', 'Coupons, special prices, tips'] },
      { icon: 'CreditCard', title: 'Payments and invoices', items: ['Online card payments with SimplePay', 'Cash or card on delivery', 'Company invoice details with Hungarian tax number check', 'Refunds from the order page'] },
      { icon: 'CalendarDays', title: 'Table bookings', items: ['Free times from your hours and tables', 'Joinable tables for bigger groups', 'Automatic or manual email confirmation', 'Phone and walk-in bookings'] },
      { icon: 'Receipt', title: 'Daily menu pre-orders', items: ['Weekly planner by day', 'Order cut-off before the delivery day', 'Portion limits and daily minimum order', 'Kitchen summary and dispatch list to print'] },
      { icon: 'ChefHat', title: 'Kitchen board and dashboard', items: ['Live order board with sound', 'Received → Preparing → Ready → Out', 'Revenue stats and top dishes', 'Guest list, guest accounts, reviews'] },
      { icon: 'Store', title: 'Your brand', items: ['Your own domain, no TastyGo badge', 'Several locations in one account', 'Staff accounts with roles', 'Editable emails in Hungarian and English'] },
    ],
    board: { title: 'Kitchen board', cols: ['Received', 'Preparing', 'Ready'], asap: 'ASAP', pickup: 'Pickup', delivery: 'Delivery', next: 'Start', done: 'Ready', out: 'Handed over' },
  },
  plans: {
    eyebrow: 'Pricing', title: 'Start free, upgrade when you need it', sub: 'No commission, no lock-in. Pro is billed monthly and you can cancel any time.',
    free: { name: 'Free', price: '0 Ft', per: 'forever', desc: 'A one-page restaurant website at your own tastygo.hu address.', cta: 'Start for free', items: ['Visual editor', 'Menu, gallery, hours, map', 'Hero slideshow, colors, fonts', 'yourname.tastygo.hu subdomain', 'Free hosting and SSL'] },
    pro: { name: 'Pro', badge: 'Most popular', price: '20 000 Ft', per: '/ month', setup: '+ 50 000 Ft one-time setup', desc: 'Online ordering, table bookings and everything you need to run it.', cta: 'Try Pro', items: ['Everything in Free', 'Online ordering, 0% commission', 'Table bookings', 'Daily menu pre-orders', 'Kitchen board and dashboard', 'SimplePay card payments', 'Own domain, no TastyGo badge', 'Several locations and staff'] },
    custom: { name: 'Custom', price: 'On request', desc: 'For restaurant groups and custom integrations (POS, invoicing, couriers).', cta: 'Ask for a quote' },
    compare: 'Compare plans',
    rows: [
      ['Visual website editor', true, true], ['tastygo.hu subdomain', true, true], ['Own domain', false, true], ['Remove the TastyGo badge', false, true],
      ['Online ordering (delivery, pickup)', false, true], ['Delivery zones and fees', false, true], ['SimplePay card payments', false, true], ['Company invoice details', false, true],
      ['Table bookings', false, true], ['Daily menu pre-orders', false, true], ['Kitchen board, live alerts', false, true], ['Coupons and specials', false, true],
      ['Guest accounts and reviews', false, true], ['Several locations', false, true], ['Staff and roles', false, true], ['Commission on orders', '—', '0%'],
    ],
    feature: 'Feature',
  },
  audience: {
    eyebrow: 'Who it is for', title: 'Independent restaurants building their own regulars',
    items: [['Utensils', 'Restaurants and bistros', 'A beautiful site, menu and table bookings in one place.'], ['Bike', 'Fast food and pizzerias', 'Delivery zones, time slots, a live kitchen board.'], ['Receipt', 'Lunch-menu kitchens', 'A weekly daily menu with pre-orders and cut-offs.'], ['Store', 'Street food and counters', 'A free site that sits nicely next to your Facebook page.']],
  },
  faq: {
    eyebrow: 'FAQ', title: 'Questions?',
    items: [
      ['Is the free plan really free?', 'Yes. The free website is free forever, with no trial period and no card required. A small "TastyGo" badge appears at the bottom of the page.'],
      ['How much commission do you take?', 'None. Pro has a fixed monthly fee and the full order value is yours. For online card payments only the SimplePay transaction fee applies.'],
      ['Do I keep my site when I upgrade?', 'Yes. You keep editing the same site and get new sections: online ordering, table bookings, daily menu and reviews.'],
      ['Can I use my own domain?', 'With Pro, yes. Add one CNAME record at your domain provider, we handle the rest, and the TastyGo badge disappears.'],
      ['Do I need a SimplePay contract?', 'Online card payments need your own SimplePay merchant account, so the money goes straight to you. Cash and card-on-delivery need nothing.'],
      ['Can company guests get an invoice?', 'At checkout guests can enter a company name and tax number, which is checked. The details show on the order and in exports.'],
      ['Which languages are supported?', 'The editor and dashboard are in Hungarian and English; guests see your site in your restaurant\'s language.'],
      ['Can I cancel any time?', 'Yes, there is no lock-in. If you switch back to the free plan, your website stays.'],
    ],
  },
  contact: {
    eyebrow: 'Contact', title: 'Want help getting started?', sub: 'Ask for a free personal demo or just ask a question. We reply within one working day.',
    name: 'Your name', email: 'Email address', restaurant: 'Restaurant name', message: 'How can we help?', send: 'Request a demo', sending: 'Sending…',
    sent: 'Thank you! We will be in touch soon.', error: 'Could not send. Email us at info@tastygo.hu.', or: 'or email us:',
  },
  footer: { tagline: 'Restaurant websites, online ordering and table bookings with no commission.', product: 'Product', company: 'Contact', rights: 'All rights reserved.', terms: 'Terms', privacy: 'Privacy' },
}

const DICT = { hu: HU, en: EN }
export const useCopy = () => DICT[lang.current]
