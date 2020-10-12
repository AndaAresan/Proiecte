import React, { Component } from "react";

import Menu from "./Navigations/Menu";
import Header from "./Header";
import booksMockData from "../mocks/books";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksMockData,
      isMenuOpen: false,
      selectedFilter: "All",
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  selectFilter = (filter) => {
    this.setState({
      selectedFilter: filter,
      books:
        filter === "All"
          ? booksMockData
          : booksMockData.filter((book) => book.category === filter),
    });
  };

  render() {
    const filters = ["All", "Design", "Mobile", "DevOps", "Essentials"];
    const tabItems = filters.map((filter) => (
      <li
        className={filter === this.state.selectedFilter ? "active" : ""}
        key={filter}
        onClick={() => this.selectFilter(filter)}
      >
        <a href="#0">{filter}</a>
      </li>
    ));

    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.isMenuOpen}
          toggleMenu={this.toggleMenu}
        />

        <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                Library
              </a>
            </div>
            <ul className="nav navbar-nav pull-right">
              <li className="hidden-xs">
                <a href="#about">About us</a>
              </li>
              <li>
                <button
                  onClick={() => this.toggleMenu()}
                  className="btn btn-lg btn-outline"
                >
                  <i className="fa fa-graduation-cap" /> <span>Training</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <Header title="By FastTrackIT" />

        <section id="books">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Books</h2>
                <hr className="star-primary" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav nav-pills text-center">{tabItems}</ul>
              </div>
            </div>
            <div className="row book-list">
              {this.state.books.map((book) => (
                <div className="col-xs-6 col-sm-3" key={book.id}>
                  <div className="thumbnail">
                    <img alt="" className="img-responsive" src={book.cover} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="success">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>About The Library</h2>
                <hr className="star-light" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-lg-offset-2">
                <p>
                  This library is an exercise for building UI in a{" "}
                  <strong style={{ textDecoration: "underline" }}>
                    declarative way
                  </strong>
                  . This web site will help you understand the fundamental piece
                  of ReactJS, components. You'll learn how to break an app in
                  components (AKA componentization) and flow data accross them.
                </p>
              </div>
              <div className="col-lg-4">
                <p>
                  This ReactJS web site works, but it's not well implemented.
                  The problem, the developer didn't think in React and there
                  aren't many components.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center">
          <div className="footer-above">
            <div className="container">
              <div className="row">
                <div className="footer-col col-md-4">
                  <h3>Main Location</h3>
                  <p>
                    <span>Cluj-Napoca</span>
                    <br />
                    <span>Strada Observatorului, nr. 90, ap. 16-17</span>
                  </p>
                </div>
                <div className="footer-col col-md-4">
                  <h3>Around the Web</h3>
                  <ul className="list-inline">
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/company/fasttrackit/"
                        className="btn-social btn-outline"
                      >
                        <i className="fa fa-fw fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/fasttrackiteducation/"
                        className="btn-social btn-outline"
                      >
                        <i className="fa fa-fw fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/fasttrackit/?hl=ro"
                        className="btn-social btn-outline"
                      >
                        <i className="fa fa-fw fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col col-md-4">
                  <h3>About FastTrackIT</h3>
                  <p>
                    <a href="https://fasttrackit.org/">FastTrackIT </a>
                    <span>
                      helps people kickstart their development careers
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-below">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <span>Copyright &copy;</span>{" "}
                  <a
                    href="https://leanjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pruteanu Cosmin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
