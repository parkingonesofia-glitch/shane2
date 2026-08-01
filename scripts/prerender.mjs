/**
 * Post-build prerender script for Vite SPA (parkingone.bg)
 *
 * Problem: A Vite SPA serves the same index.html for every route.
 * Crawlers (Googlebot, AdsBot) that don't execute JS see identical blank shells
 * on every internal page.
 *
 * Solution: After `vite build`, this script copies dist/index.html into each
 * route's subdirectory and injects unique <noscript> content + meta tags.
 * Vercel serves dist/pricing/index.html for /pricing, dist/terms/index.html
 * for /terms, etc. — so each page has unique crawlable HTML.
 */

import fs from "fs";
import path from "path";

const DIST = path.resolve("dist");
const BASE_HTML = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

const ROUTES = [
  {
    path: "pricing",
    title: "Цени - Parking One | Паркинг Летище София",
    description: "Вижте цените за паркиране до Летище София. Паркинг от 1 до 30+ дни с безплатен трансфер. Без предплащане.",
    h1: "Цени за паркиране",
    content: `
      <h1>Цени за паркиране до Летище София</h1>
      <p>Parking One предлага конкурентни цени за паркиране в близост до Летище София.</p>
      <ul>
        <li>Кратък престой: от 1 до 3 дни</li>
        <li>Средносрочен престой: от 4 до 14 дни</li>
        <li>Дългосрочен престой: 15+ дни</li>
      </ul>
      <p>Безплатен трансфер до Терминал 1 и Терминал 2. Без предплащане.</p>
      <address>
        <strong>Parking One</strong><br>
        Улица Източна Тангента 23, София, България<br>
        Тел: <a href="tel:+359877109788">+359 877 109 788</a><br>
        Имейл: <a href="mailto:info@parkingone.bg">info@parkingone.bg</a><br>
        Работно време: 24/7
      </address>`,
  },
  {
    path: "booking",
    title: "Резервация - Parking One | Паркинг Летище София",
    description: "Резервирайте паркинг до Летище София онлайн. Бързо и лесно — без предплащане, с безплатен трансфер.",
    content: `
      <h1>Онлайн резервация за паркинг до Летище София</h1>
      <p>Резервирайте паркомясто в Parking One онлайн. Попълнете формата с дати на пристигане и заминаване.</p>
      <p>Безплатен трансфер до Терминал 1 и Терминал 2. Без предплащане.</p>
      <address>
        <strong>Parking One</strong><br>
        Улица Източна Тангента 23, София, България<br>
        Тел: <a href="tel:+359877109788">+359 877 109 788</a><br>
        Имейл: <a href="mailto:info@parkingone.bg">info@parkingone.bg</a><br>
        Работно време: 24/7
      </address>`,
  },
  {
    path: "contact",
    title: "Контакти - Parking One | Паркинг Летище София",
    description: "Свържете се с Parking One. Адрес, телефон, имейл и работно време на паркинга до Летище София.",
    content: `
      <h1>Контакти — Parking One</h1>
      <address>
        <strong>Parking One</strong><br>
        Улица Източна Тангента 23, София, България<br>
        Тел: <a href="tel:+359877109788">+359 877 109 788</a><br>
        Имейл: <a href="mailto:info@parkingone.bg">info@parkingone.bg</a><br>
        Работно време: 24/7, всеки ден
      </address>`,
  },
  {
    path: "services",
    title: "Услуги - Parking One | Паркинг Летище София",
    description: "Услуги на Parking One: охраняем паркинг, безплатен трансфер, услуга Ключове, 24/7 видеонаблюдение.",
    content: `
      <h1>Услуги на Parking One</h1>
      <ul>
        <li>Охраняем паркинг до Летище София</li>
        <li>Безплатен трансфер до Терминал 1 и Терминал 2</li>
        <li>Услуга "Ключове" — оставете автомобила при нас</li>
        <li>24/7 видеонаблюдение</li>
        <li>Паркиране без предплащане</li>
      </ul>
      <address>
        <strong>Parking One</strong><br>
        Улица Източна Тангента 23, София, България<br>
        Тел: <a href="tel:+359877109788">+359 877 109 788</a><br>
        Имейл: <a href="mailto:info@parkingone.bg">info@parkingone.bg</a>
      </address>`,
  },
  {
    path: "how-it-works",
    title: "Как работи - Parking One | Паркинг Летище София",
    description: "Как работи Parking One: резервирайте онлайн, пристигнете, безплатен трансфер до терминала — само 4 стъпки.",
    content: `
      <h1>Как работи Parking One</h1>
      <ol>
        <li><strong>Резервирайте онлайн</strong> — попълнете формата с дати и данни за автомобила</li>
        <li><strong>Получете потвърждение</strong> — телефонно и по имейл с адрес и инструкции</li>
        <li><strong>Пристигнете</strong> — паркирайте и се качете на безплатния ни трансфер до терминала</li>
        <li><strong>При завръщане</strong> — обадете се и ще ви вземем от терминала</li>
      </ol>
      <address>
        <strong>Parking One</strong><br>
        Улица Източна Тангента 23, София, България<br>
        Тел: <a href="tel:+359877109788">+359 877 109 788</a><br>
        Имейл: <a href="mailto:info@parkingone.bg">info@parkingone.bg</a>
      </address>`,
  },
  {
    path: "about",
    title: "За нас - Parking One | Паркинг Летище София",
    description: "Parking One — охраняем паркинг на 5 минути от Летище София с безплатен трансфер и 24/7 видеонаблюдение.",
    content: `
      <h1>За Parking One</h1>
      <p>Parking One е охраняем паркинг, разположен на 5 минути от Летище София Терминал 1 и Терминал 2.</p>
      <p>Предлагаме безопасно и удобно паркиране с безплатен трансфер, видеонаблюдение 24/7 и без предплащане.</p>
      <address>
        <strong>Parking One</strong><br>
        Улица Източна Тангента 23, София, България<br>
        Тел: <a href="tel:+359877109788">+359 877 109 788</a><br>
        Имейл: <a href="mailto:info@parkingone.bg">info@parkingone.bg</a><br>
        Работно време: 24/7
      </address>`,
  },
  {
    path: "faq",
    title: "Въпроси и отговори - Parking One | Паркинг Летище София",
    description: "Често задавани въпроси за паркинг до Летище София — цени, резервации, трансфер, работно време.",
    content: `
      <h1>Въпроси и отговори — Parking One</h1>
      <dl>
        <dt>Нужна ли е резервация?</dt>
        <dd>Препоръчваме резервация предварително за гарантирано място.</dd>
        <dt>Има ли безплатен трансфер?</dt>
        <dd>Да — безплатен трансфер до Терминал 1 и Терминал 2 на Летище София.</dd>
        <dt>Как се плаща?</dt>
        <dd>На място — в брой или с карта. Без предплащане.</dd>
        <dt>Работите ли 24 часа?</dt>
        <dd>Да — паркингът работи 24/7 всеки ден от годината.</dd>
      </dl>
      <address>
        <strong>Parking One</strong><br>
        Улица Източна Тангента 23, София, България<br>
        Тел: <a href="tel:+359877109788">+359 877 109 788</a><br>
        Имейл: <a href="mailto:info@parkingone.bg">info@parkingone.bg</a>
      </address>`,
  },
  {
    path: "terms",
    title: "Общи условия - Parking One",
    description: "Общи условия за ползване на услугите на Parking One — паркинг до Летище София.",
    content: `
      <h1>Общи условия — Parking One</h1>
      <p>Тези общи условия регулират ползването на услугите на "Ю Транс" ЕООД (Parking One), ЕИК 207838282.</p>
      <address>
        <strong>Parking One</strong><br>
        Улица Източна Тангента 23, София, България<br>
        Тел: <a href="tel:+359877109788">+359 877 109 788</a><br>
        Имейл: <a href="mailto:info@parkingone.bg">info@parkingone.bg</a>
      </address>`,
  },
  {
    path: "privacy-policy",
    title: "Политика за поверителност - Parking One",
    description: "Политика за поверителност на Parking One — как събираме и обработваме личните ви данни (GDPR).",
    content: `
      <h1>Политика за поверителност — Parking One</h1>
      <p>Администратор на личните данни: "Ю Транс" ЕООД, ЕИК 207838282.</p>
      <p>Събираме имена, имейл и телефон единствено за обработка на резервации.</p>
      <address>
        Имейл за данни: <a href="mailto:info@parkingone.bg">info@parkingone.bg</a>
      </address>`,
  },
  {
    path: "cookie-policy",
    title: "Политика за бисквитки - Parking One",
    description: "Политика за бисквитки на Parking One — какви бисквитки използваме и как да ги управлявате.",
    content: `
      <h1>Политика за бисквитки — Parking One</h1>
      <p>Сайтът използва задължителни бисквитки за работа и аналитични бисквитки (Google Analytics) за подобряване на услугата.</p>`,
  },
  {
    path: "cancellation",
    title: "Условия за отмяна - Parking One",
    description: "Условия за отмяна и възстановяване на Parking One — как да отмените резервация и политика при непоявяване.",
    content: `
      <h1>Условия за отмяна — Parking One</h1>
      <p>Резервациите могат да бъдат отменени безплатно до 24 часа преди пристигането.</p>
      <p>Тъй като не се изисква предплащане, не се налага възстановяване на суми.</p>
      <address>
        Тел: <a href="tel:+359877109788">+359 877 109 788</a><br>
        Имейл: <a href="mailto:info@parkingone.bg">info@parkingone.bg</a>
      </address>`,
  },
];

