const router = require('express').Router();
let Mail = require('../models/mail.model');

router.route('/').get((req,res) => {
    Mail.find()
    .then(mail => res.json(mail))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const emailaddress = req.body.emailaddress;
    const description = req.body.description

    const newMail = new Mail({
        firstname,
        lastname,
        emailaddress,
        description
    });

    newMail.save()
    .then(() => res.json('Mail sent!'))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;