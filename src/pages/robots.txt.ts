export function GET({ site }) {
  const root = String(site).replace(/\/$/, '') + import.meta.env.BASE_URL.replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${root}/sitemap-index.xml\n`, { headers: { 'Content-Type': 'text/plain' } });
}
