import React, { Component } from 'react'
import { useFormik } from 'formik';

export class contact extends Component {
    render() {
        return (
            <div>
                <section id='contact' style={{ backgroundColor: "black"}}>
                    <div className='container'>
                        <div className='row text-center'>
                            <div className='col-lg-6 mb-5 mt-5'>
                                <h1 id='skills-title'>Kontakt</h1>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-lg-6'>
                                <form name='contact' method='post' data-netlify="true" onSubmit="submit" netlify>

                                    <div class="mb-3">
                                        <label style={{ color: "#af6dda"}} for="exampleInputEmail1" class="form-label">Email-Adresse</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>

                                    <div class="mb-4">
                                        <label style={{ color: "#af6dda"}} for="exampleFormControlTextarea1" class="form-label">Nachricht</label>
                                        <textarea id='exampleFormControlTextarea1' class="form-control" rows="3"></textarea>
                                    </div>

                                    <button type="submit" className="btn CV-button mb-5">Senden</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default contact