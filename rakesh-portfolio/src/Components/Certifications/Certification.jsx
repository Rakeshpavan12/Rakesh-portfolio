import "./Certification.css";

function Certification() {
  const certificates = [
    {
      id: 1,
      title: "Frontend Development",
      provider: "Motioncut",
      certificate: "/Certificates/motioncut1.pdf",
    },
    {
      id: 2,
      title: "Full Stack Development",
      provider: "Kodnest Technologies",
      certificate: "/Certificates/Kodnest.pdf",
    },
  ];

  return (
    <section className="certifications" id="certification">
      <div className="cert-heading">
        <h2>CERTIFICATIONS</h2>
        <p>Professional Certificates & Training</p>
      </div>

      <div className="cert-grid">
        {certificates.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <h3>{cert.title}</h3>

            <p>{cert.provider}</p>


            

            <a
              href={cert.certificate}
              download
              className="view-cert-btn"
            >
              Download Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certification;