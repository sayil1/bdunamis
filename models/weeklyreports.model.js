const mongoose = require("mongoose");
const schema = mongoose.Schema;
const WeeklyreportSchema = new schema({
    dateOfService: {
        type: Date
    },
    ServiceType: {
        type: String
    },
    Attendance: {
        type: Number
    },
    NewConverts: {
        type: Number
    },
    Rededication: {
        type: Number
    },
    Incidences: {
        type: String
    },
    Financial:{
        tithes:{type: Number},
        RegularOffering:{type: Number},
        freeWillOffering:{type:Number}
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

const WeeklyReportModel = mongoose.model("WeeklyReportModel", WeeklyreportSchema);
module.exports = WeeklyReportModel;