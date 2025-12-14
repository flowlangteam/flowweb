import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">flow</h4>
            <p className="footer-description">
              A systems programming language with multi-target compilation and
              seamless interoperability.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">learn</h4>
            <ul className="footer-links">
              <li>
                <a href="#documentation">documentation</a>
              </li>
              <li>
                <a href="#tutorial">tutorial</a>
              </li>
              <li>
                <a href="#examples">examples</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">community</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://github.com/flowlangteam/flow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </li>
              <li>
                <a href="#discord">discord</a>
              </li>
              <li>
                <a href="#forum">forum</a>
              </li>
              <li>
                <a href="#reddit">reddit</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">resources</h4>
            <ul className="footer-links">
              <li>
                <a href="#blog">blog</a>
              </li>
              <li>
                <a href="#changelog">changelog</a>
              </li>
              <li>
                <a href="#roadmap">roadmap</a>
              </li>
              <li>
                <a href="#contributing">contributing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 flow programming language. distributed under the MIT
            license.
          </p>
          <div className="footer-credits">
            <span>made with</span>
            <span className="heart">♥</span>
            <span>for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
