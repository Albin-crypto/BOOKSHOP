import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import '../Payment.css';

function Payment() {
    const amount = useLocation().state;
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    
    const currentDate = new Date();

    function formatDateToDDMMYYYY(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function addDays(date, days) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + days);
        return newDate;
    }

    const formattedDateAfter7Days = formatDateToDDMMYYYY(addDays(currentDate, 7));

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            navigate('/');
        }, 10000);

        return () => clearTimeout(timer);
    }, [navigate]);

    if (!visible) return null;

    return (
        <div className="payment-container">
            <div className="payment-message-box">
                <AiOutlineCheckCircle className="payment-icon" />
                <h2 className="payment-heading">Payment Successful!</h2>
                <p className="payment-amount">Amount: ₹{amount}/-</p>
                <p className="payment-date">
                    Your order will be delivered on or before <span className="date-highlight">{formattedDateAfter7Days}</span>
                </p>
            </div>
        </div>
    );
}

export default Payment;
