export const codes = {
    OK: 201,
    BAD_REQUEST: 400,
};

export const methods = {
    POST: {
      name: 'POST',
      defaultHeaders: {
        'Content-type': 'application/json',
      },
    }
  };
  
  export const headerConstants = {
    CONTENT_TYPE: 'Content-Type',
    AUTHENTICATION: 'Authorization',
  };
  
  export const urls = {
    API: "https://supli-staging.mysupli.com/api",
  };

  export default codes;
  