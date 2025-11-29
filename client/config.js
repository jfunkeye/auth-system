
const CONFIG = {

  API_BASE_URL: window.location.hostname === 'localhost' 
    ? '/api' 
    : 'https://your-backend-url.onrender.com/api'
};

// Make it available globally
window.APP_CONFIG = CONFIG;