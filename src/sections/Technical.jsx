const groups = [
  ["BACKEND", ["PHP", "Laravel", "Lumen", "Python", "Java", "Spring Boot", "RESTful API", "MVC Architecture", "OOP"]],
  ["DATABASE", ["MySQL", "JPA (basic)", "Query Optimization", "Database Normalization", "Indexing", "Redis Cache"]],
  ["TOOLS", ["Git", "CI/CD", "Firebase", "Ably", "Postman"]],
  ["FRONTEND", ["HTML", "CSS", "JavaScript", "React"]]
];

export default function Technical({ t }) {
  return (
    <section id="technical" className="section technical">
      <div className="section-top reveal">
        <span className="section-number">04</span>
        <span className="eyebrow">{t.label}</span>
      </div>

      <div className="technical-title reveal">
        <h2 className="display-heading">{t.titleA}<br /><em>{t.titleB}</em></h2>
        <p>{t.body}</p>
      </div>

      <div className="tech-groups">
        {groups.map(([, items], i) => (
          <div className="tech-group reveal" key={items[0]}>
            <div className="tech-group-head"><span>0{i + 1}</span><strong>{t.groups[i]}</strong></div>
            <div className="tech-chips">
              {items.map(item => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
