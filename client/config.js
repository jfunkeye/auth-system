
const CONFIG = {

  API_BASE_URL: window.location.hostname === 'localhost' 
    ? '/api' 
    : 'https://auth-system-45j5.onrender.com/api'
};

// Make it available globally
window.APP_CONFIG = CONFIG;
