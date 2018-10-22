const mongoose = require("mongoose");
const schema = mongoose.Schema;
const PastorSchema = new schema({
    title: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    pastorInCharge: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now,
        once: true
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const PastorModel = mongoose.model("PastorModel", PastorSchema);
module.exports = PastorModel;