import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sale = new Schema({
    owner: {
        type: String
    },
    buyer: {
        type: String
    },
    realestateId: {
        type: String
    },
    cost: {
        type: Number
    },
    status: {
        type: Number
    },
    dateFrom: {
        type: String
    },
    dateTo: {
        type: String
    },
    type: {
        type: Number
    }
});

export default mongoose.model('Sale', Sale, 'sales');