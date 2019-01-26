export const environment = {
  production: true,
  // appConfigFile: "./app.config.prod.json"
  appConfig: {
    appType: "Ns",
    apiEndpoint: "http://192.168.8.102:3000/api",
    loggingEnabled: true,
    loggingLevel: "Debug",
    storageServiceClass: null
  }
};
