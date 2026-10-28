// Product data for all articles.
// AFFILIATE LINKS: when an affiliate programme is approved, paste the tracked link into
// `affiliateUrl` (leave '' until then). Cards automatically use affiliateUrl if set,
// otherwise they fall back to the plain retailer `url`.
// Prices were seen on the linked page on `priceSeen` date. Re-check before relying on them.
export type Product = { id: string; name: string; retailer: string; url: string; affiliateUrl: string; price?: string; priceSeen?: string; };

export const PRODUCTS: Record<string, Product> = {
  'ikea-mittzon-sitstand': { id: 'ikea-mittzon-sitstand', name: 'IKEA MITTZON Desk sit/stand, electric', retailer: 'IKEA Singapore', url: 'https://www.ikea.com/sg/en/cat/mittzon-office-desks-700542/', affiliateUrl: '' /* AFFILIATE_PLACEHOLDER */, price: 'around S$599 to S$659 depending on size (IKEA Family price)', priceSeen: '28 Oct 2026' },
  'flexispot-e7-pro': { id: 'flexispot-e7-pro', name: 'FlexiSpot E7 Pro standing desk frame', retailer: 'Howfine (Singapore)', url: 'https://howfine.com.sg/brands/Flexispot', affiliateUrl: '' /* AFFILIATE_PLACEHOLDER */, price: 'around S$500 for the frame', priceSeen: '28 Oct 2026' },
  'secretlab-magnus-pro': { id: 'secretlab-magnus-pro', name: 'Secretlab MAGNUS Pro', retailer: 'Secretlab SG', url: 'https://secretlab.sg/pages/magnus-pro', affiliateUrl: '' /* AFFILIATE_PLACEHOLDER */ },
  'ikea-markus': { id: 'ikea-markus', name: 'IKEA MARKUS office chair', retailer: 'IKEA Singapore', url: 'https://www.ikea.com/sg/en/p/markus-office-chair-vissle-dark-grey-50261151/', affiliateUrl: '' /* AFFILIATE_PLACEHOLDER */, price: 'around S$199', priceSeen: '28 Oct 2026' },
  'ergotune-joobie-lite': { id: 'ergotune-joobie-lite', name: 'ErgoTune Joobie Lite', retailer: 'ErgoTune', url: 'https://ergotune.com/collections/chairs', affiliateUrl: '' /* AFFILIATE_PLACEHOLDER */, price: 'around S$349', priceSeen: '28 Oct 2026' },
  'ergotune-supreme': { id: 'ergotune-supreme', name: 'ErgoTune Supreme', retailer: 'ErgoTune', url: 'https://ergotune.com/products/ergotune-supreme', affiliateUrl: '' /* AFFILIATE_PLACEHOLDER */, price: 'from around S$529 (sale price)', priceSeen: '28 Oct 2026' },
  'north-bayou-f80': { id: 'north-bayou-f80', name: 'North Bayou F80 monitor arm', retailer: 'Harvey Norman Singapore', url: 'https://www.harveynorman.com.sg/tv-and-audio/tv-accessories-en/tv-mounts-and-brackets-en/north-bayou-f80-17-to-30-inch-monitor-tv-desktop-bracket-holder-mount-grey.html', affiliateUrl: '' /* AFFILIATE_PLACEHOLDER */, price: 'around S$38', priceSeen: '28 Oct 2026' },
  'ergotron-lx': { id: 'ergotron-lx', name: 'Ergotron LX Desk Mount Monitor Arm', retailer: 'SourceIT', url: 'https://sourceit.com.sg/products/ergotron-lx-desk-mount-monitor-arm-matte-black-45-241-224', affiliateUrl: '' /* AFFILIATE_PLACEHOLDER */, price: 'around S$174.80 (matte black or white)', priceSeen: '28 Oct 2026' },
  'ergotron-lx-pro': { id: 'ergotron-lx-pro', name: 'Ergotron LX Pro Desk Monitor Arm', retailer: 'Langya Tech', url: 'https://www.langyatech.com/en-sg/collections/monitor-arms-accessories', affiliateUrl: '' /* AFFILIATE_PLACEHOLDER */, price: 'around S$211.80', priceSeen: '28 Oct 2026' },
};
export const linkFor = (p: Product) => p.affiliateUrl || p.url;
