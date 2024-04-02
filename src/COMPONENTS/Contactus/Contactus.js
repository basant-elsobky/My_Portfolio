import React, { useRef, useState } from 'react'
import './contactus.css'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import Icons from './Icon';

const Contactus = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xzc465o', 'template_nbhdwcb', form.current, '7lZJeYBZWISTq6zOM')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                window.location.reload();
            }, (error) => {
                console.log(error.text);
            });
    };
    const btnsend = useRef()
    const [text, settext] = useState("Send")
    function send() {
        settext("Done");
        btnsend.disabled = true;
        setTimeout(function () {
            settext('Send');
            btnsend.disabled = false;
        }, 3000);
    }
    return (
        <>
            <div className='fluid-container contact'>
                <div className='container tt'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 '>

                            <div className='container formm border border-dark p-4'>
                                <div >
                                    <h2 >Contact Us</h2>
                                </div>
                                <form ref={form} onSubmit={(e) => {
                                    e.preventDefault();
                                    sendEmail(e);
                                    send(e);
                                }}>
                                    <div className="parent">
                                        <div className="div1"><input name="user_name" className="form-control" placeholder="First Name" required /></div>
                                        <div className="div2"><input className="form-control" placeholder="Last Name" required /></div>
                                        <div className="div3"><input name="user_email" className="form-control" placeholder="Email" required /></div>
                                        <div className="div4"><input name="message" className="form-control" placeholder="Message" required /></div>
                                        <input ref={btnsend} className='btnn' type="submit" value={text}>
                                        </input>
                                    </div>
                                </form>
                            </div>    </div>

                        <div className='col-md-6 col-sm-12 ' >
                            <div className='d-flex flex-column'>
                                <h3 data-aos="fade-up" >Get in totuch</h3>
                                <p data-aos="fade-up" data-aos-delay="200" className='text-secondary'>Always available for
                                    freelancing if the right project comes along,
                                    Feel free to contact me.</p>
                                <div className='d-flex flex-row get' >
                                    <div className='icon d-flex justify-content-center'>
                                        <h3 >
                                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#dc965a", }} /></h3>
                                    </div>
                                    <span >basantheshem9@gmail.com</span>

                                </div>
                                <div className='d-flex flex-row get'>
                                    <div className='icon d-flex justify-content-center '>

                                        <h3  ><FontAwesomeIcon icon={faMobile} style={{ color: "#dc965a", }} /></h3>                                </div>
                                    <span>01554805151</span>

                                </div>
                                <Icons />
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus
