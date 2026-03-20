function Features() {
  return (
    <section className="bg-bg px-6 py-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

        {/* LEFT GREEN CARD */}
        <div className="bg-gradient-to-br from-teal to-tealDark text-white rounded-[30px] p-8">

          <h2 className="text-3xl font-bold">
            Industries We Serve
          </h2>

          <p className="mt-3 text-white/80">
            Master development through real-world applications, not tutorials
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Full Stack Development",
              "Real-World Projects",
              "Open Source Contributions",
              "Production Ready",
              "DevOps & Deployment",
              "Job Ready Portfolio",
            ].map((tag, i) => (
              <span
                key={i}
                className="bg-white text-textDark px-4 py-2 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* RIGHT BLUE CARD */}
        <div className="bg-secondary text-white rounded-[30px] p-8">

          <h2 className="text-3xl font-bold">
            Personally mentoring India's next Xlent engineers
          </h2>

          <p className="mt-4 text-white/80">
            Taking you from 1x to 100x through practical projects and real-world open source
          </p>

        </div>

      </div>

    </section>
  );
}
export default Features;