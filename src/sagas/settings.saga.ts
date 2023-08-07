import { takeEvery } from "@redux-saga/core/effects"

import { setPitch, setRate, setVoiceId, setVolume } from "../store/settings.store"
import { PayloadAction } from "@reduxjs/toolkit";
import { Utterance } from "../utils/reader.ts";

function pitchChange(action: PayloadAction<number>) {
	Utterance.pitch = action.payload
}

function rateChange(action: PayloadAction<number>) {
	Utterance.rate = action.payload
}

function voiceIdChange(action: PayloadAction<number>) {
	console.log("VC", action.payload)
}

function volumeChange(action: PayloadAction<number>) {
	Utterance.volume = action.payload
}

export function* settingsSaga() {
	yield takeEvery(setPitch, pitchChange)
	yield takeEvery(setRate, rateChange)
	yield takeEvery(setVoiceId, voiceIdChange)
	yield takeEvery(setVolume, volumeChange)
}
