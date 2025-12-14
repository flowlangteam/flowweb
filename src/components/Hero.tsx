import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">
              <span className="title-word">the </span>
              <span className="title-word accent cursive">flow</span>
            </span>
            <span className="title-line">programming language</span>
          </h1>
          <p className="hero-description">
            A systems programming language with multi-target compilation.
            Compile to native code with Cranelift JIT, or transpile to Java,
            Python, JavaScript, and more. Built for performance,
            interoperability, and expressiveness.
          </p>
        </div>
        <div className="hero-code">
          <div className="code-window">
            <div className="code-header">
              <div className="window-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <span className="file-name">pipe.flow</span>
            </div>
            <div className="code-content">
              <pre className="code">
                <code>
                  {`// Data flows naturally with pipes
func double(x: i64) -> i64 {
    x * 2
}

func add_ten(x: i64) -> i64 {
    x + 10
}

func main() -> i64 {
    5 |> double |> add_ten  // 20
}
`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
