// src/components/WelcomeScreen.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const WelcomeScreen = () => {
    const [navigate, setNavigate] = useState(false);

    const handleStart = () => {
        setNavigate(true);
    };

    if (navigate) {
        return <Navigate to="/auth" />;
    }

    return (
        <div style={styles.container}>
            <h1>Welcome to My App</h1>
            <button style={styles.button} onClick={handleStart}>Get Started</button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#0077cc',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

export default WelcomeScreen;
