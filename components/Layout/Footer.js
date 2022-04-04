import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { changeLocal } from "../../Redux/Localization";
import { useSelector } from "react-redux";
const Footer = () => {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const dispatch = useDispatch();

  const changeLangouage = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "ar":
        dispatch(changeLocal("ar"));
        break;
      case "en":
        dispatch(changeLocal("en"));
        break;
      case "tr":
        dispatch(changeLocal("tr"));
        break;
    }
  };

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img src="/images/white-logo.png" alt="image" />
                    </a>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra lacus
                    vel facilisis.
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https:www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https:twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https:www.linkedin.com/" target="_blank">
                      <i className="flaticon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https:www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h3>Quick Links</h3>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    {/* <li>
                                            <Link href="/team">
                                                <a>Our Team</a>
                                            </Link>
                                        </li> */}
                    <li>
                      <Link href="/about">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>Service</a>
                      </Link>
                    </li>
    
                    <li>
                      <Link href="/contact">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown mt-3 mx-2">
                  <a
                    className="btn default-btn text-white dropdown-toggle"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {currentLocal.language}
                  </a>

                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li onClick={changeLangouage}>
                      <a className="dropdown-item" id="en">
                        English
                      </a>
                    </li>
                    <li onClick={changeLangouage}>
                      <a className="dropdown-item" id="ar">
                        Arabic{" "}
                      </a>
                    </li>
                    <li onClick={changeLangouage}>
                      <a className="dropdown-item" id="tr">
                        Turkish{" "}
                      </a>
                    </li>
                  </ul>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contact Info</h3>

                <ul className="footer-contact-info">
                  <li>
                    <span>Location:</span> 27 Division St, New York, NY 10002,
                    USA
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:tuam@gmail.com">tuam@gmail.com</a>
                  </li>
                  <li>
                    <span>Phone:</span>{" "}
                    <a href="tel:+(321)948754">+(321) 948 754</a>
                  </li>
                  <li>
                    <span>Fax:</span>{" "}
                    <a href="tel:+12129876543">+1-212-9876543</a>
                  </li>
                  <li>
                    <a
                      href="https://goo.gl/maps/1xz4L8TGSdkBhVmb7"
                      target="_blank"
                    >
                      View Location on GoogleMap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row align-items-center">
              <div className="text-center">
                <p>
                  <i className="far fa-copyright"></i> 2021 Tuam. All Rights
                  Reserved by{" "}
                  <a href="https://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a>
                </p>
              </div>

              {/* <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
