import Link from "next/link";
import ArrowBlack from "../../../public/assets/imgs/icon/arrow-black.png";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Footer2() {
  const menuAnim = useRef();
  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    }
  }, []);
  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("")
      let spanData = ''
      for (let j = 0; j < arr.length; j++) {
        if(arr[j] == ' ') {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + '</div>';
      firstParent[0].innerHTML = result
    }
  };
  return (
    <>
      <footer className="footer__area-2 pt-130">
        <div className="container">
          <div className="footer__top-2 text-anim">
            <div className="row">
              <div className="col-xxl-12">
                <h2 className="sec-title-33 title-anim">
                  Un projet en tête dont <br/> vous souhaitez parler ?
                </h2>
                <p className="footer__sub-title">
                  Besoin d'aide pour développer votre activité e-commerce ou digitale ? 
                  Contactez-nous dès aujourd'hui !
                </p>                
              </div>
            </div>
          </div>

          <div className="footer__middle-2">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="footer__location-2">
                  <div className="location">
                    <h3>Propulso Digital</h3>
                    <p>
                      Votre partenaire digital <br/> nouvelle génération
                    </p>
                    <ul className="footer__social-6">                      
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="location">
                    <h3>Contact</h3>
                    <p>
                      info@propulsodigital.com <br/>
                      <a href="tel:+41 76 619 78 33">+41 76 619 78 33</a>                      
                    </p>
                    <p> Lun-Ven 8:00 – 18:00</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="footer__subscribe-2">
                  <form action="#">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit" className="submit">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        src={ArrowBlack}
                        alt="Arrow Icon"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__btm-2">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                {/* <div className="footer__copyright-2">
                  <p>
                    © 2022 - 2025 | Alrights reserved by{" "}
                    <a href="https://wealcoder.com/" target="_blank">
                      Wealcoder
                    </a>
                  </p>
                </div> */}
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                <div className="footer__nav">
                  <ul className="footer-menu menu-anim" ref={menuAnim}>
                    <li>
                      <Link href="/about">SERVICES</Link>
                    </li>
                    <li>
                      <Link href="/career">À PROPOS</Link>
                    </li>
                    <li>
                      <Link href="/contact">CONTACT</Link>
                    </li>
                    <li>
                      <Link href="/faq">PROJETS CLEINTS</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
