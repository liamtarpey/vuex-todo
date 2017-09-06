import Vue from 'vue';
import Vuex from 'vuex';
import FireBase from 'firebase';
import VuexFirebase from 'vuex-firebase';

// Tell Vue to use Vuex
Vue.use(Vuex);

// Firebase save - move this somewhere?
const saveTodo = (todo) => {
    console.log('todo:', todo);
    firebase.database().ref('todos').push(todo);
};

const Store = new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        ADD_TODO(state) {
            state.todos.push({
                title: 'My new note',
                content: ''
            });
        },
        SAVE_TODO(state) {
            saveTodo(state.todos[0]);
        }
    },
    actions: {
        addTodo({commit}){
            commit('ADD_TODO')
        },
        saveTodo({commit}) {
            commit('SAVE_TODO')
        }
    },
    getters: {
        todos: state => state.todos,
        notes(state, getters) {
            return getters.$firebase('todos').data.map(todo => {
                console.log('todos:', todo);
                return { todo }
            });
        }
    }
});

// Init Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAMgEDQoBOgeKbzYF12sZta8K2tZV0iJAM",
    authDomain: "vuex-todo.firebaseapp.com",
    databaseURL: "https://vuex-todo.firebaseio.com",
    projectId: "vuex-todo",
    storageBucket: "",
    messagingSenderId: "830127373451"
};

FireBase.initializeApp(firebaseConfig);
VuexFirebase(Store, FireBase);

export default Store;
