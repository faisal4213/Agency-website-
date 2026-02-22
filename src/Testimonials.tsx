export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Williams",
      company: "TechCorp",
      text: "Their strategic thinking and execution completely transformed our digital presence.",
    },
    {
      name: "David Chen",
      company: "StartUpX",
      text: "Professional, innovative, and results-driven. An exceptional partner.",
    },
    {
      name: "Emma Rodriguez",
      company: "BrandCo",
      text: "They helped us scale faster with a seamless blend of design and performance.",
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#0b1120] via-[#0a0f1c] to-[#0a0a0a] py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-white overflow-hidden">

      {/* Glow Background Effects */}
      <div className="absolute top-[-80px] sm:top-[-120px] left-[-80px] sm:left-[-100px] w-56 sm:w-80 h-56 sm:h-80 bg-blue-600/30 rounded-full blur-[100px] sm:blur-[140px]" />
      <div className="absolute bottom-[-100px] sm:bottom-[-120px] right-[-80px] sm:right-[-100px] w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/30 rounded-full blur-[120px] sm:blur-[160px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <p className="text-green-400 tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm mb-3 sm:mb-4">
          TESTIMONIALS
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 sm:mb-12 md:mb-16 px-2">
          Trusted by Industry Leaders
        </h2>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:scale-105 hover:border-green-400/40 transition-all duration-300"
            >
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                "{t.text}"
              </p>

              <h4 className="font-semibold text-base sm:text-lg">
                {t.name}
              </h4>

              <p className="text-green-400 text-xs sm:text-sm">
                {t.company}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}