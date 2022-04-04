import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  items: 1,
  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};
class NewsDetailsContent extends Component {
  _isMounted = false;
  state = {
    display: false,
  };

  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <>
        <div className="blog-details-area ptb-100">
          <div className="container">
            <div className="tab_content">
              <div id="cat1" className="tabs_item1">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 content">
                    <div className="tabs_item_content">
                      <h3>Floor {this.props.productId}</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s.
                      </p>

                      <ul className="features-list">
                        <li>
                          Floor No <span>1</span>
                        </li>
                        <li>
                          Rooms <span>4</span>
                        </li>
                        <li>
                          Total Area <span>311.50 sqft</span>
                        </li>
                        <li>
                          Bathroom <span>Yes</span>
                        </li>
                        <li>
                          Windows <span>4</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 image">
                    <div className="tabs_item_image">
                      <div className="container">
                        {this.state.display ? (
                          <OwlCarousel
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                          >
                            <div className="">
                            <img src="/images/floor-img1.png" alt="image" />
                            </div>

                            <div className="">
                            <img src="/images/floor-img1.png" alt="image" />
                            </div>

                      
                          </OwlCarousel>
                        ) : (
                          ""
                        )}
                      </div>
                      {/* <img src="/images/floor-img1.png" alt="image" /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab2" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 image">
                    <div className="tabs_item_image">
                      <img src="/images/floor-img2.png" alt="image" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 content">
                    <div className="tabs_item_content">
                      <h3>Floor 2</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s.
                      </p>

                      <ul className="features-list">
                        <li>
                          Floor No <span>2</span>
                        </li>
                        <li>
                          Rooms <span>4</span>
                        </li>
                        <li>
                          Total Area <span>311.50 sqft</span>
                        </li>
                        <li>
                          Bathroom <span>Yes</span>
                        </li>
                        <li>
                          Windows <span>4</span>
                        </li>
                      </ul>

                      <Link href="#">
                        <a className="default-btn">
                          Schedule a Visit <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab3" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 content">
                    <div className="tabs_item_content">
                      <h3>Floor 3</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s.
                      </p>

                      <ul className="features-list">
                        <li>
                          Floor No <span>3</span>
                        </li>
                        <li>
                          Rooms <span>4</span>
                        </li>
                        <li>
                          Total Area <span>311.50 sqft</span>
                        </li>
                        <li>
                          Bathroom <span>Yes</span>
                        </li>
                        <li>
                          Windows <span>4</span>
                        </li>
                      </ul>

                      <Link href="#">
                        <a className="default-btn">
                          Schedule a Visit <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 image">
                    <div className="tabs_item_image">
                      <img src="/images/floor-img3.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab4" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 image">
                    <div className="tabs_item_image">
                      <img src="/images/floor-img4.png" alt="image" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 content">
                    <div className="tabs_item_content">
                      <h3>Floor 4</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s.
                      </p>

                      <ul className="features-list">
                        <li>
                          Floor No <span>4</span>
                        </li>
                        <li>
                          Rooms <span>4</span>
                        </li>
                        <li>
                          Total Area <span>311.50 sqft</span>
                        </li>
                        <li>
                          Bathroom <span>Yes</span>
                        </li>
                        <li>
                          Windows <span>4</span>
                        </li>
                      </ul>

                      <Link href="#">
                        <a className="default-btn">
                          Schedule a Visit <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab5" className="tabs_item">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 content">
                    <div className="tabs_item_content">
                      <h3>Floor 5</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s.
                      </p>

                      <ul className="features-list">
                        <li>
                          Floor No <span>5</span>
                        </li>
                        <li>
                          Rooms <span>4</span>
                        </li>
                        <li>
                          Total Area <span>311.50 sqft</span>
                        </li>
                        <li>
                          Bathroom <span>Yes</span>
                        </li>
                        <li>
                          Windows <span>4</span>
                        </li>
                      </ul>

                      <Link href="#">
                        <a className="default-btn">
                          Schedule a Visit <span></span>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 image">
                    <div className="tabs_item_image">
                      <img src="/images/floor-img5.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsDetailsContent;
