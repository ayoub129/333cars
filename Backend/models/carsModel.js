const mongoose = require('mongoose')


const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price for the renting car'],
    },
    image: {
        type: File,
        required: [true, 'Please add an image']
    },
    description: {
        type: Array,
        required: true,
        default: [],
    },
    adons: {
        type: Array,
        required: true,
        default: [],
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Car', carSchema)