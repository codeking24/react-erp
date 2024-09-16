import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignUp = async (e) => {
    try {
      let response = await fetch('http://localhost:3000/usersignup', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Check if the response is okay (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Attempt to parse the response as JSON
      let result = await response.json();
      console.warn(result);

      if (result) {
        alert("Data saved successfully");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      // Log the error message
      console.error('There was an error with the fetch operation:', error);
      // Show a user-friendly alert
      alert("An error occurred. Please try again.");
    }
    e.preventDefault();
  };


  const handleOnSubmit = async (e) => {
    try {
      let response = await fetch('http://localhost:3000/checklogin', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Check if the response is okay (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Attempt to parse the response as JSON
      let result = await response.json();
      console.warn(result);

      if (result) {
        alert("Log In Successfully");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      // Log the error message
      console.error('There was an error with the fetch operation:', error);
      // Show a user-friendly alert
      alert("An error occurred. Please try again.");
    }
    e.preventDefault();
  };

  return (
    <div>
      <main className="main" id="top">
        <div className="row vh-100 g-0">
          <div className="col-lg-6 position-relative d-none d-lg-block">
            <div
              className="bg-holder"
              style={{ backgroundImage: `url(/assets/img/bg/login02.jpg)` }}
            ></div>
          </div>
          <div className="col-lg-6">
            <div className="row flex-center h-100 g-0 px-4 px-sm-0">
              <div className="col col-sm-6 col-lg-7 col-xl-6">
                <a
                  className="d-flex flex-center text-decoration-none mb-4"
                  href="#a"
                >
                </a>
                <div className="text-left mb-7">
                  <h3 className="text-body-highlight">Sign In</h3>
                  <p className="text-body-tertiary">Get access to your account</p>
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <div className="form-icon-container">
                    <input
                      className="form-control form-icon-input"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="fas fa-user text-body fs-9 form-icon"></span>
                  </div>
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <div className="form-icon-container">
                    <input
                      className="form-control form-icon-input"
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="fas fa-key text-body fs-9 form-icon"></span>
                  </div>
                </div>
                <div className="row flex-between-center mb-7">
                  <div className="col-auto">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        id="basic-checkbox"
                        type="checkbox"
                        defaultChecked
                      />
                      <label className="form-check-label mb-0" htmlFor="basic-checkbox">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-auto">
                    <a className="fs-9 fw-semibold" href="../simple/forgot-password.html">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button onClick={handleOnSubmit} className="btn btn-primary w-100 mb-3" href='/dashboard'>Sign In</button>
                <div className="text-center">
                  <a className="fs-9 fw-bold" href="#b">
                    Create an account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="support-chat-container">
          <div className="container-fluid support-chat">
            <div className="card bg-body-emphasis">
              <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
                <h5 className="mb-0 d-flex align-items-center gap-2">
                  Demo widget
                  <span className="fa-solid fa-circle text-success fs-11"></span>
                </h5>
                <div className="btn-reveal-trigger">
                  <button
                    className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
                    type="button"
                    id="support-chat-dropdown"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fas fa-ellipsis-h text-body"></span>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end py-2"
                    aria-labelledby="support-chat-dropdown"
                  >
                    <a className="dropdown-item" href="#!">
                      Request a callback
                    </a>
                    <a className="dropdown-item" href="#!">
                      Search in chat
                    </a>
                    <a className="dropdown-item" href="#!">
                      Show history
                    </a>
                    <a className="dropdown-item" href="#!">
                      Report to Admin
                    </a>
                    <a className="dropdown-item btn-support-chat" href="#!">
                      Close Support
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body chat p-0">
                <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
                  <div className="text-end mt-6">
                    <a
                      className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                      href="#!"
                    >
                      <p className="mb-0 fw-semibold fs-9">
                        I need help with something
                      </p>
                      <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                    </a>
                    <a
                      className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                      href="#!"
                    >
                      <p className="mb-0 fw-semibold fs-9">
                        I can’t reorder a product I previously ordered
                      </p>
                      <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                    </a>
                    <a
                      className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                      href="#!"
                    >
                      <p className="mb-0 fw-semibold fs-9">How do I place an order?</p>
                      <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                    </a>
                    <a
                      className="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                      href="#!"
                    >
                      <p className="mb-0 fw-semibold fs-9">My payment method not working</p>
                      <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                    </a>
                  </div>
                  <div className="text-center mt-auto">
                    <div className="avatar avatar-3xl status-online">
                      <img
                        className="rounded-circle border border-3 border-light-subtle"
                        src="../../../assets/img/team/30.webp"
                        alt=""
                      />
                    </div>
                    <h5 className="mt-2 mb-3">Eric</h5>
                    <p className="text-center text-body-emphasis mb-0">
                      Ask us anything – we’ll get back to you here or by email within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
                <div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4">
                  <input
                    className="form-control outline-none border-0 flex-1 fs-9 px-0"
                    type="text"
                    placeholder="Write message"
                  />
                  <label
                    className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                    htmlFor="supportChatPhotos"
                  >
                    <span className="fa-solid fa-image"></span>
                  </label>
                  <input
                    className="d-none"
                    type="file"
                    accept="image/*"
                    id="supportChatPhotos"
                  />
                  <label
                    className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                    htmlFor="supportChatAttachment"
                  >
                    <span className="fa-solid fa-paperclip"></span>
                  </label>
                  <input
                    className="d-none"
                    type="file"
                    id="supportChatAttachment"
                  />
                </div>
                <button className="btn p-0 border-0 send-btn">
                  <span className="fa-solid fa-paper-plane fs-9"></span>
                </button>
              </div>
            </div>
          </div>
          <button className="btn p-0 border border-translucent btn-support-chat">
            <span className="fs-8 btn-text text-primary text-nowrap">Chat demo</span>
            <span className="fa-solid fa-circle text-success fs-9 ms-2"></span>
            <span className="fa-solid fa-chevron-down text-primary fs-7"></span>
          </button>
        </div>
      </main>
    </div>
  );
}
