<template>
    <div class="todo-list" v-show="todos.length > 0">
        <!-- Todo Item -->
        <!-- Use :todo to send data to child component -->
        <TodoItem 
            :todo="todo" 
            v-for="todo in todos" 
            :key="todo.id" 
            :toggletodo="toggletodo"
            :deletetodo="deletetodo"
        />
    </div>
</template>

<script>
    import TodoItem  from './TodoItem.vue'
    export default {
        name: 'TodoList',
        components: {TodoItem},
        // Use 'props' to receive the todo item object from parent component: App.vue
        props: ['todos', 'toggletodo', 'deletetodo'],
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