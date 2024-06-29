import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
//根节点 Vue React 功能大的挂载点

//react 在哪个范围生效
const root=ReactDOM.createRoot(

    document.getElementById('root')
)


// const App=<h1>hello world</h1>
// const App =React.createElement('h1',
//  { id:'title',className:'tit'},
//  'hello world')

// const App = React.createElement('div',{className:'container'},
//  React.createElement("h1",{className:'title'},'hello world')

// )


//react JSX
// 在js里面写 xml(html)
// const App =(<div className='container'>
//  <h1 className='title'>
//  涛哥
//  </h1>

// </div>)

root.render(<div><App name="牛哥" /></div>)

