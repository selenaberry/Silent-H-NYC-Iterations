export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="quick-links">
        <h2>Quick links</h2>
        <a href="/#menu">Menu</a>
        <a href="/#events">Events</a>
        <a href="/our-story">Our Story</a>
        <a href="mailto:info@silenth.ca?subject=Reservation">Reserve a Table</a>
      </div>
      <address>
        <a href="https://www.google.com/maps?q=461+King+St+W,+Toronto,+ON">
          461 King St. W | 416 900 3535 | info@silenth.ca
        </a>
      </address>
      <a className="maps-link" href="https://www.google.com/maps?q=461+King+St+W,+Toronto,+ON">
        <span aria-hidden="true">📍</span> Find us on Google Maps
      </a>
      <div className="footer-actions">
        <a
          className="mailing-button"
          href="mailto:info@silenth.ca?subject=Join%20the%20Silent%20H%20mailing%20list"
        >
          Join Our Mailing Community
        </a>
        <img src="/media/tripadvisor.png" alt="Recommended on Tripadvisor" loading="lazy" />
      </div>
    </footer>
  );
}
