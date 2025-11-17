import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './AnalyticsAlert.css';

const COOKIE_NAME = 'analyticsConsent';
const COOKIE_EXPIRY_DAYS = 365;

const AnalyticsAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const consentCookie = getCookie(COOKIE_NAME);
    
    if (!consentCookie) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
  };

  const handleOkayClick = () => {
    setIsAnimatingOut(true);
    
    setTimeout(() => {
      setIsVisible(false);
      setCookie(COOKIE_NAME, 'true', COOKIE_EXPIRY_DAYS);
      
      setTimeout(() => {
        setShouldRender(false);
      }, 50);
    }, 400);
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <div 
      className={`analytics-alert ${isVisible ? 'visible' : ''} ${isAnimatingOut ? 'animating-out' : ''}`}
      role="alert"
      aria-live="polite"
    >
      <div className="analytics-alert-container">
        <p className="analytics-alert-message">
          <strong>For transparency:</strong> I track page visits, time spent on each page, and button interactions. This helps me understand and improve how the site is used.
        </p>
        <Button 
          variant="primary" 
          onClick={handleOkayClick}
          className="analytics-alert-button"
        >
          Okay
        </Button>
      </div>
    </div>
  );
};

export default AnalyticsAlert;
