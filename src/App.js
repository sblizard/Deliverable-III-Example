import React, { useState, useEffect } from 'react';
import './App.css';
import ReminderCard from './ReminderCard';

function App() {
    const [reminders, setReminders] = useState(() => {
        const savedReminders = localStorage.getItem('reminders');
        return savedReminders ? JSON.parse(savedReminders) : [];
    });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReminder = { title, description };
        const updatedReminders = [...reminders, newReminder];
        setReminders(updatedReminders);
        localStorage.setItem('reminders', JSON.stringify(updatedReminders));
        setTitle('');
        setDescription('');
    };

    const handleDelete = (index) => {
        const updatedReminders = reminders.filter((_, i) => i !== index);
        setReminders(updatedReminders);
        localStorage.setItem('reminders', JSON.stringify(updatedReminders));
    };

    useEffect(() => {
        const savedReminders = localStorage.getItem('reminders');
        if (savedReminders) {
            setReminders(JSON.parse(savedReminders));
        }
    }, []);

    return (
        <div className="App">
            <div className="App-content">
                <h1>Reminder App</h1>
                <form onSubmit={handleSubmit} className="App-form">
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="App-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="App-input"
                        />
                    </div>
                    <button type="submit" className="App-button">Add Reminder</button>
                </form>

                {reminders.length > 0 && (
                    <div className="reminder-list">
                        <h2>Reminders</h2>
                        {reminders.map((reminder, index) => (
                            <ReminderCard
                                key={index}
                                title={reminder.title}
                                description={reminder.description}
                                onDelete={() => handleDelete(index)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
