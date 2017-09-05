import Vue from 'vue';
import Vuex from 'vuex';

// Tell Vue to use Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        newTodo: '',
        activeNote: {}
    },
    mutations: {
        ADD_TODO(state) {
            console.log('adding note mutation');
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
