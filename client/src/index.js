import React from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import App from './App';

export const Context = React.createContext(null);
console.log(process.env.REACT_APP_API_URL)
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);




root.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
    }}>
        <App />
    </Context.Provider>
);
