import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Fade in section
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      })

      // Counter animation (trigger on scroll)
      statsRef.current.forEach((el) => {
        const endValue = Number(el.dataset.value)
        const obj = { val: 0 }

        gsap.to(obj, {
          val: endValue,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: () => {
            el.innerText = Math.floor(obj.val) + "+"
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const stats = [
    { value: 150, label: "Expert Team Members" },
    { value: 12, label: "Years of Experience" },
    { value: 45, label: "Industry Awards" },
    { value: 30, label: "Countries Served" },
  ]

  const values = [
    {
      title: "Mission-Driven",
      text: "Empowering businesses with innovative digital solutions that drive measurable growth and lasting impact.",
    },
    {
      title: "Client-Centric",
      text: "Building long-term partnerships through transparent communication and dedicated support.",
    },
    {
      title: "Excellence",
      text: "Delivering premium quality in every project through cutting-edge technology and industry best practices.",
    },
    {
      title: "Growth Focused",
      text: "Strategically optimizing every touchpoint to maximize ROI and accelerate business objectives.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#0b1120] via-[#0a0f1c] to-[#0a0a0a] text-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-48 sm:w-[28rem] h-48 sm:h-[28rem] bg-blue-600/30 rounded-full blur-[80px] sm:blur-[160px]" />
      <div className="absolute -bottom-20 sm:-bottom-40 -right-20 sm:-right-40 w-48 sm:w-[28rem] h-48 sm:h-[28rem] bg-emerald-500/30 rounded-full blur-[80px] sm:blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20 px-2">
          <span className="bg-green-500/10 text-green-400 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm inline-block">
            About Us
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-6xl font-semibold mt-4 sm:mt-6 leading-tight">
            Pioneering Digital Innovation Since 2014
          </h2>

          <p className="text-gray-400 mt-4 sm:mt-6 text-xs sm:text-base md:text-lg leading-relaxed">
            DigitalForge is a premium digital services agency dedicated to
            transforming businesses through strategic technology solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center mb-16 sm:mb-20 md:mb-24 px-2">
          {stats.map((stat, i) => (
            <div key={i}>
              <span
                ref={(el) => {
                  if (el) statsRef.current[i] = el
                }}
                data-value={stat.value}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 block"
              >
                0+
              </span>
              <p className="text-gray-500 mt-2 text-xs sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-2">
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-3xl border border-white/10
                         hover:border-green-400/40 transition-all duration-300 
                         hover:-translate-y-2 
                         hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)]"
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-4">
                {item.title}
              </h4>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}