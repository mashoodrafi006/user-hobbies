require('dotenv').config();

const config = {
    env: process.env.APP_ENV,
    port: process.env.PORT || 3002,
    mongoUrl: process.env.MONGO || 'mongodb://mongo:27017/arive',
};

export default config;
