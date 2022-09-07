import PropTypes from 'prop-types'
import React, { Component } from 'react'
import logo from '../../logo.svg';
import mariadb from '../../mariadbLogowhite.svg';
import abacuslogo from '../../abacus.svg';
import banana from '../../banana.svg';
import wf from '../../webflow-icon.svg';
import msoffice from '../../ms-office.svg';

export class Skills extends Component {
  
  static propTypes = {}

  render() {
    return (
      <div>
        <section className='web-skills-section' id='skills-section' style={{ backgroundColor: "black" }}>

          <div className='container pt-5 pb-5'>

            <div className='row'>

              <div className='col-lg-12'>
                <h1 className='display-1' id='skills-title'>SKILLS</h1>
              </div>

              <div className='row text-center mt-5'>
                <div className='col-lg-12 text-center'>
                  <h1 className='display-5 web-dev-title' style={{ color: '#af6dda'}}>Web-Developement</h1>
                </div>
              </div>

              <div className='row text-center mt-5 justify-content-lg-center justify-content-sm-around ml-0'>
                <div className='col-lg-auto col-sm-auto col-md-auto col-xs-auto'>
                  <div className='card html-card'>
                    <div className='card-body'>

                      <img className='card-img-top skill-pic' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

                      <h5 className='card-title mt-3'>HTML5</h5>
                    </div>
                  </div>
                </div>
                <div className='col-lg-auto col-sm-auto col-md-auto col-xs-auto'>
                  <div className='card html-card'>
                    <div className='card-body'>

                      <img className='card-img-top skill-pic' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

                      <h5 className='card-title mt-3'>CSS3</h5>
                    </div>
                  </div>
                </div>
                <div className='col-lg-auto col-sm-auto col-md-auto col-xs-auto'>
                  <div className='card html-card'>
                    <div className='card-body'>

                      <img className='card-img-top skill-pic' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />

                      <h5 className='card-title mt-3'>Bootstrap 5</h5>
                    </div>
                  </div>
                </div>

                <div className='row text-center mt-5 justify-content-lg-center justify-content-sm-around mb-5'>

                  <div className='col-lg-auto col-sm-auto col-md-auto col-xs-auto'>

                    <div className='card html-card'>
                      <div className='card-body'>

                        <img className='card-img-top skill-pic' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

                        <h5 className='card-title mt-3'>Javascript</h5>
                      </div>
                    </div>

                  </div>
                  <div className='col-lg-auto col-sm-auto col-md-auto col-xs-auto'>

                    <div className='card html-card'>
                      <div className='card-body'>

                        <img className='card-img-top skill-pic' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

                        <h5 className='card-title mt-3'>React.js</h5>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>

        </section>

        <section className='system-skills-section' style={{ backgroundColor: "black" }}>

          <div className='container'>

            <div className='row text-center'>
              <div className='col-lg-12'>
                <h1 className='display-5 sys-dev-title' style={{ color: '#af6dda' }}>System</h1>
              </div>
            </div>

            <div className='row text-center mt-5 justify-content-lg-center justify-content-sm-around'>

              <div className='col-lg-auto col-sm-auto col-md-auto col-xs-auto'>

                <div className='card html-card'>
                  <div className='card-body'>

                    <img className='card-img-top skill-pic' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />

                    <h5 className='card-title mt-3'>JavaFX</h5>
                  </div>
                </div>

              </div>
              <div className='col-lg-auto col-sm-auto col-md-auto col-xs-auto'>

                <div className='card html-card'>
                  <div className='card-body'>

                    <img className='card-img-top skill-pic' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />

                    <h5 className='card-title mt-3'>C# WPF</h5>
                  </div>
                </div>

              </div>

            </div>


          </div>

        </section>

        <section className='database-skills-section pt-5' style={{ backgroundColor: "black" }}>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-lg-12'>
                <h1 className='display-5 sys-dev-title' style={{ color: '#af6dda' }}>Database</h1>
              </div>
            </div>
          </div>

          <div className='row text-center mt-5 justify-content-lg-center justify-content-sm-around'>

            <div className='col-lg-auto col-sm-auto col-md-auto col-xs-auto'>

              <div className='card html-card'>
                <div className='card-body'>

                  <img className='card-img-top skill-pic' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />

                  <h5 className='card-title mt-3'>MySQL</h5>
                </div>
              </div>

            </div>
            <div className='col-lg-auto col-sm-auto col-md-auto col-xs-auto'>
              <div className='card html-card'>
                <div className='card-body'>
                  <img className='card-img-top skill-pic' src={mariadb}></img>
                  <h5 className='card-title mt-3'>MariaDB</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='other-skills-section' style={{ backgroundColor: "black" }}>

          <div className='container pt-5 pb-5'>
            <div className='row text-center'>
              <div className='col-lg-12'>
                <h1 className='display-5 sys-dev-title' style={{ color: '#af6dda' }}>Design / Andere</h1>
              </div>
            </div>
          </div>

          <div className='row text-center mt-5 justify-content-lg-center justify-content-sm-around'>

            <div className='col-lg-auto col-sm-auto col-md-auto col-xs-auto'>

              <div className='card html-card'>
                <div className='card-body'>

                  <img className='card-img-top skill-pic' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" />

                  <h5 className='card-title mt-3'>Illustrator</h5>
                </div>
              </div>

            </div>
            <div className='col-lg-auto col-sm-auto col-md-auto col-xs-auto'>
              <div className='card html-card'>
                <div className='card-body'>
                  <img className='card-img-top skill-pic' src={abacuslogo}></img>
                  <h5 className='card-title mt-3'>Abacus</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Skills



//COLUMN -> zu COL-XY umformen!!!