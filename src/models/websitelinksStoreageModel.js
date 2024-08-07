const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true, 
        trim: true 
    },
    status: {
        type: String,
        default: 'unknown'
    },
    lastChecked: {
        type: Date,
        default: Date.now
    }
});

const Website = mongoose.model('Website', websiteSchema);

module.exports = {
    Website
};
