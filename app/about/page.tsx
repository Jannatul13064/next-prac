export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">ABC Medical System</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are dedicated to providing advanced medical imaging solutions across Bangladesh,
            specializing in Edan Ultrasound and Rayence FPD systems.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower healthcare professionals with reliable and innovative diagnostic equipment
              that enhances patient care and clinical accuracy.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted national leader in diagnostic imaging solutions,
              known for quality, innovation, and after-sales support.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600">
            A group of biomedical engineers and technical experts committed to serving your hospital's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Engr. Jannatul", role: "Lead Biomedical Engineer" },
            { name: "Engr. Islam", role: "Radiology System Specialist" },
            { name: "Support Team", role: "Customer & Technical Support" },
          ].map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 text-center hover:shadow-xl transition">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
