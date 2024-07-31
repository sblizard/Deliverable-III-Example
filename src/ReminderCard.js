import React from 'react';
import './ReminderCard.css';

function ReminderCard({ title, description, onDelete }) {
    return (
        <div className="reminder-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={onDelete} className="delete-button">Delete</button>
        </div>
    );
}

export default ReminderCard;
