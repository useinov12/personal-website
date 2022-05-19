import React, { useState, useEffect } from 'react'
import { Axios, db } from '../../firebase/firebaseConfig'
// import './styled.scss'

export default function ContactForm({contactFormIsOpen, handleCloseForm}) {
    const [formData, setFormData] = useState({})
    const [submited, setSubmited ] = useState(false)

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setFormData({
            name: '',
            email: '',
            message: '',
        })
        setSubmited(true)//fade in animation trigger
    }
    const sendEmail = () => {
        Axios.post(
            'https://us-central1-personal-website-f76e3.cloudfunctions.net/submit',
            formData
        )
            .then(res => {
                db.collection('emails').add({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date(),
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    //Fade-in animation
    useEffect(() => {
        let timer 
        console.log('submited change', submited)
        if(submited)timer = setTimeout(()=>handleCloseForm(), 200);
        return () =>clearTimeout(timer)
    }, [submited])

    useEffect(() => {   
        setSubmited(false)
    }, [contactFormIsOpen])
    return (
        <div className={contactFormIsOpen ? 'contact-window mounted' : 'contact-window'}>
            
            <div className={submited ? 'contact-container invisible':'contact-container'}>
                <button onClick={()=>handleCloseForm()} className='close-contact-form-btn'>X</button>
                <h2>Contact Me</h2>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={updateInput}
                        value={formData.name || ''} />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={updateInput}
                        value={formData.email || ''} />
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Message"
                        onChange={updateInput}
                        value={formData.message || ''}
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}