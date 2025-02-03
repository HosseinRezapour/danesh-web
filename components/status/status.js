import React from 'react';

const Status = ({ status }) => {
    const messages = {
        1: { text: ' (تایید شده)', color: 'text-done' },
        2: { text: ' (در حال ارزیابی)', color: 'text-orange-500' },
        3: { text: ' (ناموفق)', color: 'text-red-500' },

    };

    const message = messages[status] || { text: 'نامعتبر', color: 'text-gray-500' };

    console.log(status)
    return (
        <span className={`${message.color}`}>
            {message.text}
        </span>
    );
};

export default Status;
