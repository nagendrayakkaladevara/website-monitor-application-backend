const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    website: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Website',
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Up', 'Down', 'unknown'],
        default: 'unknown'
    },
    checkedAt: {
        type: Date,
        default: Date.now
    }
});

const History = mongoose.model('History', historySchema);

module.exports = {
    History
};
