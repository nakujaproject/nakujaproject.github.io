import React from 'react'
import { render } from 'react-dom'
 
const App = () => {
    return (
        <div>
            <div>Hello React</div>
        </div>
    )
}
 
render(<App/>, document.querySelector('#app'))
