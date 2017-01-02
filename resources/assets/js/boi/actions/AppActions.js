let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');

let AppActions = {
    showForm() {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SHOW_FORM
        });
    },

    hideForm() {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.HIDE_FORM
        });
    },

    view(data) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.VIEW,
            data: data
        });
    },

    replay() {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REPLAY
        });
    },

    updateResult(data) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.UPDATE_RESULT,
            data: data
        });
    }
};

module.exports = AppActions;