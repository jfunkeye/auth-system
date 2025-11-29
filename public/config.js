// API Configuration
const CONFIG = {
  API_BASE_URL: 'https://auth-system-45j5.onrender.com/api'
};

// Make it available globally
window.APP_CONFIG = CONFIG;

// Debug information
console.log('🔧 Debug Info:');
console.log('✅ Config loaded successfully');
console.log('🌐 API Base URL:', CONFIG.API_BASE_URL);
console.log('📁 Current path:', window.location.pathname);
console.log('🔗 CSS loaded:', document.styleSheets.length > 0);

// Test backend connection
fetch(CONFIG.API_BASE_URL + '/health')
  .then(response => {
    console.log('✅ Backend connection:', response.status);
    return response.json();
  })
  .then(data => console.log('📊 Backend health:', data))
  .catch(error => console.error('❌ Backend connection failed:', error));
