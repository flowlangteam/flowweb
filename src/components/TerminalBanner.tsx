import "./TerminalBanner.css";

export default function TerminalBanner() {
  return (
    <section className="terminal-banner">
      <div className="terminal-container">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <span className="terminal-title">flow@arch ~ $</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">flow --version</span>
            </div>
            <div className="terminal-output">flow 0.1.0</div>

            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">cat hello.flow</span>
            </div>
            <div className="terminal-output">
              <div>func main() -&gt; i64 &#123;</div>
              <div> 5 |&gt; double |&gt; add_ten</div>
              <div>&#125;</div>
            </div>

            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">flow run hello.flow</span>
            </div>
            <div className="terminal-output">
              <div className="success">→ Running hello.flow</div>
              <div className="success">✓ Compiled in 0.12s</div>
              <div>20</div>
            </div>

            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">
                flow transpile hello.flow --target java
              </span>
            </div>
            <div className="terminal-output">
              <div className="success">→ Transpiling to Java</div>
              <div className="success">✓ Generated Hello.class</div>
            </div>

            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="cursor">_</span>
            </div>
          </div>
        </div>
        <div className="banner-text">
          <h2 className="banner-title">powerful CLI tooling</h2>
          <p className="banner-description">
            Flow's compiler provides JIT execution, native compilation, and
            multi-target transpilation. Run code immediately or compile to your
            target platform.
          </p>
          <div className="banner-features">
            <div className="feature-badge">JIT compilation</div>
            <div className="feature-badge">native builds</div>
            <div className="feature-badge">transpilation</div>
            <div className="feature-badge">LSP support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
