import mongoose from 'mongoose';

const users = mongoose.Schema({
    id: { type: Number },
    name: { type: String, required: true, unique: true },
});

export default mongoose.model('users', users);
