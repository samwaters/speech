import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store.ts";

export interface SettingsState {
	pitch: number,
	rate: number,
	voiceId: number,
	volume: number
}

const initialState: SettingsState = {
	pitch: 1,
	rate: 1,
	voiceId: 0,
	volume: 1,
}

const SettingsSlice = createSlice({
	initialState,
	name: "settings",
	reducers: {
		setPitch: (state, action: PayloadAction<number>) => {
			state.pitch = action.payload
		},
		setRate: (state, action: PayloadAction<number>) => {
			state.rate = action.payload
		},
		setVoiceId: (state, action: PayloadAction<number>) => {
			state.voiceId = action.payload
		},
		setVolume: (state, action: PayloadAction<number>) => {
			state.volume = action.payload
		}
	},
})

export const getPitch = (state: RootState) => state.settings.pitch
export const getRate = (state: RootState) => state.settings.rate
export const getVoiceId = (state: RootState) => state.settings.voiceId
export const getVolume = (state: RootState) => state.settings.volume

export const { setPitch, setRate, setVoiceId, setVolume } = SettingsSlice.actions
export default SettingsSlice.reducer
