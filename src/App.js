import React, { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData({ name, message });
    };

    return (
        <div className="App">
            <div className="App-content">
                <h1>Deliverable III Example</h1>
                <form onSubmit={handleSubmit} className="App-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="App-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <input
                            type="text"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="App-input"
                        />
                    </div>
                    <button type="submit" className="App-button">Submit</button>
                </form>

                {submittedData && (
                    <div className="submitted-data">
                        <h2>Submitted Data</h2>
                        <p><strong>Name:</strong> {submittedData.name}</p>
                        <p><strong>Message:</strong> {submittedData.message}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
