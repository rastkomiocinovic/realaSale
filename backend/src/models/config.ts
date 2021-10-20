import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Config = new Schema({
    saleCommission: {
        type: Number
    },
    rentCommission: {
        type: Number
    }
});

export default mongoose.model('Config', Config, 'config');