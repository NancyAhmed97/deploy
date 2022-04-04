import React, { Component } from "react";
import Link from "next/link";
class Products extends Component {
  state = {
    categourys: ["cat1", "cat2", "cat3", "cat4", "cat5"],
  };
  componentDidMount() {
    let active;
    active = document.getElementsByTagName("li");

    active[7].classList.add("current");
  }
  openTabSection = (evt) => {
    let i, tablinks;
    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }
    evt.currentTarget.className += "current";
  };
  render() {
    return (
      <>
        <section className="floor-plans-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>The Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="tab">
                  <ul className="tabs">
                    {this.state.categourys.map((category, index) => {
                      return (
                        <li
                          onClick={(e) => this.openTabSection(e, index)}
                          id={index}
                          key={index}
                        >
                          {category}{" "}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6  ">
                        <Link href="/products/1">
                          <div className="single-team-box">
                            <div className="image">
                              <img src="/images/team/team1.jpg" alt="image" />
                            </div>

                            <div className="content">
                              <h3>Lee Munroe</h3>
                              <span>Lead Designer</span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-6">
                        <Link href="/products/2">
                          <div className="single-team-box">
                            <div className="image">
                              <img src="/images/team/team2.jpg" alt="image" />
                            </div>

                            <div className="content">
                              <h3>Calvin Klein</h3>
                              <span>Lead Developer</span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-6">
                        <Link href="/products/3">
                          <div className="single-team-box">
                            <div className="image">
                              <img src="/images/team/team3.jpg" alt="image" />
                            </div>

                            <div className="content">
                              <h3>Sarah Taylor</h3>
                              <span>Lead Architecure</span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-6">
                        <Link href="/products/4">
                          <div className="single-team-box">
                            <div className="image">
                              <img src="/images/team/team4.jpg" alt="image" />
                            </div>

                            <div className="content">
                              <h3>Alastair Cook</h3>
                              <span>Marketing Manager</span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-6">
                        <Link href="/products/5">
                          <div className="single-team-box">
                            <div className="image">
                              <img src="/images/team/team5.jpg" alt="image" />
                            </div>

                            <div className="content">
                              <h3>Meg Lanning</h3>
                              <span>Lead Architecure</span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-6">
                        <Link href="/products/6">
                          <div className="single-team-box">
                            <div className="image">
                              <img src="/images/team/team6.jpg" alt="image" />
                            </div>

                            <div className="content">
                              <h3>James Anderson</h3>
                              <span>Marketing Support</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Products;
