import type { APIRoute } from 'astro';

const SITE = 'https://firstsecurity.com.br';
const TODAY = '2026-05-25';

const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [
  // Prioridade máxima — conversão e home
  { loc: '/',             lastmod: TODAY, changefreq: 'daily',   priority: '1.0' },
  { loc: '/orcamento',    lastmod: TODAY, changefreq: 'weekly',  priority: '1.0' },
  { loc: '/red-team',     lastmod: TODAY, changefreq: 'weekly',  priority: '1.0' },
  { loc: '/servicos',     lastmod: TODAY, changefreq: 'weekly',  priority: '1.0' },

  // Serviços — 0.9
  { loc: '/servicos/pentest-web',              lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/servicos/pentest-api',              lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/servicos/pentest-cloud',            lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/servicos/pentest-mobile',           lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/servicos/pentest-infraestrutura',   lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/servicos/pentest-active-directory', lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/servicos/pentest-as-a-service',     lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/servicos/pentest-ai',               lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/servicos/pentest-iot',              lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
  { loc: '/servicos/purple-team',              lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },

  // Conteúdo educativo pentest — 0.85
  { loc: '/pentest/o-que-e',              lastmod: TODAY, changefreq: 'monthly', priority: '0.85' },
  { loc: '/pentest/como-funciona',        lastmod: TODAY, changefreq: 'monthly', priority: '0.85' },
  { loc: '/pentest/tipos',                lastmod: TODAY, changefreq: 'monthly', priority: '0.85' },
  { loc: '/pentest/quanto-custa',         lastmod: TODAY, changefreq: 'monthly', priority: '0.85' },
  { loc: '/pentest/como-escolher-empresa',lastmod: TODAY, changefreq: 'monthly', priority: '0.85' },
  { loc: '/pentest',                      lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },

  // Compliance — 0.8
  { loc: '/compliance',                   lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },
  { loc: '/compliance/pentest-lgpd',      lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },
  { loc: '/compliance/pentest-pci-dss',   lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },
  { loc: '/compliance/pentest-iso-27001', lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },
  { loc: '/compliance/pentest-bacen',     lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },
  { loc: '/compliance/pentest-soc-2',     lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },
  { loc: '/compliance/pentest-nist-csf',  lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },

  // Segmentos — 0.8
  { loc: '/segmentos',                     lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },
  { loc: '/segmentos/pentest-fintech',     lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },
  { loc: '/segmentos/pentest-bancos',      lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },
  { loc: '/segmentos/pentest-saas',        lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },
  { loc: '/segmentos/pentest-e-commerce',  lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },
  { loc: '/segmentos/pentest-governo',     lastmod: TODAY, changefreq: 'monthly', priority: '0.80' },

  // Comparativos — 0.75
  { loc: '/comparativos',                                       lastmod: TODAY, changefreq: 'monthly', priority: '0.75' },
  { loc: '/comparativos/pentest-vs-analise-de-vulnerabilidade', lastmod: TODAY, changefreq: 'monthly', priority: '0.75' },

  // Institucionais — 0.7
  { loc: '/quem-somos',            lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: '/quem-somos/metodologia',lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: '/quem-somos/equipe',     lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: '/onde-atendemos',        lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: '/casos-de-uso',          lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: '/contato',               lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: '/glossario',             lastmod: TODAY, changefreq: 'weekly',  priority: '0.70' },
  { loc: '/blog',                                              lastmod: TODAY, changefreq: 'daily',   priority: '0.70' },

  // Blog — artigos — 0.70
  { loc: '/blog/owasp-top-10-2025',                            lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: '/blog/kerberoasting-pratica-ataque-defesa',          lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: '/blog/ssrf-cloud-aws-exploracao-impacto',            lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: '/blog/como-avaliar-relatorio-pentest',               lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: '/blog/prompt-injection-llms-ataques-corporativos',   lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: '/blog/pci-dss-4-pentest-requisitos-11',              lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(u => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
