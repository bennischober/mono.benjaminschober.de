import React, {useEffect} from 'react';
import './App.css';
import {keepTheme} from "./utils/themes";
import {Navbar} from "./app/components/navbar";

function App() {
    useEffect(() => {
        keepTheme();
    })

    return (
        <div className="App">
            <Navbar />
        </div>
    );
}

export default App;
