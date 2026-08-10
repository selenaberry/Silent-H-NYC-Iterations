import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const menuFeatures = [
  {
    name: "Product name",
    image: "/media/menu-street-food.webp",
    alt: "A plated Mexican dish served over a black-and-white tiled table",
  },
  {
    name: "Product name",
    image: "/media/menu-tostadas.webp",
    alt: "A row of tostadas presented on a black ceramic platter",
  },
  {
    name: "Product name",
    image: "/media/menu-corn.webp",
    alt: "Grilled corn and vegetables served in a dark bowl",
  },
];

const journalPosts = [
  {
    title: "The best for you to try at home",
    image: "/media/journal-cactus.webp",
    alt: "Prickly pear cactus growing beneath a blue sky",
    category: "Ingredients",
  },
  {
    title: "It’s drinks o’clock in Mexico",
    image: "/media/journal-drinks.webp",
    alt: "A bright Mexican cocktail with lime and edible flowers",
    category: "Drinks",
  },
  {
    title: "Culture and food in one dish",
    image: "/media/journal-culture.webp",
    alt: "Colourful Mexican folk-art skulls",
    category: "Culture",
  },
  {
    title: "The best for you to try at home",
    image: "/media/journal-craft.webp",
    alt: "A chef preparing food by hand",
    category: "Ingredients",
  },
];

export default function Home() {
  return (
    <>
      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/media/hero-stained-glass.png"
            sizes="100vw"
            alt="A full stained-glass mural centred on a luminous golden sun"
            fetchPriority="high"
          />
          <div className="hero-vignette" aria-hidden="true" />
          <div className="hero-content">
            <h1 id="hero-title">
              Mexican flavours,
              <span>celebrated in NYC</span>
            </h1>
            <p>
              Chef Gerardo brings Mexico&apos;s street flavours to NYC. Elevated, authentic and
              an homage to Monterrey.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href="mailto:info@silenth.ca?subject=Reservation">
                Book Your Reservation
              </a>
              <a className="button" href="#menu">
                Our Menu
              </a>
            </div>
          </div>
        </section>

        <section className="intro-section" aria-labelledby="intro-title">
          <div className="intro-section-inner">
            <h2 id="intro-title">A Modern Mexican Restaurant in NYC</h2>
            <p>
              Silent H is a modern Mexican restaurant and agave cocktail lounge in NYC&apos;s
              Meatpacking District. Led by Chef Gerardo Álvarez Saucedo, the kitchen reimagines
              traditional Mexican family recipes with refined technique, from charred guacamole
              and crispy chicharrón tacos to mesquite-grilled rib-eye espadas and a 44oz tomahawk.
              Next door, our late-night lounge Aitch pours a world-class program of artisanal
              tequila and mezcal alongside elevated bites, with guest DJs Thursday through Sunday.
              Join us for happy hour every day from 5 to 7pm, settle in for a downtown NYC date
              night, or plan a private event across two Mexican-inspired spaces. Silent H is open
              for dinner Tuesday to Sunday from 5pm at 416 West 13th Street.
            </p>
          </div>
        </section>

        <div className="particle-stage">
          <section className="menu-section" id="menu" aria-labelledby="menu-title">
            <div className="section-intro">
              <h2 id="menu-title">Menú excepcional</h2>
              <p>
                From expertly crafted artisanal cocktails to dishes that celebrate authentic
                Mexican soul.
              </p>
            </div>

            <div className="menu-grid">
              {menuFeatures.map((item, index) => (
                <figure className={`menu-card menu-card-${index + 1}`} key={`${item.image}-${index}`}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <figcaption>{item.name}</figcaption>
                  {index === 0 ? (
                    <div className="carousel-dots" aria-label="Slide 4 of 8">
                      {Array.from({ length: 8 }, (_, dot) => (
                        <span className={dot === 3 ? "active" : ""} key={dot} />
                      ))}
                    </div>
                  ) : null}
                </figure>
              ))}
            </div>

            <a className="button section-button" href="mailto:info@silenth.ca?subject=Menu%20request">
              Explore the Menu
            </a>
          </section>

          <section className="events-section" id="events" aria-labelledby="events-title">
            <div className="section-intro">
              <h2 id="events-title">Private dining &amp; events</h2>
              <p>Plan your celebración auténtica in our vibrant space.</p>
              <p>Book your holiday event before October 31st and receive a $100 gift card.</p>
              <p>Terms apply</p>
            </div>
            <a className="button events-button" href="mailto:info@silenth.ca?subject=Plan%20an%20Event">
              Start Planning
            </a>
            <div className="event-image-wrap">
              <img
                src="/media/private-dining-figma.webp"
                alt="Silent H private dining room with a large Mexican mural"
                loading="lazy"
              />
            </div>
          </section>
        </div>

        <section className="story-section" id="story" aria-labelledby="story-title">
          <img className="story-city" src="/media/monterrey-mountain.webp" alt="" aria-hidden="true" />
          <div className="story-city-overlay" aria-hidden="true" />
          <div className="story-inner">
            <img
              className="story-poster"
              src="/media/story-poster-figma.webp"
              alt="An illustrated journey through Monterrey, from mountains and industry to architecture and food"
              loading="lazy"
            />
            <blockquote>
              <h2 id="story-title">
                “I believe the best ingredient
                <br />
                is nostalgia,
              </h2>
              <p>
                which is reflected in every dish on this
                <br />
                menu. It is a tribute to my family, to
                <br />
                México and to my culture.”
              </p>
              <cite>Chef Gerardo Álvarez Saucedo</cite>
              <a className="button" href="/our-story">
                A Taste of Our Story
              </a>
            </blockquote>
          </div>
        </section>

        <section className="journal-section" id="journal" aria-labelledby="journal-title">
          <div className="section-intro">
            <h2 id="journal-title">A blog full of experiences</h2>
            <p>A closer look at the flavours, culture, and experiences behind Silent H.</p>
          </div>
          <div className="journal-grid">
            {journalPosts.map((post, index) => (
              <article className="journal-card" key={`${post.title}-${index}`}>
                <img src={post.image} alt={post.alt} loading="lazy" />
                <h3>{post.title}</h3>
                <p className="byline">Silent H team</p>
                <time dateTime="2026-07-31">5 days ago</time>
                <span className="category">{post.category}</span>
              </article>
            ))}
          </div>
          <a className="journal-link" href="#journal">View all stories</a>
        </section>

        <section className="social-section" id="social" aria-labelledby="social-title">
          <img
            src="/media/social-footer-neon.png"
            alt="A glowing neon sign reading You Are Exactly Where You Need To Be against a black background"
            loading="lazy"
          />
          <div className="social-overlay">
            <h2 id="social-title">Let’s get social</h2>
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

    </>
  );
}
