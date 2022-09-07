import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const awards = () => {
    return (
        <div>
            <section id='award-section' style={{ backgroundColor: "black", color: "white" }}>
                <div className='container pt-5'>
                    <div className='awards'>
                        <div className='row text-end'>
                            <div className='col-lg-12'>
                                <h1 id='awards-title' className='mt-5 mb-3'>ZERTIFIKATE</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='d-flex justify-content-end'>
                                <ul class="list-unstyled">
                                    <li><span className='fa-ul'><FontAwesomeIcon className='fa-solid fa-trophy' icon={faTrophy}></FontAwesomeIcon></span> Abacus-Anwenderzertifikat</li>
                                    <li><span className='fa-ul'><FontAwesomeIcon className='fa-solid fa-trophy' icon={faTrophy}></FontAwesomeIcon></span> Sprachaufenthalt Montreux</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default awards