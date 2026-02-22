export default function Footer() {
  return (
    <footer
      className="bg-[#050505] py-8 sm:py-10 px-4 sm:px-6 text-center text-gray-600 border-t border-white/5 text-xs sm:text-sm"
    >
      © {new Date().getFullYear()} AGENCY. All rights reserved.
    </footer>
  )
}