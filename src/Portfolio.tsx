export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    },
    {
      title: "Brand Identity System",
      category: "Brand Strategy",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
    },
    {
      title: "Mobile App Experience",
      category: "App Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200",
    },
    {
      title: "Marketing Campaign",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#0b1120] via-[#0a0f1c] to-[#0a0a0a] py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-[-80px] sm:top-[-120px] left-[-80px] sm:left-[-120px] w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/30 rounded-full blur-[100px] sm:blur-[160px]" />
      <div className="absolute bottom-[-100px] sm:bottom-[-140px] right-[-80px] sm:right-[-120px] w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-cyan-500/30 rounded-full blur-[120px] sm:blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Eyebrow */}
        <p className="text-green-400 tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm mb-3 sm:mb-4">
          OUR WORK
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 px-2">
          Selected Projects
        </h2>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg sm:rounded-2xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6 transition-opacity duration-300">
                
                <h3 className="text-base sm:text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="text-green-400 text-xs sm:text-sm mt-1">
                  {project.category}
                </p>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-lg sm:rounded-2xl border border-transparent group-hover:border-green-400/40 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}