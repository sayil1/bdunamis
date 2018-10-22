const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Schema = new schema({
    name: {
        type: String
    },
    age: {
        type: Number
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

const testModel = mongoose.model("testModel", Schema);
module.exports = testModel;