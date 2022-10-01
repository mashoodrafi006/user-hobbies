import mongoose from 'mongoose';

const hobbies = mongoose.Schema({
    id: { type: Number },
    name: { type: String, required: true },
    passionLevel: { type: String, required: true },
    year: { type: String }
});

export default mongoose.model('hobbies', hobbies);
