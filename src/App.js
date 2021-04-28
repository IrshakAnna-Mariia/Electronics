import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Menu from './components/Menu'
import {Provider} from "react-redux";
import {createStore} from "redux";
import GameStore from "./store/reducers";
import Game from "./components/Game";
import Settings from "./components/Settings";
import Exit from "./components/Exit";

export const store = createStore(GameStore)

export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <section>
                    <Route exact path="/">
                        <Menu/>
                    </Route>
                    <Route exact path="/game">
                        <div className='menu'><Game/></div>
                    </Route>
                    <Route exact path="/settings">
                        <Settings/>
                    </Route>
                    <Route exact path="/exit">
                        <Exit/>
                    </Route>
                </section>
            </Provider>
        </BrowserRouter>
    )
}