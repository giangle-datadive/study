let AppActions = require('../actions/AppActions');
let Firebase = require('firebase');

module.exports = {
    saveContact(contact) {
        this.firebaseRef = new Firebase('https://contact-e0913.firebaseio.com/contacts');
        this.firebaseRef.push({
            contact: contact,
        });
    }
};