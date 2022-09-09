import React, { Component } from "react";
import { useFormik } from "formik";

export default class contact extends Component {
  render() {
    return (
      <div>
        <section id="contact" style={{ backgroundColor: "black" }}>
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-6 mb-5 mt-5">
                <h1 id="skills-title">Kontakt</h1>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  onSubmit="submit"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="contact"
                  ></input>
                  <div class="mb-3">
                    <label
                      htmlFor="email"
                      style={{ color: "#af6dda" }}
                      for="email"
                      class="form-label"
                    >
                      Email-Adresse
                    </label>
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      required
                    ></input>
                  </div>

                  <div class="mb-4">
                    <label
                      style={{ color: "#af6dda" }}
                      for="message"
                      class="form-label"
                    >
                      Nachricht
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      rows="3"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn CV-button mb-5">
                    Senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
