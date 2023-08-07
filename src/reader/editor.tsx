import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getText, updateText } from "../store/editor.store.ts";

export const Editor = () => {
	const dispatch = useDispatch()
	const text = useSelector(getText)

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		dispatch(updateText(e.target.value))
	}

	return <TextField
		maxRows={10}
		multiline
		onChange={handleChange}
		value={text}
	/>
}
