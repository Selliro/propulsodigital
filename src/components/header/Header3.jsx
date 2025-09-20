import { useEffect, useRef, useState } from "react";
import Canvas from "../canvas/Canvas";
import Link from "next/link";
import LogoWhite from "../../../public/assets/imgs/logo/site-logo-white.svg";
import LogoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import MenuWhite from "../../../public/assets/imgs/icon/menu-white.png";
import Image from "next/image";

export default function Header3() {
  const [topScroll, setTopScroll] = useState(0);

  const ofCanvasArea = useRef();
  const headerArea = useRef();

  const handleTopScroll = () => {
    const position = window.pageYOffset;
    setTopScroll(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleTopScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);
  if (typeof window !== "undefined") {
    let device_width = window.innerWidth;
    if (device_width < 1365) {
      let header_bg = headerArea.current;
      if (header_bg) {
        if (topScroll > 20) {
          header_bg.style.background = "#121212";
          header_bg.style.setProperty("mix-blend-mode", "unset");
        } else {
          header_bg.style.background = "transparent";
          header_bg.style.setProperty("mix-blend-mode", "exclusion");
        }
      }
    }
  }
  const openCanvas = () => {
    ofCanvasArea.current.style.opacity = "1";
    ofCanvasArea.current.style.visibility = "visible";
    let header_bg = headerArea.current;
    header_bg.style.setProperty("mix-blend-mode", "unset");
  };
  return (
    <>
      <header className="header__area" ref={headerArea}>
        <div className="header__inner">
          <div className="header__logo">
            <Link href="/">
              <Image
                priority
                width={33}
                height={155}
                className="logo-primary"
                src={LogoWhite}
                alt="Site Logo"
              />
              <Image
                priority
                width={100}
                height={33}
                className="logo-secondary"
                src={LogoWhite2}
                alt="Moibile Logo"
              />
            </Link>
          </div>
          <div className="header__nav-icon">
            <button onClick={openCanvas} id="open_offcanvas">
              <Image
                priority
                width={22}
                height={22}
                src={MenuWhite}
                alt="Menubar Icon"
              />
            </button>
          </div>
          <div className="header__support">
            <p>
              <a href="https://wa.me/+41766197833">+41766197833</a> <br/> Écrivez-nous sur WhatsApp
            </p>
          </div>
        </div>
        <Canvas bladeMode={headerArea.current} ofCanvasArea={ofCanvasArea} />
      </header>

      <style jsx>{`
        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          width: 100%;
        }
        
        .header__logo {
          flex: 0 0 auto;
        }
        
        .header__nav-icon {
          flex: 0 0 20%;
          margin: 0 20px;
        }
        
        .header__support {
          flex: 0 0 20%;
          text-align: center;
        }
        
        .header__support p {
          margin: 0;
          font-size: 14px;
          line-height: 1.4;
          text-align: center;
        }
        
        .header__support a {
          color: #fff;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }
        
        .header__support a:hover {
          opacity: 0.8;
        }
        
        @media (max-width: 768px) {
          .header__inner {
            padding: 15px 0;
          }
          
          .header__support {
            display: none;
          }
          
          .header__nav-icon {
            margin: 0 10px;
          }
        }
      `}</style>
    </>
  );
}