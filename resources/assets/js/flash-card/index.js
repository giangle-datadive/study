import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers} from 'redux';

const cards = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });

            return state.concat(newCard);
            break;
        default:
            return state || [];
    }
};

const store = createStore(combineReducers({
    cards
}));

const App = (props) => {
    return (
        <div className="app">
            {props.children}
        </div>
    );
};

ReactDOM.render(
    <App>Hello <strong>React</strong></App>,
    document.getElementById('main')
);