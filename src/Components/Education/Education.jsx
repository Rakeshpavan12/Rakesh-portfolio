import "./Education.css";

function Education() {
  const education = [
    {
      degree: "B.Tech — Data Science",
      institution: "Madanapalle Institute of Technology & Science (MITS)",
      period: "2021 – 2025",
      result: "CGPA: 7.5",
      description:
        "Built a foundation in programming, databases, data analysis, and software development.",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <header className="education-heading">
          <h2>Education</h2>
          <p className="education-subtitle">
            My Academic Journey and Foundation In Technology.
          </p>
        </header>

        <div className="education-list">
          {education.map((item, index) => (
            <article className="education-card" key={index}>
              <div className="education-marker">
                <span />
              </div>

              <div className="education-details">
                <div className="education-top">
                  <div>
                    <h3>{item.degree}</h3>
                    <p className="education-institution">
                      {item.institution}
                    </p>
                  </div>

                  <span className="education-period">
                    {item.period}
                  </span>
                </div>

                <p className="education-description">
                  {item.description}
                </p>

                <span className="education-result">
                  {item.result}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;