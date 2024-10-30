import React, { useState } from 'react';

const CtaSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: 'Your Company*'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-wrap">
                    <div className="content">
                        <h2>Get A Free Consultation</h2>
                        <p>Drop us a line! We are here to answer your questions 24/7</p>
                    </div>
                    <form className="cta-form" onSubmit={handleSubmit}>
                        <div className="input-filled">
                            <input type="text" placeholder="Your Name*" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="input-filled">
                            <input type="text" placeholder="Your Email*" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="input-filled">
                            <select name="company" value={formData.company} onChange={handleChange}>
                                <option disabled>Your Company*</option>
                                <option>Manit</option>
                                <option>Manit</option>
                            </select>
                        </div>
                        <div className="input-filled">
                            <button type="submit">Free Consultancy</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CtaSection;
