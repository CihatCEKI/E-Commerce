import { useContext } from "react";
import { CartContext } from "../../../context/CartProvider";
import { Link, useLocation } from "react-router-dom";
import Proptypes from "prop-types";
import "./Header.css";

const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const user = localStorage.getItem("user");
  const { pathname } = useLocation();

  return (
    <header>
      
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                ARAÇ YEDEK PARÇA AKSESUAR PROJE
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"} `}
                    >
                      Ana Sayfa
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                      <h2 className="megamenu-products-title">
                              
                            </h2>
                        <li>
                          <a href="#">Fiat</a>
                        </li>
                        <li>
                          <a href="#">Bmw</a>
                        </li>
                        <li>
                          <a href="#">Acura</a>
                        </li>
                        <li>
                          <a href="#">Mercedes</a>
                        </li>
                        <li>
                          <a href="#">Ford</a>
                        </li>
                        <li>
                          <a href="#">Audi</a>
                        </li>
                        <li>
                          <a href="#">Seat</a>
                        </li>
                        <li>
                          <a href="#">Citroen</a>
                        </li>
                        <li>
                          <a href="#">Renault</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      } `}
                    >
                      Ürün Ve Kategoriler
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Çıkma Parçalar
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Lastikler</a>
                              </li>
                              <li>
                                <a href="#">Difransiyel</a>
                              </li>
                              <li>
                                <a href="#">Direksiyon</a>
                              </li>
                              <li>
                                <a href="#">Vites Kutusu</a>
                              </li>
                              <li>
                                <a href="#">Jant</a>
                              </li>
                              <li>
                                <a href="#"> Fren Disk Balata</a>
                              </li>
                              <li>
                                <a href="#">Motor Parçaları </a>
                              </li>
                              <li>
                                <a href="#">Arka Takım Süspansiyon</a>
                              </li>
                              <li>
                                <a href="#">Sensör Val Elektirik Aksamı</a>
                              </li>
                              <li>
                                <a href="#">Karoser iç Trim Malzemeleri</a>
                              </li>
                              <li>
                                <a href="#">Karoser Kaporta</a>
                              </li>
                            
                              
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              İç/Dış Aksesuar
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Kolçak</a>
                              </li>
                              <li>
                                <a href="#">Telefon Tutucu</a>
                              </li>
                              <li>
                                <a href="#">Teyp/Double Teyp</a>
                              </li>
                              <li>
                                <a href="#">Direksiyon Kılıfı</a>
                              </li>
                              <li>
                                <a href="#">Güneşlik & Perde</a>
                              </li>
                              <li>
                                <a href="#">Vites & El Freni</a>
                              </li>
                              <li>
                                <a href="#">Nikelaj & Logo</a>
                              </li>
                              <li>
                                <a href="#">Dikiz Aynası Süsü</a>
                              </li>
                              <li>
                                <a href="#">Panjur</a>
                              </li>
                              <li>
                                <a href="#">Parçalık Tozluk</a>
                              </li>
                              <li>
                                <a href="#">Stop Far</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Temizlik Ürünleri
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Antifriz</a>
                              </li>
                              <li>
                                <a href="#">Bez & Sünger</a>
                              </li>
                              <li>
                                <a href="#">Shop Load More</a>
                              </li>
                              <li>
                                <a href="#">Pasta Cila</a>
                              </li>
                              <li>
                                <a href="#">Araç Kokusu</a>
                              </li>
                              <li>
                                <a href="#">Cam Suyu</a>
                              </li>
                              <li>
                                <a href="#">Bijon Anahtarı</a>
                              </li>
                              <li>
                                <a href="#">Yangın Tüpü</a>
                              </li>
                              <li>
                                <a href="#">Çeki Halatı</a>
                              </li>
                              <li>
                                <a href="#">Araç İçi Boya</a>
                              </li>
                              <li>
                                <a href="#">Paspas</a>
                              </li>

                            </ul>
                          </div>
                        </div>
                        <div className="megamenu-single">
                          <a href="#">
                            <img src="/mega-menu.jpg" alt="" />
                          
                           
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      } `}
                    >
                      İletişim
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                {/* <a href="#">
                  <i className="bi bi-heart"></i>
                </a> */}
                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
                {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Çıkış Yapmak İstediğinize Emin misiniz ?"
                        )
                      ) {
                        {
                          localStorage.removeItem("user");
                          window.location.href = "/";
                        }
                      }
                    }}
                  >
                    <i className="bi bi-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};
