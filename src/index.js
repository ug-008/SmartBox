import App from './App.js'
import * as React from 'react'
import * as ReactDom from 'react-dom/client';
ReactDom.createRoot(document.getElementById('root'))
        .render(
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        );