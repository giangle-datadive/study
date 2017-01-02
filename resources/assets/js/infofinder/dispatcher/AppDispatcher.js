let Dispatcher = require('flux').Dispatcher;
let assign = require('object-assign');

let AppDispatcher = assign(new Dispatcher, {

    handleViewAction(action) {
        let payload = {
            actionType: action.actionType,
            action: action
        };

        this.dispatch(payload);
    }
});

module.exports = AppDispatcher;