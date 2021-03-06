import { combineReducers, createStore } from 'redux'
import * as REST_CONFIG from "../config/config";

//etat initial pour reprise par les composants pouir calque des etats initiaux locaux
export const initialState = { messages: [], users: [], lastMessageId: 0 };
//action public diffusables
export const ACTIONS = Object.freeze({
    SET_MESSAGES: 'SET_MESSAGES',
    ADD_MESSAGES: 'ADD_MESSAGES',
    SAVE_MESSAGE: 'SAVE_MESSAGE',
    SET_USERS: 'SET_USERS'
});
//actions privee au document
export const PRIVATE_ACTIONS = Object.freeze({
    INIT: 'INIT'
});

//definition des actions et leurs traitements sur l'etat du magasion
function reducers(state = initialState, action) {
    console.error(action.type);
    switch (action.type) {
        case PRIVATE_ACTIONS.INIT:
            setInterval(() => {
                fetch(REST_CONFIG.ADR_REST + REST_CONFIG.RESSOURCES.users, { method: 'GET' })
                    .then(flux => flux.json())
                    .then(arr => {
                        store.dispatch({ type: ACTIONS.SET_USERS, values: arr });
                        return arr;
                    })
            }, 10000
            );

            setInterval(() => {
                fetch(REST_CONFIG.ADR_REST + REST_CONFIG.RESSOURCES.messages + '?id_gte=' + (store.getState().tchat.lastMessageId+1), { method: 'GET' })
                    .then(flux => flux.json())
                    .then(arr => {
                        let lastId = store.getState().tchat.lastMessageId;
                        arr.map(element => {
                            if (lastId < element.id) lastId = element.id;
                            return null;
                        });
                        store.dispatch({ type: ACTIONS.ADD_MESSAGES, values: arr, maxId: lastId });
                        return arr;
                    })
            }, 5000
            );

            return state;

        case ACTIONS.SET_MESSAGES: return { ...state, messages: action.values }; // on copy le contenu de state et on ajoute messages
        case ACTIONS.ADD_MESSAGES: return {
            ...state,
            messages: [...state.messages, ...action.values],
            lastMessageId: action.maxId
        }; // on copy le contenu de state et on ajoute messages
        case ACTIONS.SAVE_MESSAGE:
            fetch(REST_CONFIG.ADR_REST + REST_CONFIG.RESSOURCES.messages,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(action.value)
                })
            return state;
        case ACTIONS.SET_USERS: return { ...state, users: action.values };
        default: return state;
    }
}
// snippet creation reducer : rxreducer
const modalInitialState = {
    isShown: false,
    content: null
}

const modalReducer = (state = modalInitialState, action) => {
    switch (action.type) {

        case 'SHOW': return { ...state, isShown: true, content: action.value }
        case 'HIDE': return { ...state, isShown: true, content: null }
        default:
            return state
    }
}

const store = createStore( combineReducers({tchat: reducers, modal: modalReducer}) );

store.subscribe(() => {
    console.warn(store.getState());
})

store.dispatch({ type: PRIVATE_ACTIONS.INIT });

export default store;