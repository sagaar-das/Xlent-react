function Stats() {
  const stats = [
    { value: "1,500+", label: "Students Placed" },
    { value: "95%", label: "Interview Success Rate" },
    { value: "150+", label: "Partner Companies" },
    { value: "4.9/5", label: "Student Satisfaction" },
  ];

  return (
    <section className="bg-[#090e19] py-20 border-t border-[#452d7b]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {stats.map((item, i) => (
          <div key={i} className="flex flex-col items-center">

            {/* Number */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B5CF6]">
              {item.value}
            </h2>

            {/* Label */}
            <p className="mt-3 text-gray-400 text-sm md:text-base">
              {item.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;