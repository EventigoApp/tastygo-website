export const tiers = [
  { name: 'Ingyenes', price: '0 Ft', priceSub: 'Örökre ingyenes', demoDesc: 'Örökre ingyenes, statikus menüoldal, amit bármikor magad frissítesz és megoszthatsz — például a Facebook oldaladon. Nincs havidíj, nincs lejárat, sosem kérünk érte fizetést.' },
  { name: 'Alap', price: '50 000 Ft telepítés', priceSub: '+ 10 000 Ft / hó', demoDesc: 'Egységes, testreszabható menüoldal saját névvel, tastygo.hu aldomainen, online rendeléssel, korlátozott funkciókkal. Nincs jutalék.' },
  { name: 'Teljes', price: '50 000 Ft telepítés', priceSub: '+ 20 000 Ft / hó', demoDesc: 'A teljes Tastygo csomag: rendelés, asztalfoglalás, több telephely és admin irányítópult, saját domainen. Nincs jutalék.' },
  { name: 'Egyedi', price: 'Egyedi ajánlat', priceSub: '', demoDesc: 'Egyedi funkciókra vagy integrációkra van szükséged? Kérj személyre szabott ajánlatot — nincs kötött ár.' },
]

export const rowDefs = [
  ['Statikus menüoldal', [true, true, true, 'Egyeztetés alapján']],
  ['Megosztható link (pl. Facebook)', [true, true, true, 'Egyeztetés alapján']],
  ['Önállóan frissíthető tartalom', [true, true, true, 'Egyeztetés alapján']],
  ['Ingyenes hosting', [true, false, false, 'Egyeztetés alapján']],
  ['Online rendelés', [false, 'Korlátozott', true, 'Egyeztetés alapján']],
  ['Asztalfoglalás', [false, false, true, 'Egyeztetés alapján']],
  ['Saját domain / aldomain', [false, 'Aldomain', 'Saját domain', 'Egyeztetés alapján']],
  ['Több telephely kezelése', [false, false, true, 'Egyeztetés alapján']],
  ['Admin irányítópult', [false, false, true, 'Egyeztetés alapján']],
  ['Akciók és kuponok', [false, false, true, 'Egyeztetés alapján']],
  ['Egyedi arculat', [false, true, true, true]],
  ['Futár support és futár app', [false, false, true, 'Egyeztetés alapján']],
  ['Jutalék a rendelésekből', ['—', '0%', '0%', 'Egyeztetés alapján']],
]
