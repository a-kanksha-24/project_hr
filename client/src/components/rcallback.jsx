import React, { useState } from 'react';

const RequestCallbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        treatment: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Submit the form data to Formspree
            const response = await fetch('https://formspree.io/f/mgvvpyln', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setResponseMessage('Form submitted successfully!');
            } else {
                setResponseMessage('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setResponseMessage('An error occurred. Please try again.');
        }

        // Reset the form after submission
        setFormData({
            name: '',
            phone: '',
            email: '',
            treatment: ''
        });
    };

    return (
        <div className="callback-form-container">
            <h2>Request a Call Back</h2>
            {responseMessage && <p>{responseMessage}</p>}
            <form onSubmit={handleSubmit} className="callback-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone number"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="treatment">Treatment</label>
                    <select
                        id="treatment"
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        required>
                        <option value="" disabled>Select treatment</option>
                        <option value="General Consultation">General Consultation</option>
                        <option value="Dental Care">Dental Care</option>
                        <option value="Skin Treatment">Skin Treatment</option>
                        <option value="Orthopedic">Orthopedic</option>
                    </select>
                </div>

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RequestCallbackForm;
