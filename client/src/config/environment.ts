const {
    REACT_APP_API_URL: apiUrl,
    NODE_ENV: environment,
  } = process.env;
  
  const isDevEnv = environment === "development";
  
  export {
    apiUrl,
    isDevEnv,
    environment,
  };