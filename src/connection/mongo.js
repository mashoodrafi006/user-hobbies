import mongoose from 'mongoose';
import config from '../config/index';

const mongoConnection = () => {
    try {
        mongoose
            .connect(config.mongoUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                keepAlive: true,
            })
            .then(() => console.log('Mongo connection built successful.'));

        mongoose.connection.on('error', () => {
            console.log('MongoDB connection error. Please make sure MongoDB is running.');
        });
    } catch (error) {
        console.log(error);
    }
};

export default mongoConnection;
