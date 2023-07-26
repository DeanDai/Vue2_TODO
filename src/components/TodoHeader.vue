<template>
    <div class="todo-header">
        <input type="text" 
        placeholder="Please enter your task name, press enter to confirm" 
        v-model="title"
        @keyup.enter="add">
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name: 'TodoHeader',
        data () {
            return {
                title: ''
            }
        },
        // Receive the function from parent componenet: App.vue
        props: ['addtodo'],
        methods: {
            // This function name can't be same as the 'addtodo' function name
            // All the data which set by [data, props, methods and computed] can't be identical as they are in the same vc instance
            add() {
                // Return if nothing input
                if (!this.title.trim()) return;
                // Construct the todo object
                const todo = {
                    id: nanoid(),
                    title: this.title,
                    done: false
                }
                // Fire the function in App.vue to send data from child component to parent
                // Notift App.vue to add a new todo object
                this.addtodo(todo);
                // Clear the title to reset the input
                this.title = '';
            }
        }
    }
</script>

<style scoped>
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.75), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>