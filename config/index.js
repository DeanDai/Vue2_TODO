module.exports = {
    // Other configuration
  
    build: {
      // Add publicPath settings，can be absolute path or relative path
      publicPath: process.env.NODE_ENV === 'production' ? '/Vue2_TODO/' : '/',
      // ...
    },
  
    // Other settings
  };
  