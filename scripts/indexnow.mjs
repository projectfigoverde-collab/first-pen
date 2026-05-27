const KEY = '1e40907a96434ada9cb5db83001772a7';
const HOST = 'firstsecurity.com.br';
const KEY_LOCATION = `https://firstsecurity.com.br/${KEY}.txt`;

const URLS = [
  'https://firstsecurity.com.br/',
  'https://firstsecurity.com.br/orcamento',
  'https://firstsecurity.com.br/red-team',
  'https://firstsecurity.com.br/servicos',
  'https://firstsecurity.com.br/servicos/pentest-web',
  'https://firstsecurity.com.br/servicos/pentest-api',
  'https://firstsecurity.com.br/servicos/pentest-cloud',
  'https://firstsecurity.com.br/servicos/pentest-mobile',
  'https://firstsecurity.com.br/servicos/pentest-infraestrutura',
  'https://firstsecurity.com.br/servicos/pentest-active-directory',
  'https://firstsecurity.com.br/servicos/pentest-as-a-service',
  'https://firstsecurity.com.br/servicos/pentest-ai',
  'https://firstsecurity.com.br/servicos/pentest-iot',
  'https://firstsecurity.com.br/servicos/purple-team',
  'https://firstsecurity.com.br/pentest/o-que-e',
  'https://firstsecurity.com.br/pentest/como-funciona',
  'https://firstsecurity.com.br/pentest/tipos',
  'https://firstsecurity.com.br/pentest/quanto-custa',
  'https://firstsecurity.com.br/pentest/como-escolher-empresa',
  'https://firstsecurity.com.br/pentest',
  'https://firstsecurity.com.br/compliance',
  'https://firstsecurity.com.br/compliance/pentest-lgpd',
  'https://firstsecurity.com.br/compliance/pentest-pci-dss',
  'https://firstsecurity.com.br/compliance/pentest-iso-27001',
  'https://firstsecurity.com.br/compliance/pentest-bacen',
  'https://firstsecurity.com.br/compliance/pentest-soc-2',
  'https://firstsecurity.com.br/compliance/pentest-nist-csf',
  'https://firstsecurity.com.br/segmentos',
  'https://firstsecurity.com.br/segmentos/pentest-fintech',
  'https://firstsecurity.com.br/segmentos/pentest-bancos',
  'https://firstsecurity.com.br/segmentos/pentest-saas',
  'https://firstsecurity.com.br/segmentos/pentest-e-commerce',
  'https://firstsecurity.com.br/segmentos/pentest-governo',
  'https://firstsecurity.com.br/comparativos',
  'https://firstsecurity.com.br/comparativos/pentest-vs-analise-de-vulnerabilidade',
  'https://firstsecurity.com.br/quem-somos',
  'https://firstsecurity.com.br/quem-somos/metodologia',
  'https://firstsecurity.com.br/quem-somos/equipe',
  'https://firstsecurity.com.br/onde-atendemos',
  'https://firstsecurity.com.br/casos-de-uso',
  'https://firstsecurity.com.br/contato',
  'https://firstsecurity.com.br/glossario',
  'https://firstsecurity.com.br/blog',
  'https://firstsecurity.com.br/blog/owasp-top-10-2025',
  'https://firstsecurity.com.br/blog/kerberoasting-pratica-ataque-defesa',
  'https://firstsecurity.com.br/blog/ssrf-cloud-aws-exploracao-impacto',
  'https://firstsecurity.com.br/blog/como-avaliar-relatorio-pentest',
  'https://firstsecurity.com.br/blog/prompt-injection-llms-ataques-corporativos',
  'https://firstsecurity.com.br/blog/pci-dss-4-pentest-requisitos-11',
];

async function submit(engine) {
  const res = await fetch(`https://${engine}/indexnow`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: URLS,
    }),
  });
  return res.status;
}

const ENGINES = [
  'api.indexnow.org',
  'www.bing.com',
  'search.seznam.cz',
  'yandex.com',
];

console.log(`IndexNow — submetendo ${URLS.length} URLs...\n`);

for (const engine of ENGINES) {
  try {
    const status = await submit(engine);
    const ok = status === 200 || status === 202;
    console.log(`${ok ? 'OK' : 'ERRO'} [${status}] ${engine}`);
  } catch (err) {
    console.log(`ERRO ${engine}: ${err.message}`);
  }
}

console.log('\nConcluido.');
