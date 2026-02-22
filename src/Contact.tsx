export default function Contact() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b1120] to-[#0a0a0a] py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-white overflow-hidden">
      
      {/* Glow Background Shapes */}
      <div className="absolute top-[-60px] sm:top-[-100px] left-[-60px] sm:left-[-100px] w-48 sm:w-72 h-48 sm:h-72 bg-blue-600/30 rounded-full blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-[-80px] sm:bottom-[-120px] right-[-60px] sm:right-[-100px] w-56 sm:w-80 h-56 sm:h-80 bg-cyan-500/30 rounded-full blur-[100px] sm:blur-[140px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10 px-2">
        
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Ready to Elevate Your Business?
        </h2>

        <p className="text-gray-400 text-xs sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
          Let's collaborate and create something extraordinary together.
        </p>

        <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold text-xs sm:text-sm md:text-base shadow-lg hover:scale-105 transition-all duration-300">
          Start a Project
        </button>
      </div>
      
    </section>
  )
}