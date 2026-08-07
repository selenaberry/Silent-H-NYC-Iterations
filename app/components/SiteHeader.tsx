export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav
        className="main-nav"
        aria-label="Primary navigation"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <a href="/#menu">Menu</a>
        <a href="/#menu">Happy Hour</a>
        <a className="brand-mark" href="/" aria-label="Silent H home">
          <img src="/media/silent-h-logo.svg" alt="" />
        </a>
        <a href="mailto:info@silenth.ca?subject=Reservation">Reserve</a>
        <a href="/#events">Plan an Event</a>
      </nav>
    </header>
  );
}
