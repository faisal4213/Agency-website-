import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const START_FRAME = 22
const END_FRAME = 170
const TOTAL_FRAMES = END_FRAME - START_FRAME + 1

export default function ScrollFrames() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const section = sectionRef.current!
    const context = canvas.getContext("2d")!

    const images: HTMLImageElement[] = []
    const frame = { current: 0 }

    // 🔥 Proper High DPI + Mobile Height Fix
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.style.width = width + "px"
      canvas.style.height = height + "px"

      canvas.width = width * dpr
      canvas.height = height * dpr

      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      render()
    }

    const getFramePath = (index: number) =>
      `/frames/ezgif-frame-${String(index).padStart(3, "0")}.webp`

    // 🔥 Load Frames
    for (let i = START_FRAME; i <= END_FRAME; i++) {
      const img = new Image()
      img.src = getFramePath(i)
      images.push(img)
    }

    const render = () => {
      const img = images[frame.current]
      if (!img || !img.complete) return

      const width = window.innerWidth
      const height = window.innerHeight
      const isMobile = width < 768

      context.clearRect(0, 0, canvas.width, canvas.height)

      // 🔥 Desktop = cinematic fill
      // 🔥 Mobile = balanced contain (no aggressive zoom)
      const scale = isMobile
        ? Math.min(width / img.width, height / img.height)
        : Math.max(width / img.width, height / img.height)

      const x = width / 2 - (img.width * scale) / 2
      const y = height / 2 - (img.height * scale) / 2

      context.drawImage(
        img,
        x,
        y,
        img.width * scale,
        img.height * scale
      )
    }

    images[0].onload = () => {
      setCanvasSize()
      render()
    }

    window.addEventListener("resize", setCanvasSize)

    // 🔥 Scroll length based on frame count (no early exit)
    const animation = gsap.to(frame, {
      current: TOTAL_FRAMES - 1,
      snap: "current",
      ease: "none",
      onUpdate: render,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${TOTAL_FRAMES * 20}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((st) => st.kill())
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-[100svh] overflow-hidden bg-black"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </section>
  )
}