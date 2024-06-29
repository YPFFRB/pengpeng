//函数组件
//返回的JSX才是组件
import './App.css'
import AppHeader from './components/AppHeader'

//函数组件
//返回JSX的才是组件
const App = (props) => {
    console.log(props);
  const name="涛哥"
    return (
        <div className="container">
            <AppHeader name={name}/>
        </div>
    )
}

export default App