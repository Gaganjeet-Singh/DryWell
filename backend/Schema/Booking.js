const {Schema} = require('mongoose');

const BookingSchema = new Schema({
    name : {
        type: String,
        required:true
    },
    phone : {
        type :Number,
        required :true
    },
    email : {
        type : String,
        required :true
    },
    pickupAddress : {
        type : String,
        required : true
    },
    pickupDate : {
        type : Date,
        required :true,
    },
    servicetype : {
        type : String,
        required :true,
        enum : ['Dry Cleaning', 'Wash & Fold','Ironing Services','Shoe Cleaning','Sofa and carpet cleaning','Curtain and blanket cleaning'],
    }
});

module.exports = {BookingSchema};