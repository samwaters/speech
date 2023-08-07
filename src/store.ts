import createSagaMiddleware from "@redux-saga/core"
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

import editorReducer from "./store/editor.store"
import settingsReducer from "./store/settings.store"

export const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: false,
		}).concat(sagaMiddleware, logger),
	reducer: {
		editor: editorReducer,
		settings: settingsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
