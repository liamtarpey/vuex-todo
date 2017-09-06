import Vue from 'vue';
import Vuex from 'vuex';

// Tell Vue to use Vuex
Vue.use(Vuex);

const Store = new Vuex.Store({
    state: {
        todos: [],
        newTodo: '',
        activeNote: {}
    },
    mutations: {
        ADD_TODO(state) {
            state.todos.push({
                body: state.newTodo,
                completed: false
            });
        }
    },
    actions: {
        addTodo({commit}){
            commit('ADD_TODO')
        }
    },
    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos.filter((todo) => {return !todo.completed})
    }
});

export default Store;
