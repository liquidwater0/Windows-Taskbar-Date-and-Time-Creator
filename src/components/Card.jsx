import React from 'react';
import { useTheme } from '@mui/material';

export default function Card({ children, label, customColorCard }) {
    const theme = useTheme();
    const cardBodyStyles = {
        backgroundColor: theme.palette.cardColor,
        border: `3px solid ${theme.palette.cardBorder}`
    }

    return (
        <div className={`card ${customColorCard ? "custom-colors-card" : ""}`}>
            {
                label &&
                <h2 className='card-label'>{ label }</h2>
            }
            <div 
                className="card-body"
                style={cardBodyStyles}
            >
                { children }
            </div>
        </div>
    );
}