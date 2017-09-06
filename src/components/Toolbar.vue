<template>
    <div class="toolbar">
        <button @click="addTodo">Add Note</button>
    </div>
</template>

<script>
    const Toolbar = {
        methods: {
            addTodo() {
                this.$store.dispatch('addTodo');
            }
        }
    };

    export default Toolbar;
</script>

<style>
    .toolbar {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 160px;
        background-color: #2C9ABF;
        padding: 20px;
        z-index: 1;
    }
</style>
