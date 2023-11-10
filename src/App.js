import React, { useState } from 'react';

import JokeList from './components/JokeList';
import './App.css';

function App() {
    const [joks, setJoks] = useState([]);

    async function fetchJokesHandler() {
        const response = await fetch(
            'https://official-joke-api.appspot.com/random_ten'
        );
        const data = await response.json();
        setJoks(data);
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchJokesHandler}>Fetch Jokes</button>
            </section>
            <section>
                <JokeList jokes={joks} />
            </section>
        </React.Fragment>
    );
}

export default App;
