<template>
    <div>
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
