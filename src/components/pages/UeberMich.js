import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


export class UeberMich extends Component {

  render() {
    return (
      <div>
        <section className="Ueber-Mich" id="ueberMichSection">
          <div className="container Ueber-Mich-Cont">
            <div className="column">
              <h1 className="Ueber-Mich-Title">ÜBER MICH</h1>
            </div>
            <div className="column">
              <p className="txt-abt-me">
                Hallo! Danke das Sie meine Website besuchen! Mein Name ist
                Maksim Momcilovic. Ich bin 18 Jahre alt und besuche derzeit die
                Informatikmittelschule.<br></br>
                In meiner Freizeit besuche ich gerne das Fitnessstudio, lese
                gerne Bücher und fahre gerne Autos. Auf dieser Seite möchte ich
                mich Ihnen gerne näher vorstellen, meine Skills und Projekte
                präsentieren und Sie hoffentlich überzeugen. Laden Sie meinen CV
                hier direkt unten herunter!
              </p>
            </div>
            <div className="column">
                <a href="/CV.pdf" download="CV.pdf">
                  <button
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Lebenslauf herunterladen"
                    className="btn CV-button"
                    type="button"
                > 
                    CV
                    <FontAwesomeIcon
                      className="downIcon"
                      icon={faDownload}
                    ></FontAwesomeIcon>
                  </button>
                  </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default UeberMich;
