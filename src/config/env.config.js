
  const envConfig = {

    env: 'dev',

    dev: {
        web: {
            HOST_URL: 'https://www.google.com/',
        },
    
        api: {
            serverURL: '',
        },
    },

    test: {
        web: {
            HOST_URL: 'https://www.google.com/',
        },
       
        api: {
            serverURL: '',
        },
    },

};
  
  module.exports = {
    envConfig,
  };