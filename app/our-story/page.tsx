import type { Metadata } from "next";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Our Story | Silent H",
  description:
    "Discover the memories, people and Mexican culinary traditions that inspire Silent H.",
};

export default function OurStory() {
  return (
    <main className="our-story-page" id="main-content">
      <section className="our-story-hero" aria-labelledby="our-story-title">
        <img
          className="our-story-hero-image"
          src="/media/our-story-chef.webp"
          alt="Chef Gerardo Saucedo seated inside the Silent H dining room"
          fetchPriority="high"
        />
        <div className="our-story-hero-vignette" aria-hidden="true" />
        <div className="our-story-hero-content">
          <h1 id="our-story-title">
            The soul of México,
            <span>reimagined</span>
          </h1>
          <p>
            Cuisine that is rooted in tradition, elevated by innovation, and undeniably
            memorable.
          </p>
        </div>
      </section>

      <section className="our-story-philosophy" aria-labelledby="philosophy-title">
        <h2 id="philosophy-title">Our culinary philosophy</h2>
        <p>
          It blends bold creativity with deep respect for Mexico&apos;s rich gastronomic heritage.
          Guided by Chef Gerardo Saucedo, our kitchen reimagines long-standing family recipes,
          bringing familiar flavours with refined technique, creating dishes that honour their
          origins while inviting new discovery. Every plate is inspired by the streets of Mexico,
          shaped by obsession for quality, and driven by an uncompromising pursuit of flavour.
        </p>
      </section>

      <section className="inspiration-showcase" aria-labelledby="inspiration-title">
        <img
          src="/media/our-story-inspiration.webp"
          alt="A sunlit family home on a residential street in Monterrey"
          loading="lazy"
        />
        <h2 id="inspiration-title">La inspiración</h2>
      </section>

      <section className="our-story-editorial" aria-label="The inspiration behind Silent H">
        <article className="our-story-row">
          <div className="our-story-arched-image">
            <img
              src="/media/our-story-grandmother.webp"
              alt="Chef Saucedo's grandmother preparing dough at her family table"
              loading="lazy"
            />
          </div>
          <div className="our-story-copy">
            <h2>The heart of our kitchen is a story rooted in love, memory, and tradition.</h2>
            <p>
              Chef Saucedo draws inspiration from his late grandmother, whose warmth and passion
              for cooking shaped his earliest memories.
            </p>
            <p>
              Her honoured recipes, once shared around a family table, now come to life on our
              menu - reimagined with elegance and respect for their origins. Each dish is a
              tribute to her legacy, blending the rich flavours of traditional Mexican cuisine
              with the artistry of fine dining. Through every bite, we invite you to experience
              the soul of his childhood and the enduring spirit of the woman who started it all.
            </p>
          </div>
        </article>

        <article className="our-story-row our-story-row-reverse">
          <div className="our-story-copy">
            <h2>Setting a tone that is both vibrant and refined.</h2>
            <p>Our service is intuitive and heartfelt, attentive without ever intruding.</p>
            <p>
              Whether you&apos;re joining us for an impromptu cocktail after a long day or gathering
              with friends for a celebratory dinner, we craft each moment with care. The
              experience feels effortless, elevated, and always memorable. A true taste of
              contemporary Mexico.
            </p>
          </div>
          <div className="our-story-arched-image our-story-table-image">
            <img
              src="/media/our-story-table.webp"
              alt="Silent H dishes and a cocktail arranged on a black-and-white tiled table"
              loading="lazy"
            />
          </div>
        </article>

        <article className="our-story-row">
          <div className="our-story-arched-image our-story-taco-image">
            <img
              src="/media/our-story-taco.webp"
              alt="Golden tacos served over a charcoal grill"
              loading="lazy"
            />
          </div>
          <div className="our-story-copy">
            <h2>Every dish tells a story.</h2>
            <p>
              At Silent H every visit becomes a cherished memory. From the sizzle of Espadas de
              rib eye asadas arriving at your table to the laughter shared over handcrafted
              regional-inspired cocktails, we&apos;re more than just a place to eat - we&apos;re a place
              where moments are made. Whether it&apos;s a lively family gathering, a date with a
              special someone, or a spontaneous night out with friends, our vibrant flavours and
              warm hospitality create an atmosphere that brings people together. Here, the
              experience goes beyond the plate, turning every visit into lasting memories.
            </p>
          </div>
        </article>
      </section>

      <section className="our-story-reservation" aria-labelledby="story-reservation-title">
        <div className="our-story-reservation-inner">
          <p className="our-story-reservation-kicker">Your table is waiting</p>
          <h2 id="story-reservation-title">
            <span>Experience the story</span>
            <span>of Silent H</span>
          </h2>
          <p>
            Join us for bold Mexican flavours, handcrafted cocktails, and a night made to be
            remembered.
          </p>
          <div className="our-story-reservation-actions">
            <a
              className="button our-story-reservation-primary"
              href="mailto:info@silenth.ca?subject=Reservation"
            >
              Book Your Reservation
            </a>
            <a className="button our-story-reservation-secondary" href="/#menu">
              View the Menu
            </a>
          </div>
        </div>
      </section>

      <section className="social-section" aria-labelledby="our-story-social-title">
        <img
          src="/media/social-door-figma.webp"
          alt="Silent H’s carved stone entrance glowing by candlelight"
          loading="lazy"
        />
        <div className="social-overlay">
          <h2 id="our-story-social-title">Let’s get social</h2>
          <div className="social-links">
            <a href="https://www.tiktok.com/@silenth.to?lang=en" aria-label="Silent H on TikTok">
              <FaTiktok aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/silenth.to/?hl=en" aria-label="Silent H on Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/silenth.to/" aria-label="Silent H on Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@silenth.toronto" aria-label="Silent H on YouTube">
              <FaYoutube aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
