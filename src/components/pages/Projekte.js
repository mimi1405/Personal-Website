import React, { Component } from "react";
import School from "../../components/inc/SVGS/school";
import Race from "../../components/inc/SVGS/race";
import QR from "../../components/inc/SVGS/qr";
import Soulchannel from "../inc/SVGS/Website";
import ThisSite from "../inc/SVGS/Website";


export class projekte extends Component {
  render() {
    return (
      <div>
        <section
          id="projekt-section"
          style={{ color: "white", backgroundColor: "black" }}
        >
          <div className="container">
            <div className="row pt-5 pb-5 text-end">
              <div className="col-lg-12">
                <h1 id="skills-title" className="pb-5 display-1">
                  Projekte
                </h1>
              </div>
            </div>
            <div className="row justify-content-around align-items-center">
              <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                <div className="row justify-content-center mb-3 text-center">
                  <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                    <h1 className="project-title display-6">
                      Barcode-Generator
                    </h1>
                  </div>
                </div>
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                    <div className="project">
                      <a href="https://portfolio.bbbaden.ch/user/m-momcilovic-inf20/barcodegenerator">
                        <QR></QR>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-around mt-4 pb-5 text-center">
                  <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                    <a href="https://portfolio.bbbaden.ch/user/m-momcilovic-inf20/barcodegenerator">
                      <button className="CV-button btn">Portfolio</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                <div className="row justify-content-center mb-3 text-center">
                  <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                    <h1 className="project-title display-6">WEB-Rundgang</h1>
                  </div>
                </div>
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                    <div className="project">
                      <a href="https://portfolio.bbbaden.ch/user/m-momcilovic-inf20/virtueller-bbb-rundgang">
                        <School></School>
                      </a>
                    </div>
                  </div>
                  <div className="row justify-content-around mt-4 pb-5 text-center">
                    <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                      <a href="https://portfolio.bbbaden.ch/user/m-momcilovic-inf20/virtueller-bbb-rundgang">
                        <button className="CV-button btn">Portfolio</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                  <div className="row justify-content-center mb-3 text-center">
                    <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                      <h1 className="project-title display-6">
                        THE SOUL CHANNEL
                      </h1>
                    </div>
                  </div>
                  <div className="row justify-content-center mb-3 text-center">
                    <div className="project">
                      <a href="https://the-soul-channel.de/">
                        <Soulchannel />
                      </a>
                    </div>
                  </div>
                  <div className="row justify-content-center mb-3 text-center">
                    <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                      <a title="Noch nicht vorhanden..." href="">
                        <button className="CV-button btn">Portfolio</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                  <div className="row justify-content-center mb-3 text-center">
                    <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                      <h1 className="project-title display-6">
                        maksim-momcilovic.ch
                      </h1>
                    </div>
                  </div>
                  <div className="row justify-content-center mb-3 text-center">
                    <div className="project">
                      <a title="Führt direkt zum Portfolio, da Sie schon auf der Seite sind! :)" href="https://portfolio.bbbaden.ch/user/m-momcilovic-inf20/maksim-momcilovic-ch">
                        <ThisSite />
                      </a>
                    </div>
                  </div>
                  <div className="row justify-content-center mb-3 text-center">
                    <div className="col-lg-auto col-md-auto col-sm-auto col-xs-auto">
                      <a href="https://portfolio.bbbaden.ch/user/m-momcilovic-inf20/maksim-momcilovic-ch">
                        <button className="CV-button btn">Portfolio</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center align-items-center text-center">
              <h1 className="project-title display-6 pt-4">
                Mehr Projekte folgen...
              </h1>
              <ul className="list-unstyled pt-5">
                <li>C# - WPF Memorygame</li>
                <li>AwesomeTools - React-Native</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default projekte;
