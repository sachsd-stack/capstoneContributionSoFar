const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mailSchema = new Schema({
    firstname: { type:String, required: true },
    lastname: { type: String, required: true },
    emailaddress: { type: String, required: true },
    description: { type: String, required: true },
    }, {
    timestamps: true,
});

const Mail = mongoose.model('Mail', mailSchema);

module.exports = Mail;