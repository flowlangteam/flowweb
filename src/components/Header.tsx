import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-bracket">[</span>
            <span className="logo-text">flow</span>
            <span className="logo-bracket">]</span>
          </div>
          <span className="tagline">
            multi-target • interoperable • expressive
          </span>
        </div>
        <nav className="nav">
          <a href="#docs" className="nav-link">
            docs
          </a>
          <a href="#examples" className="nav-link">
            examples
          </a>
          <a
            href="https://github.com/flowlangteam/flow"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </nav>
      </div>
    </header>
  );
}
