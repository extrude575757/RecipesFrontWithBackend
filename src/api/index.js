const getCredentials = creds => {
    // Mocked response to test conditional rendering of mission button on RenderChildDashboard
    // Once the endpoint is up, submissions will be available from the API
  
    return Promise.resolve({ credentials: [
        'id','username','password','department','role'
    ]});
  };
  

  export{
    getCredentials
  };