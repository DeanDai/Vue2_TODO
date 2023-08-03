<template>
    <div class="todo-list" v-show="todos.length > 0">
        <!-- Todo Item -->
        <!-- Use :todo to send data to child component -->
        <TodoItem 
            :todo="todo" 
            v-for="todo in todos" 
            :key="todo.id" 
        />
    </div>
</template>

<script>
    import TodoItem  from './TodoItem.vue'
    export default {
        name: 'TodoList',
        components: {TodoItem},
        // 1. Use 'props' to receive the todo item object from parent component: App.vue
        // props: ['todos', 'toggletodo', 'deletetodo'],
        // 2. Remove the 'toggletodo', 'deletetodo' from props as we are using global event bus
        props: ['todos'],
    }
</script>

<style>
    .todo-list {
        margin: 1em 0;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>