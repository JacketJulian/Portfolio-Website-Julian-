import axios from 'axios';

const trackEvent = (eventType, eventData) => {
  axios.post('http://localhost:5000/api/track', { eventType, eventData })
    .catch(err => console.error('Error tracking event: ', err));
};

export default trackEvent;
