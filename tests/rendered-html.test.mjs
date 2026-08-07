import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Silent H homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Silent H \| Mexican Flavours, Celebrated in NYC<\/title>/i);
  assert.match(html, /Mexican flavours,/i);
  assert.match(html, /celebrated in NYC/i);
  assert.match(
    html,
    /Chef Gerardo brings Mexico(?:&#x27;|')s street flavours to NYC\. Elevated, authentic and an homage to Monterrey\./i,
  );
  assert.match(html, /Book Your Reservation/i);
  assert.match(html, /Our Menu/i);
  assert.match(html, /A Modern Mexican Restaurant in NYC/i);
  assert.match(html, /Silent H is a modern Mexican restaurant and agave cocktail lounge in NYC(?:&#x27;|')s Meatpacking District/i);
  assert.match(html, /Menú excepcional/i);
  assert.match(html, /Private dining &amp; events/i);
  assert.match(html, /A blog full of experiences/i);
  assert.match(html, /Let’s get social/i);
});

test("server-renders the Silent H Our Story page", async () => {
  const response = await render("/our-story");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /The soul of México,/i);
  assert.match(html, /Our culinary philosophy/i);
  assert.match(html, /La inspiración/i);
  assert.match(html, /The heart of our kitchen/i);
  assert.match(html, /Every dish tells a story/i);
  assert.match(html, /Let(?:&#x27;|'|’|&#x2019;)s get social/i);
});

test("homepage source keeps its supplied media and core accessibility hooks", async () => {
  const [css, page, layout, header, footer, storyPage] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/SiteHeader.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/SiteFooter.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/our-story/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /className="skip-link"/);
  assert.match(header, /aria-label="Primary navigation"/);
  assert.match(header, /href="\/#menu"/);
  assert.match(footer, /href="\/our-story"/);
  assert.match(page, /fetchPriority="high"/);
  assert.match(page, /hero-full-mural\.webp/);
  assert.match(page, /story-poster-figma\.webp/);
  assert.match(page, /social-door-figma\.webp/);
  assert.match(page, /FaTiktok/);
  assert.match(page, /FaInstagram/);
  assert.match(page, /FaFacebookF/);
  assert.match(page, /FaYoutube/);
  assert.match(page, /button button-primary/);
  assert.match(page, /href="\/our-story"/);
  assert.doesNotMatch(page, /Show the next menu feature|round-arrow/);
  assert.doesNotMatch(page, /Enter Aitch|aitch-tab/);
  assert.match(page, /story-city-overlay/);
  assert.match(page, /Chef Gerardo Álvarez Saucedo/);
  assert.match(storyPage, /our-story-chef\.webp/);
  assert.match(storyPage, /our-story-inspiration\.webp/);
  assert.match(storyPage, /our-story-grandmother\.webp/);
  assert.match(storyPage, /our-story-table\.webp/);
  assert.match(storyPage, /our-story-taco\.webp/);
  assert.match(storyPage, /social-door-figma\.webp/);
  assert.match(storyPage, /className="social-section"/);
  assert.match(storyPage, /our-story-reservation/);
  assert.match(storyPage, /<span>Experience the story<\/span>/);
  assert.match(storyPage, /<span>of Silent H<\/span>/);
  assert.match(storyPage, /Book Your Reservation/);
  assert.match(storyPage, /View the Menu/);
  assert.match(layout, /\/og\.png/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /\.site-header\s*\{[^}]*position:\s*fixed/s);
  assert.match(css, /border-color:\s*#eb4660/);
  assert.match(css, /\.button-primary\s*\{[^}]*background:\s*#eb4660[^}]*color:\s*#050505/s);
  assert.match(css, /cubic-bezier\(0\.22,\s*1,\s*0\.36,\s*1\)/);
  assert.match(css, /rgba\(0,\s*0,\s*0,\s*0\.1\)\s*65%/);
  assert.match(css, /padding-top:\s*530px/);
  assert.match(css, /0 2px 8px rgba\(0,\s*0,\s*0,\s*0\.45\)/);
  assert.match(css, /\.hero h1\s*\{[^}]*line-height:\s*0\.98/s);
  assert.match(css, /\.hero h1\s*\{[^}]*letter-spacing:\s*0\.08em/s);
  assert.match(css, /\.hero-content > p\s*\{[^}]*width:\s*min\(1240px,\s*calc\(100vw - 24px\)\)[^}]*margin:\s*28px auto 28px[^}]*font-size:\s*20px[^}]*line-height:\s*1[^}]*letter-spacing:\s*0\.22em[^}]*white-space:\s*nowrap/s);
  assert.match(css, /\.intro-section\s*\{[^}]*background:\s*#000[^}]*text-align:\s*center/s);
  assert.match(css, /\.intro-section p\s*\{[^}]*font-family:\s*"NeueBit"[^}]*font-size:\s*clamp\(20px,\s*1\.85vw,\s*24px\)[^}]*line-height:\s*1\.45[^}]*text-wrap:\s*pretty/s);
  assert.match(css, /\.hero\s*\{[^}]*min-height:\s*980px/s);
  assert.match(css, /\.menu-section\s*\{[^}]*padding:\s*120px 0 110px/s);
  assert.match(css, /\.main-nav\s*\{[^}]*width:\s*620px;[^}]*height:\s*74px/s);
  assert.match(css, /\.main-nav\s*\{[^}]*background:\s*rgba\(0,\s*0,\s*0,\s*0\.4\)[^}]*backdrop-filter:\s*blur\(10px\)/s);
  assert.match(css, /\.our-story-hero h1\s*\{[^}]*font-size:\s*clamp\(54px,\s*5\.15vw,\s*66px\)[^}]*line-height:\s*0\.98[^}]*letter-spacing:\s*0\.055em/s);
  assert.match(css, /\.inspiration-showcase\s*\{[^}]*border-radius:\s*0/s);
  assert.match(css, /\.our-story-arched-image\s*\{[^}]*border-radius:\s*0/s);
  assert.match(css, /\.our-story-row-reverse\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s*463px[^}]*gap:\s*46px/s);
  assert.match(css, /\.our-story-table-image\s*\{[^}]*height:\s*617px/s);
  assert.match(css, /\.our-story-page \.our-story-hero-image,\s*\.our-story-page \.inspiration-showcase,\s*\.our-story-page \.our-story-arched-image,\s*\.our-story-page \.social-section > img\s*\{[^}]*border:\s*0[^}]*border-image:\s*none/s);
  assert.doesNotMatch(css, /--stained-glass-border/);
  assert.match(css, /\.our-story-philosophy::before\s*\{[^}]*background:\s*#000/s);
  assert.doesNotMatch(css, /rgba\(232,\s*61,\s*101|rgba\(143,\s*22,\s*67|rgba\(238,\s*75,\s*116|rgba\(104,\s*18,\s*51/);
  assert.match(css, /\.our-story-reservation\s*\{[^}]*min-height:\s*470px[^}]*background:\s*#d24965/s);
  assert.match(css, /\.our-story-reservation h2 span\s*\{[^}]*display:\s*block[^}]*white-space:\s*nowrap/s);
  assert.match(css, /\.our-story-reservation-actions\s*\{[^}]*display:\s*flex/s);
  assert.match(css, /\.intro-section p,\s*\.section-intro p,\s*\.our-story-hero-content p,\s*\.our-story-philosophy p,\s*\.our-story-copy p,\s*\.our-story-reservation-inner > p:not\(\.our-story-reservation-kicker\)\s*\{[^}]*font-family:\s*"NeueBit"[^}]*font-weight:\s*400[^}]*line-height:\s*1\.45[^}]*letter-spacing:\s*0\.025em/s);
  assert.match(css, /\.story-poster\s*\{[^}]*top:\s*9\.5vw[^}]*left:\s*13\.05vw[^}]*width:\s*28\.52vw/s);
  assert.match(css, /\.story-section blockquote\s*\{[^}]*top:\s*29\.77vw[^}]*left:\s*50\.78vw[^}]*width:\s*36\.17vw/s);

  await Promise.all([
    access(new URL("public/media/hero-full-mural.webp", templateRoot)),
    access(new URL("public/media/private-dining-figma.webp", templateRoot)),
    access(new URL("public/media/story-poster-figma.webp", templateRoot)),
    access(new URL("public/media/social-door-figma.webp", templateRoot)),
    access(new URL("public/media/our-story-chef.webp", templateRoot)),
    access(new URL("public/media/our-story-inspiration.webp", templateRoot)),
    access(new URL("public/media/our-story-grandmother.webp", templateRoot)),
    access(new URL("public/media/our-story-table.webp", templateRoot)),
    access(new URL("public/media/our-story-taco.webp", templateRoot)),
    access(new URL("public/og.png", templateRoot)),
  ]);
});