let count = 0;

for (const route of ROUTES) {
  const dir = path.join(DIST, route.path);
  fs.mkdirSync(dir, { recursive: true });

  // Replace title
  let html = BASE_HTML.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  );

  // Replace description meta
  html = html.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${route.description}$2`
  );

  // Replace canonical
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1https://parkingone.bg/${route.path}$2`
  );

  // Replace og:url
  html = html.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1https://parkingone.bg/${route.path}$2`
  );

  // Replace og:title
  html = html.replace(
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${route.title}$2`
  );

  // Replace og:description
  html = html.replace(
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${route.description}$2`
  );

  // Inject unique noscript block (replacing the existing one from index.html)
  const noscriptBlock = `<noscript>
    <main style="font-family:sans-serif;max-width:800px;margin:2rem auto;padding:1rem">
      <nav style="margin-bottom:1rem">
        <a href="/">Начало</a> |
        <a href="/booking">Резервация</a> |
        <a href="/pricing">Цени</a> |
        <a href="/services">Услуги</a> |
        <a href="/how-it-works">Как работи</a> |
        <a href="/about">За нас</a> |
        <a href="/contact">Контакти</a> |
        <a href="/faq">Въпроси</a> |
        <a href="/terms">Общи условия</a> |
        <a href="/privacy-policy">Поверителност</a> |
        <a href="/cancellation">Отмяна</a>
      </nav>
      ${route.content}
    </main>
  </noscript>`;

  // Replace existing noscript block or insert before </body>
  if (html.includes("<noscript>")) {
    html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, noscriptBlock);
  } else {
    html = html.replace("</body>", `${noscriptBlock}\n  </body>`);
  }

  fs.writeFileSync(path.join(dir, "index.html"), html, "utf-8");
  console.log(`✓ Generated dist/${route.path}/index.html`);
  count++;
}

console.log(`\nDone — ${count} pages prerendered.`);
