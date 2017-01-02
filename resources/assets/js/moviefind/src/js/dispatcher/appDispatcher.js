let Dispatcher = require("flux").Dispatcher;
let assign = require("object-assign");
let appDispatcher = assign(new Dispatcher(), {
    handleViewAction: function (action) {
        let payload = {
            source: 'VIEW_ACTION',
            action: action
        };
        this.dispatch(payload);
    }
});

module.exports = appDispatcher;
