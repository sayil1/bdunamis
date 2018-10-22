const mongoose = require("mongoose");
const schema = mongoose.Schema;
const WorkerSchema = new schema({
    firstName: {
        type: String
    },
    middleName: {
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
    DOB: {
        type: Date
    },
    gender: {
        type: String
    },
    maritalStatus: {
        type: String
    },
    employmentStatus: {
        type: String
    },
    nationality: {
        type: String
    },
    stateOfOrigin: {
        type: String
    },
    LGA: {
        type: String
    },
    Address: {
        address: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        }

    },
    department: {
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

const WokerModel = mongoose.model("WorkerModel", WorkerSchema);
module.exports = WokerModel;