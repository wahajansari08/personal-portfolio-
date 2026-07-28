import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const Contact = () => {


    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        _honey: '',
    });
    const [isSending, setIsSending] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [, forceUpdate] = useState(0);
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        if (!validator.allValid()) {
            validator.showMessages();
            forceUpdate((x) => x + 1);
            return;
        }

        validator.hideMessages();
        setIsSending(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: forms.name,
                    email: forms.email,
                    subject: forms.subject,
                    message: forms.message,
                    _honey: forms._honey,
                }),
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok && data.ok) {
                setSubmitStatus({ type: 'success', message: 'Message sent successfully.' });
                setForms({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    _honey: '',
                });
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message.' });
            }
        } catch (err) {
            setSubmitStatus({ type: 'error', message: 'Failed to send message.' });
        } finally {
            setIsSending(false);
        }
    };


    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            className="form-control"
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name" />
                    </div>
                    {validator.message('name', forms.name, 'required|alpha_space')}
                </div>
                <div className="col col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            className="form-control"
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            type="text"
                            name="subject">
                            <option>Choose a Service</option>
                            <option>Web Design</option>
                            <option>Web Development</option>
                            <option>Marketing</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col fullwidth col-lg-12">
                    <textarea
                        className="form-control"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Message">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            {/* Honeypot anti-spam field (keep hidden) */}
            <input
                type="text"
                name="_honey"
                value={forms._honey}
                onChange={(e) => changeHandler(e)}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
            />
            <div className="submit-area">
                <button type="submit" className="theme-btn-s2" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Submit Now'}
                </button>
                {submitStatus?.type === 'success' && (
                    <p style={{ marginTop: 10, color: '#2e7d32' }}>{submitStatus.message}</p>
                )}
                {submitStatus?.type === 'error' && (
                    <p style={{ marginTop: 10, color: '#d32f2f' }}>{submitStatus.message}</p>
                )}
            </div>
        </form>
    )
}

export default Contact;
