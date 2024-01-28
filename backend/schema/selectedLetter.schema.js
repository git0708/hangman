const { Schema, model } = require("mongoose");

const SelectedLetter = new Schema({
    sessionId: {
        type: String,
        required: true,
        maxlength: 50
    }, selectedLetter: {
        type: Object,
        required: true
    }, status: {
        type: String,
        enum: ['Success', 'Failure', 'Pending'],
        default: 'Pending',
        required: true
    },
    mistakesCount: {
        type: Number,
        required: true
    },
    createdOn: {
        type: Date,
        default: null,
    },
    updatedOn: {
        type: Date,
        default: Date.now,
    }
});

const SelectedLetterModel = model("selectedLetter", SelectedLetter)

module.exports = SelectedLetterModel