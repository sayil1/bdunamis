const mongoose = require("mongoose");
const schema = mongoose.Schema;
const BranchSchema = new schema({
    name: {
        type: String
    },
    Address: {
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
    },
    pastor: {
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

const BranchModel = mongoose.model("BranchModel", BranchSchema);
module.exports = BranchModel;