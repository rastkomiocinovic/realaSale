import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Realestate = new Schema({
    name: {
        type: String
    },
    city: {
        type: String
    },
    municipality: {
        type: String
    },
    street: {
        type: String
    },
    number: {
        type: String
    },
    realestateType: {
        type: Number
    },
    furnished: {
        type: Boolean
    },
    floor: {
        type: Number
    },
    floors: {
        type: Number
    },
    area: {
        type: Number
    },
    rooms: {
        type: Number
    },
    media: {
        type: Array
    },
    adType: {
        type: Number
    },
    cost: {
        type: Number
    },
    owner: {
        type: String
    },
    pending: {
        type: Boolean
    },
    promoted: {
        type: Boolean
    }

});

export default mongoose.model('Realestate', Realestate, 'realestate');