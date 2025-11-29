
const CONFIG = {

  API_BASE_URL: window.location.hostname === 'localhost' 
    ? '/api' 
    : 'https://auth-system-0axe.onrender.com/api'
};

// Make it available globally
window.APP_CONFIG = CONFIG;
