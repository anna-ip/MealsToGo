const ngrokLocalHost = 'http://c342-155-4-39-214.ngrok.io';
const liveHost = 'http://localhost:5001'

const isDevelopment = process.env.NODE_ENV === 'development';
export const host = isDevelopment ? ngrokLocalHost : liveHost;
