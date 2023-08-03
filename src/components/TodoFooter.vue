<template>
    <div class="todo-footer" v-show="total">
        <label for="">
            <!-- <input type="checkbox" :checked="bAllDone" @change="checkAll"> -->
            <input type="checkbox" v-model="bAllDone">
        </label>
        <span>
            <span>Done {{donetotal}}</span> / All {{total}}
        </span>
        <button class="btn btn-danger" @click="clearAllCompleted">Clear Done Todos</button>
    </div>
</template>

<script>
    export default {
        name: 'TodoFooter',
        // Receive the function from parent componenet: App.vue
        props: ['todos'],
        computed: {
            total () {
                return this.todos.length;
            },
            donetotal () {
                return this.todos.reduce((pre, todo) => {
                    return pre + (todo.done ? 1 : 0);
                }, 0);
            },
            // bAllDone() {
            //     return (this.total === this.donetotal) && (this.total > 0);
            // }
            bAllDone: {
                get() {
                    return (this.total === this.donetotal) && (this.total > 0);
                },
                set(value) {
                    // 1. Fire the callback function directly with value
                    // this.checkAllTodo(value);
                    // 2. Use $emit to fire custom event with parameter
                    this.$emit('checkAllTodo', value);
                }
            }
        },
        methods: {
            // checkAll(e) {
            //     this.checkAllTodo(e.target.checked)
            // }
            clearAllCompleted() {
                // 1. Fire the callback function directly
                // this.clearAllDone();
                // 2. Use $emit to fire custom event with parameter
                this.$emit('clearAllDone');
            }
        }
    }
</script>

<style scoped>
    .todo-footer {
        padding-left: 6px;
        overflow: hidden;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
    }
</style>