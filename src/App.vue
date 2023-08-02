<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <h1 class="todo-header">My Todos</h1>
        <!-- Todo Header -->
        <!-- 1. Pass function to child component -->
        <!-- <TodoHeader :addtodo="addtodo"/> -->
        <!-- 2. Use @ to convert addtodo as a custom event -->
        <TodoHeader @addtodo="addtodo"/>
        <!-- Todo List -->
        <!-- Pass array to child component -->
        <!-- 1. Pass functions toggletodo and deletetodo to child component -->
        <TodoList :todos="todos" :toggletodo="toggletodo" :deletetodo="deletetodo"/>
        <!-- Todo Footer -->
        <!-- 1. Pass functions checkAllTodo and clearAllDone to child component -->
        <!-- <TodoFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllDone="clearAllDone"/> -->
        <!-- 2. Use @ to convert addtodo as a custom event -->
        <TodoFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllDone="clearAllDone"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {TodoHeader, TodoFooter, TodoList},
  data() {
      return {
          todos: JSON.parse(localStorage.getItem('todos')) || []
      }
  },
  methods: {
    // Receive data from child components
    addtodo (todo) {
      // Add new todo as the first todo in todo list array
      this.todos.unshift(todo)
    },
    // Tick or untick the todo
    toggletodo (id) {
      this.todos.map(todo => {
        // Update the todo status for the todo with target id
        if(todo.id === id) todo.done = !todo.done;
      });
    },
    // Delete the todo
    deletetodo (id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    // select all or unselect all
    checkAllTodo (done) {
      this.todos.map(todo => todo.done = done);
    },
    // Clear all done
    clearAllDone () {
      this.todos = this.todos.filter(todo => !todo.done);
    }
  },
  // Simple version for watch only detect the first level, so when we change the status of todo, it can't be detected
  // We need to use deep watch
  // watch: {
  //   todos(value) {
  //     localStorage.setItem('todos', JSON.stringify(value));
  //   }
  // }

  // Deep watch: use handler to detect the changes. Every changed data in the todo array can be detected
  watch: {
    todos: {
      deep: true, // deep watch
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value));
      }
    }
  }
}
</script>

<style>
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .todo-header {
    text-align: center;
  }
</style>
