import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import MessengerCustomerChat from 'react-messenger-customer-chat';


const ContactForm = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gb6pzmi', 'template_61hd7x7', e.target, 'qYEbx9_e5gkih0PhM')
            .then((result) => {
                console.log(result.text);
                toast.success('email send succesfully');
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <div className='my-16' id="contact-form">
                <div className="min-w-screen-lg">

                    <div className="card md:w-[50rem] bg-base-100 shadow-xl mx-auto">
                        <div className="card-body">
                            <h4 className="text-3xl font-bold text-center">Contact Form</h4>
                            <form ref={form} onSubmit={sendEmail} className='px-10 pb-16 pt-10'>
                                <div className="form-control w-full my-5">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input required type="text" name="user_name" placeholder="full name" className="input input-bordered " />
                                </div>
                                <div className="form-control w-full my-5">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required type="text" name='user_email' placeholder="email" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full my-5">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input required type="text" name='user_address' placeholder="address" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full my-5">
                                    <label className="label">
                                        <span className="label-text">Write Something</span>
                                    </label>
                                    <textarea required name='message' className="textarea textarea-bordered" placeholder="write you message"></textarea>
                                </div>
                                <input className='btn mx-auto' type="submit" value="Send Email" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <MessengerCustomerChat
                pageId="100088257536489"
                appId="870290150669273"
            />
        </>
    );
};
export default ContactForm;