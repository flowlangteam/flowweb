import "./AboutFlow.css";

export default function AboutFlow() {
  return (
    <section className="about-flow">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">about flow</h2>
          <p className="about-subtitle">
            A systems programming language with multi-target compilation and
            powerful interoperability
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h3 className="section-title">philosophy</h3>
            <p className="section-text">
              Flow is built on the principle that one language should target
              multiple platforms. Whether you need native performance with JIT
              compilation, seamless Java integration, or want to leverage
              Python's ecosystem, Flow compiles to what you need. We believe
              developers shouldn't be locked into a single runtime or platform.
            </p>
          </div>

          <div className="about-section">
            <h3 className="section-title">design goals</h3>
            <div className="goals-grid">
              <div className="goal-item">
                <h4>multi-target compilation</h4>
                <p>
                  Native code via Cranelift JIT/AOT, Java bytecode, and
                  transpilation to Python, JavaScript, C, Rust, and WebAssembly
                </p>
              </div>
              <div className="goal-item">
                <h4>language interoperability</h4>
                <p>
                  Direct FFI with C and Java through extern blocks, enabling
                  seamless integration with existing codebases
                </p>
              </div>
              <div className="goal-item">
                <h4>explicit memory control</h4>
                <p>
                  Manual memory management with alloc/free and automatic cleanup
                  through temp scopes
                </p>
              </div>
              <div className="goal-item">
                <h4>expressive syntax</h4>
                <p>
                  Pipe operators, pattern matching, lambdas, and compile-time
                  macros for clear and maintainable code
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h3 className="section-title">key features</h3>
            <div className="features-showcase">
              <div className="feature-example">
                <h4>foreign function interface</h4>
                <div className="code-block">
                  <pre>
                    <code>
                      {`// Call C and Java functions directly
extern "C" {
    func abs(i64) -> i64;
    func sqrt(f64) -> f64;
}

extern "Java" {
    func println(String);
    func currentTimeMillis() -> i64;
}

func main() -> i64 {
    let x = abs(-42);
    println("Result: " + x);
    x
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="feature-example">
                <h4>pipe operator</h4>
                <div className="code-block">
                  <pre>
                    <code>
                      {`// Data flows naturally left-to-right
func double(x: i64) -> i64 { x * 2 }
func add_ten(x: i64) -> i64 { x + 10 }
func square(x: i64) -> i64 { x * x }

func main() -> i64 {
    // Instead of: square(add_ten(double(5)))
    5 |> double |> add_ten |> square
    // Returns: 400
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="feature-example">
                <h4>pattern matching</h4>
                <div className="code-block">
                  <pre>
                    <code>
                      {`// Powerful match expressions
func classify(n: i64) -> i64 {
    match n {
        0 => 0,
        1 => 1,
        _ => 99
    }
}

func main() -> i64 {
    classify(42)  // Returns: 99
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="feature-example">
                <h4>memory management</h4>
                <div className="code-block">
                  <pre>
                    <code>
                      {`// Manual control with automatic cleanup
func main() -> i64 {
    temp {
        let ptr = alloc<i64>;
        deref ptr = 42;
        let value = deref ptr;
        free(ptr);
        value
    }
    // ptr is automatically freed on scope exit
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="feature-example">
                <h4>compile-time macros</h4>
                <div className="code-block">
                  <pre>
                    <code>
                      {`// Zero-cost code generation
##func INCREMENT(x: i64) -> i64 {
    x + 1
}

##func DOUBLE(x: i64) -> i64 {
    x * 2
}

func main() -> i64 {
    let a = $INCREMENT(41);  // Expands: 42
    let b = $DOUBLE(21);     // Expands: 42
    a + b
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="feature-example">
                <h4>structs & implementations</h4>
                <div className="code-block">
                  <pre>
                    <code>
                      {`// Object-oriented patterns
struct Point {
    pub x: i64,
    pub y: i64
}

impl Point {
    func distance(self: Point) -> i64 {
        let x_sq = self.x * self.x;
        let y_sq = self.y * self.y;
        x_sq + y_sq
    }
}

func main() -> i64 {
    let p = Point { x: 3, y: 4 };
    p.distance()  // Returns: 25
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h3 className="section-title">getting started</h3>
            <div className="getting-started">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>install flow</h4>
                  <div className="code-block small">
                    <pre>
                      <code>curl -sSf https://sh.flowc.dev | sh</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>create your first program</h4>
                  <div className="code-block small">
                    <pre>
                      <code>
                        echo 'func main() -{">"} i64 {"{"} 42 {"}"}
                        {"}"}' {">"} hello.flow
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>run and explore</h4>
                  <div className="code-block small">
                    <pre>
                      <code>flow run hello.flow</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
