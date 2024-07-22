import React from "react";
import Policy from "../Policy/Policy";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <Policy />
      <footer className="footer">
        <div className="subscribe-row">
          <div className="container">
            <div className="footer-row-wrapper">
              <div className="footer-subscribe-wrapper">
                <div className="footer-subscribe">
                  <div className="footer-subscribe-top">
                    <h3 className="subscribe-title">
                      Haberleri ve indirimleri Kaçırmamak için kayıt ol
                    </h3>
                  </div>
                  <div className="footer-subscribe-bottom">
                    <form>
                      <input
                        type="text"
                        placeholder="E-mail Adresini Giriniz"
                      />
                      <button className="btn">Kayıt Ol</button>
                    </form>
                    <p className="privacy-text"></p>
                  </div>
                </div>
              </div>
              <div className="footer-contact-wrapper">
                <div className="footer-contact-top">
                  <h3 className="contact-title">
                    Destek Hattı <br />
                    (+90) 544 780 95 89
                  </h3>
                  <p className="contact-desc"></p>
                </div>
                <div className="footer-contact-bottom">
                  <div className="download-app">
                    <a href="#">
                      <img src="/footer/app-store.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/footer/google-play.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widgets-row">
          <div className="container">
            <div className="footer-widgets">
              <div className="brand-info">
                <div className="footer-logo">
                  <a href="index.html" className="logo">
                    ARAÇ YEDEK PARÇA AKSESUAR PROJE
                  </a>
                </div>
                <div className="footer-desc"></div>
                <div className="footer-contact">
                  <p>
                    <a href="tel:555 555 55 55">356 56 56 </a> –{" "}
                    <a href="mailto:info@example.com">
                      info@AracServisProjesi.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-row">
          <div className="container">
            <div className="footer-copyright">
              <div className="site-copyright">
                <p>
                  Copyright 2024 © E-Ticaret Proje Ödevi Tüm Hakları Saklıdır.
                  Powered by Cihat Eren ÇEKİ.
                </p>
              </div>
              <a href="#">
                <img src="/footer/cards.png" alt="" />
              </a>
              <div className="footer-menu">
                <ul className="footer-menu-list">
                  <li className="list-item">
                    <a href="#">Gizlilik Sözleşmesi</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Şartlar ve Koşullar</a>
                  </li>
                  <li className="list-item">
                    <a href="#">İade Politikası</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
