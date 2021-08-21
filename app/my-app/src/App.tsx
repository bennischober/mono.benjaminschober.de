import React from 'react';
import './App.css';
import styled from "styled-components";
import tw from "twin.macro";
import {HomePage} from "./app/containers/HomePage";
import {backgroundColor, textColor} from "./themes";
import {Provider} from 'react-redux';
import store from "./app/store/store"
import DarkThemeProvider from "./app/store/provider"



const AppContainer = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
  ${tw`
    w-full
    h-full
    flex
    flex-col
`}`;

function App() {

    return (
        <Provider store={store}>
            <DarkThemeProvider>
                <AppContainer>
                    <HomePage/>
                </AppContainer>
            </DarkThemeProvider>
        </Provider>);
}

export default App;
