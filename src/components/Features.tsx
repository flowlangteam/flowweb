import "./Features.css";

const features = [
  {
    title: "multi-target compilation",
    description:
      "Compile to native code with Cranelift JIT/AOT, or transpile to Java bytecode, Python, JavaScript, C, and more.",
    icon: "🎯",
  },
  {
    title: "type safe",
    description:
      "Strong static typing with comprehensive type inference. Full suite of integer, float, and primitive types.",
    icon: "🛡️",
  },
  {
    title: "pipe operator",
    description:
      "Express data transformations naturally with the |> operator. Write code that flows left-to-right.",
    icon: "|>",
  },
  {
    title: "foreign function interface",
    description:
      "Call C and Java functions directly with extern blocks. Seamless interoperability across language boundaries.",
    icon: "🔗",
  },
  {
    title: "compile-time macros",
    description:
      "Define and expand macros at parse time with ##func syntax. Zero runtime overhead for code generation.",
    icon: "##",
  },
  {
    title: "manual memory control",
    description:
      "Direct memory management with alloc/free and automatic cleanup with temp scopes for safety.",
    icon: "🔒",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">why flow?</h2>
          <p className="features-subtitle">
            Systems programming with modern language features
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
