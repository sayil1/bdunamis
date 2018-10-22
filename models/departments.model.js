const mongoose = require("mongoose");
const schema = mongoose.Schema;
const DeptSchema = new schema({
    name: {
        type: String
    },
    description: {
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

const DeptModel = mongoose.model("departmentModel", DeptSchema);
module.exports = DeptModel;