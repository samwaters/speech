import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { Reset } from "styled-reset"
import { App } from './App.tsx'
import { VoiceProvider } from "./provider.tsx";
import { rootSaga } from "./sagas";
import { sagaMiddleware, store } from "./store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Reset />
    <Provider store={store}>
      <VoiceProvider>
        <App />
      </VoiceProvider>
    </Provider>
  </React.StrictMode>,
)

sagaMiddleware.run(rootSaga)
