<template>
    <li>
        <label>
            <!-- Set attribute dynamically -->
            <input type="checkbox" :checked="todo.done" @change="statuschange(todo.id)">
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="tododelete(todo.id)">Delete</button>
    </li>
</template>

<script>
    export default {
        name: 'TodoItem',
        // 1. Use 'props' to receive the todo item object from parent component: TodoList.vue
        // props: ['todo', 'toggletodo', 'deletetodo'],
        // 2. Remove 'toggletodo', 'deletetodo' as we don't get it from parent component. We use global event bus now
        props: ['todo'],
        methods: {
            statuschange(id) {
                // 1. Notify the App.vue to update the 'done' by the status of current checkbox
                // this.toggletodo(id);
                // 2. Use global event bus to trigger the binded event in App.vue
                this.$bus.$emit('toggletodo', id);
            },
            tododelete(id) {
                if (confirm('Are you sure?')) {
                    // 1. Notify the App.vue to delete the todo item
                    // this.deletetodo(id);
                    // 2. Use global event bus to trigger the binded event in App.vue
                    this.$bus.$emit('deletetodo', id);
                }
            }
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:hover {
        background-color: #ddd;
        cursor: pointer;
    }

    li:hover button {
        display: block;
    }

    li:last-child {
        border-bottom: 0;
    }
</style>