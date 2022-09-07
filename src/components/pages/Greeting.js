import React from 'react'
import logo from '../../ccchaos.svg';
import stripe from '../../stripe.svg';
import TypeWriter from 'typewriter-effect';
import arrowDown from '../../arrowdown.svg'


const greeting = ( {element} ) => {
  return (
    <div>
      <section className='entrance et-hero-tabs'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='entrance-block'>
                <div className='entrance-greeting display-6'>
                  <TypeWriter
                    onInit={(sayName) => {
                      sayName.typeString('Hallo, ich bin <span style="color: #0aa200;">Maksim Momcilovic</span>.').start();
                    }}
                  />
                </div>
                <img src={stripe} className='stripe'></img>

                <div className='entrance-description lead'>
                  <TypeWriter
                    onInit={(typewriter) => {
                      typewriter.pauseFor(5000).typeString("Applikationsentwickler - Webdesigner").start();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-xs-center text-center'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-content-center'>
              <a href='#ueberMichSection'>
                <img className='bounce' id='arrow-down' src={arrowDown}></img>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default greeting