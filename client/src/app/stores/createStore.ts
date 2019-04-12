import {History} from 'history';
import {TodoModel} from 'app/models';
import {TodoStore} from './TodoStore';
import {RouterStore} from './RouterStore';
import {STORE_TODO, STORE_ROUTER, STORE_USER} from 'app/constants';
import UserStore from "app/stores/UserStore";
let  app = require("firebase");


let config = {
    apiKey: "AIzaSyAAteZKRTGZYBD6623fD1j-vW9bOCx6gQs",
    authDomain: "mizrahitefahot-cbc1e.firebaseapp.com",
    databaseURL: "https://mizrahitefahot-cbc1e.firebaseio.com",
    projectId: "mizrahitefahot-cbc1e",
    storageBucket: "mizrahitefahot-cbc1e.appspot.com",
    messagingSenderId: "1020005510202"
};

const firebaseApp = app.default.initializeApp(config);


export function createStores(history: History, defaultTodos?: TodoModel[]) {
    const todoStore = new TodoStore(defaultTodos);
    const routerStore = new RouterStore(history);
    const userStore = new UserStore(firebaseApp);

    return {
        [STORE_TODO]: todoStore,
        [STORE_ROUTER]: routerStore,
        [STORE_USER]: userStore,
    };
}
