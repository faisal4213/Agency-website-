import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])

  const navLinks = ["Home", "Services", "Portfolio", "About", "Contact"]

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "80px",
          zIndex: 1000,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: scrolled
            ? "rgba(10, 10, 10, 0.85)"
            : "rgba(10, 10, 10, 0.4)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontWeight: 600,
              fontSize: "18px",
              letterSpacing: "1px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            AGENCY
          </div>

          {/* Desktop Links */}
          <div
            className="desktop-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              fontSize: "14px",
              color: "#ccc",
            }}
          >
            {navLinks.map((item) => (
              <span
                key={item}
                style={{
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#25D366")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#ccc")
                }
              >
                {item}
              </span>
            ))}

            <span
              style={{
                cursor: "pointer",
                color: "#aaa",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#aaa")
              }
            >
              Login
            </span>

            <button
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                border: "none",
                background: "#25D366",
                color: "#000",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.transform = "scale(1.05)"
                ;(e.target as HTMLElement).style.boxShadow =
                  "0 0 15px rgba(37, 211, 102, 0.6)"
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.transform = "scale(1)"
                ;(e.target as HTMLElement).style.boxShadow = "none"
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: "6px",
              cursor: "pointer",
            }}
          >
            <div style={barStyle(menuOpen, 1)} />
            <div style={barStyle(menuOpen, 2)} />
            <div style={barStyle(menuOpen, 3)} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: "80px",
          left: 0,
          width: "100%",
          height: "calc(100vh - 80px)",
          background: "rgba(15,15,15,0.98)",
          backdropFilter: "blur(15px)",
          transform: menuOpen ? "translateY(0)" : "translateY(-120%)",
          transition: "transform 0.4s ease",
          zIndex: 999,
          padding: "40px 25px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
        className="mobile-menu"
      >
        {navLinks.map((item) => (
          <span
            key={item}
            style={{
              fontSize: "20px",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </span>
        ))}

        <span style={{ fontSize: "20px", color: "#aaa" }}>Login</span>

        <button
          style={{
            marginTop: "10px",
            padding: "12px 24px",
            borderRadius: "30px",
            border: "none",
            background: "#25D366",
            color: "#000",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 900px) {
            .desktop-links {
              display: none !important;
            }
            .hamburger {
              display: flex !important;
            }
          }
        `}
      </style>
    </>
  )
}

function barStyle(open: boolean, index: number) {
  return {
    width: "26px",
    height: "3px",
    background: "#fff",
    transition: "all 0.3s ease",
    transform:
      open && index === 1
        ? "rotate(45deg) translateY(9px)"
        : open && index === 2
        ? "scaleX(0)"
        : open && index === 3
        ? "rotate(-45deg) translateY(-9px)"
        : "none",
  }
}


