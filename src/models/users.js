import mongoose, { Schema } from 'mongoose';

const users = mongoose.Schema({
    id: { type: Number },
    name: { type: String, required: true, unique: true },
    hobbies: [{ type: Schema.Types.ObjectId, ref: "hobbies" }]
});

export default mongoose.model('users', users);
