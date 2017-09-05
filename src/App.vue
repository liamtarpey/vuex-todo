<template>
    <div id="app">
        <Toolbar></Toolbar>
        <Notes></Notes>
        <Editor></Editor>
    </div>
</template>

<script>
    import Toolbar from './components/Toolbar.vue';
    import Notes from './components/Notes.vue';
    import Editor from './components/Editor.vue';

    const App = {
        components: {
            Toolbar,
            Notes,
            Editor
        }
    };

    export default App;
</script>
