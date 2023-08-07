import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store.ts";

export type ReadingStatus = "paused" | "reading" | "ready"

export interface EditorState {
	readingStatus: ReadingStatus
	text: string
}

const initialState: EditorState = {
	readingStatus: "ready",
	text: "<h1>Heading</h1>\n<p>This is a paragraph with a long sentence in it</p>\n<p>Now there's a table too</p>\n<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Column 1</th>\n\t\t\t<th>Column 2</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>Value 1</td>\n\t\t\t<td>Value 2</td>\n\t\t</tr>\n\t</tbody>\n</table>"
}

const EditorSlice = createSlice({
	initialState,
	name: "editor",
	reducers: {
		setReadingStatus: (state, action: PayloadAction<ReadingStatus>) => {
			state.readingStatus = action.payload
		},
		updateText: (state, action: PayloadAction<string>) => {
			state.text = action.payload
		}
	},
})

export const getReadingStatus = (state: RootState) => state.editor.readingStatus
export const getText = (state: RootState) => state.editor.text

export const { setReadingStatus, updateText } = EditorSlice.actions
export default EditorSlice.reducer
