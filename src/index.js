import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Home from "./Pages/Home";

const App = () => {
    return(
        <div>
            <Home/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)