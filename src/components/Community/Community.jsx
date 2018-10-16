import React, { Component } from 'react';
import { Link } from 'gatsby';
import './Community.scss';

class Community extends Component {
  render() {
    return (
      <section className="row community">
        <section className="col-md-12">
          <div className="entry__header text-center">
            <h2>ioFog Community</h2>
            <p>Connect with other ioFog enthusiasts through events, resources, and programs.</p>
          </div>

          <div className="row block-left">
            <div className="col-md-5">
              <h4>Get help from the Community</h4>
              <p>This is placeholder copy to introduce the community resources. The paragraph could be up to four
                sentences, but two are recommended. This is placeholder copy to introduce the community resources.</p>

              <ul className="list-links">
                <li>
                  <Link className="forum" to="/">ioFog Discussion Forum</Link>
                </li>
                <li>
                  <Link className="blog" to="/">Official ioFog Blog</Link>
                </li>
                <li>
                  <Link className="support" to="/">Visit our support page</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-7">
              <div className="img-holder">
                <div className="img-01">
                  <img src="images/img-gallery-03.png" alt="" />
                </div>
                <div className="img-02">
                  <img src="images/img-gallery-03.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row block-right">
            <div className="col-md-5">
              <div className="img-holder one-img">
                <div className="img-01">
                  <img src="images/img-gallery-04.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <h4>Stay up to date with the latest news.</h4>
              <p>This is placeholder copy to introduce the community resources. The paragraph could be up to four
                sentences, but two are recommended. This is placeholder copy to introduce the community resources.</p>

              <ul className="list-links">
                <li>
                  <Link className="forum" to="/">This is a link with icon</Link>
                </li>
                <li>
                  <Link className="blog" to="/">This is a link with icon</Link>
                </li>
                <li>
                  <Link className="support" to="/">This is a link with icon</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="row block-left">
            <div className="col-md-5">
              <h4>Attend a community event</h4>
              <p>This is placeholder copy to introduce the community resources. Two sentences are recommended at most.</p>

              <ul className="list-links">
                <li>
                  <Link className="" to="/">
                    <span className="date">
                      12
                      <span>May</span>
                    </span>
                    <span className="wrap">
                      <strong>This is an example of a long event title and more</strong>
                      <span>Toronto, Canada</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="" to="/">
                    <span className="date">
                      12
                      <span>May</span>
                    </span>
                    <span className="wrap">
                      <strong>This is an example of a long event title and more</strong>
                      <span>Toronto, Canada</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="" to="/">
                    <span className="date">
                      12
                      <span>May</span>
                    </span>
                    <span className="wrap">
                      <strong>This is an example of a long event title and more</strong>
                      <span>Toronto, Canada</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-7">
              <div className="img-holder">
                <div className="img-01">
                  <img src="images/img-gallery-03.png" alt="" />
                </div>
                <div className="img-02">
                  <img src="images/img-gallery-03.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Community;