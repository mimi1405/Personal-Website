import React, { Component } from "react";
import "./TimeLine.css";

export default class TimeLine extends Component {
  render() {
    return (
      <div>
        <section id="timeLine" className="pt-5 pb-5" style={{backgroundColor: "black"}}>
          <div classNameName="container py-5">
            <div className="main-timeline">
              <div className="timeline left">
                <div className="card">
                  <div className="card-body p-4">
                    <h3>14.05.2004 <span id="dateTimeSeperator">|</span> <span id="timeSeperator">17:17</span></h3>
                    <p className="mb-0">
                      BIRTHDAY
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card">
                  <div className="card-body p-4">
                    <h3>2010 - 2016</h3>
                    <p className="mb-0">
                      Primar- und Mittelstufe
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline left">
                <div className="card">
                  <div className="card-body p-4">
                    <h3>2017-2020</h3>
                    <p className="mb-0">
                      Oberstufe Bezirkschulabschluss ("Sekundarstufe A" ZH)
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card">
                  <div className="card-body p-4">
                    <h3>währenddessen...</h3>
                    <p className="mb-0">
                      Mehrere Ferienjobs als Hauswart <br/>
                      Vorstandsmitglied in Verein als Kassier <br/>
                      temporäre Einsätze als Hilfsarbeiter (Liegenschaftsverwaltung)<br/>
                      Logo-Designs für Unternehmer und PC's gebaut für Kollegen
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline left">
                <div className="card">
                  <div className="card-body p-4">
                    <h3>15.08.2022</h3>
                    <p className="mb-0">
                      Autoprüfung bestanden
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card">
                  <div className="card-body p-4">
                    <h3>2020 - jetzt</h3>
                    <p className="mb-0">
                      Ausbildung Informatikmittelschule<br/>
                      Aarau - Baden<br/>
                      Applikationsentwickler EFZ | kaufmännische Berufsmatur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
