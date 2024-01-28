const {Schema,model} = require("mongoose");

const GetWordSchema = new Schema({
    sessionId: {
        type: String,
        required: true,
        maxlength: 50
    },word: {
        type: String,
        required: true,
        maxlength: 50
    },hints: {
        type: String,
        required: true,
        maxlength: 500
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

const GetWordModel = model("getword", GetWordSchema)

module.exports = GetWordModel