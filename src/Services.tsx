export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "High-performance, scalable websites built with modern technologies and optimized for conversion.",
    },
    {
      title: "UI/UX Design",
      description:
        "Human-centered design systems that create seamless digital experiences and elevate brand perception.",
    },
    {
      title: "Brand Strategy",
      description:
        "Strategic brand positioning, visual identity, and storytelling crafted for long-term impact.",
    },
    {
      title: "Digital Marketing",
      description:
        "Performance-driven marketing campaigns focused on measurable growth and ROI.",
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#0b1120] via-[#0a0f1c] to-[#0a0a0a] py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-white overflow-hidden mt-16 md:mt-20">

      {/* Glow Effects */}
      <div className="absolute top-[-80px] sm:top-[-120px] left-[-80px] sm:left-[-100px] w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/30 rounded-full blur-[100px] sm:blur-[160px]" />
      <div className="absolute bottom-[-100px] sm:bottom-[-140px] right-[-80px] sm:right-[-120px] w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-emerald-500/30 rounded-full blur-[120px] sm:blur-[180px]" />

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Eyebrow */}
        <p className="text-green-400 tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm mb-3 sm:mb-4">
          OUR SERVICES
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          Building Digital Experiences <br className="hidden sm:block" />
          That Drive Growth
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-12 sm:mb-16 px-2">
          We partner with ambitious brands to design, develop, and grow
          impactful digital products. Our approach combines strategy,
          creativity, and technology to deliver measurable results.
        </p>

        {/* Service Cards */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_15px_40px_rgba(37,211,102,0.15)]"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 group-hover:text-green-400 transition-colors duration-300 text-left sm:text-center">
                {service.title}
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-left">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}