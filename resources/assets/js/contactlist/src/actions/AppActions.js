let AppConstants = require('../constants/AppConstants');
let AppDispatcher = require('../dispatcher/AppDispatcher');

let AppActions = {
    saveContact(contact) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_CONTACT,
            contact: contact,
        });
    }
};

module.exports = AppActions;