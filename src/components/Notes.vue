<template>
    <div class="notes">
        <ul>
            <li v-for="todo in todos">
                <h2>{{ todo.title }}</h2>
                <p>{{ todo.content }}</p>
                <button @click="saveTodo"></button>
            </li>
        </ul>
    </div>
</template>

<script>
    const Notes = {
        methods: {
            saveTodo() {
                this.$store.dispatch('saveTodo');
            }
        },
        computed: {
            todos() {
                return this.$store.getters.notes
            }
        }
    };
    export default Notes;
</script>

<style>
    .notes {
        position: fixed;
        top: 0;
        left: 160px;
        bottom: 0;
        width: 300px;
        border-right: 2px solid #2C9ABF;
        padding: 20px;
        z-index: 1;
    }
</style>
