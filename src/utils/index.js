export const getEnvVars = () => {
  const serverEndPoint = process.env.REACT_APP_SERVER_ENDPOINT;

  return {
    endPoint: serverEndPoint,
  };
};
