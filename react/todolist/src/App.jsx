import { Component } from "react";
import TodosForm from "./components/TodosForm";
import TodosList from "./components/TodosList";
// es6 js适合大型企业级开发 模块化 es6 module
// class ectends super static 传统面向对象的能力
class App extends Component {

    constructor(props) {
        super(props);   // 调用父类的构造函数
        // 私有数据 声明自己的属性
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        this.state = {
            todos: savedTodos
        }
    }

    // 修改状态
    addTodo = (text) => {
        // Component 上有setState， 修改状态，响应式更新
        // 状态就如纸巾
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    text,
                    completed: false
                }
            ]
        })
    }

    // 删除,数据编程
    deleteTodo = (index) => {
        // 删除
        const newTodos = [...this.state.todos];
        newTodos.splice(index, 1); // 删除某项，修改原数组
        this.setState({
            todos: newTodos
        })

    }

    toggleTodo = (index) => {
        // 修改状态
        const newTodos = [...this.state.todos];
        newTodos[index].completed = !newTodos[index].completed;
        this.setState({
            todos: newTodos
        })
    }

    editTodo = (index, newText) => {
        const newTodos = [...this.state.todos];
        newTodos[index].newText = newText;
        this.setState({
            todos: newTodos
        })
    }

    componentDidUpdate() { //生命周期
        // console.log("componentDidUpdate");
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }

    // 抽象方法 abstract function
    // 界面不一样的，重写
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <div>
                    <TodosForm addTodo={this.addTodo}>TodosForm</TodosForm>
                    <TodosList todos = {this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} toggleTodo={this.toggleTodo}>TodosList</TodosList>
                </div>
            </div>
        );
    }
}

export default App;  // 向外导出