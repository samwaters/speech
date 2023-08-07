import { useDispatch, useSelector } from "react-redux";
import { getReadingStatus, getText, setReadingStatus } from "../store/editor.store.ts";
import { Box, Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { getPitch, getRate, getVoiceId } from "../store/settings.store.ts";
import { useVoiceProvider } from "../provider.tsx";
import { startReading, Synthesis } from "../utils/reader.ts";

export const Reader = () => {
	const dispatch = useDispatch()
	const pitch = useSelector(getPitch)
	const rate = useSelector(getRate)
	const text = useSelector(getText)
	const ref = useRef<HTMLDivElement>()
	const readingStatus = useSelector(getReadingStatus)
	const voiceId = useSelector(getVoiceId)
	const { voices } = useVoiceProvider()

	useEffect(() => {
		if(!ref.current) return
		ref.current.innerHTML = text
	}, [ref, text])

	useEffect(() => {
		if(!ref.current || !voices[voiceId]) return
		if(readingStatus === "ready") {
			Synthesis.cancel()
		} else if(readingStatus === "paused") {
			Synthesis.pause()
		} else {
			if(Synthesis.paused) {
				Synthesis.resume()
			} else {
				startReading(ref.current!, pitch, rate, voices[voiceId])
			}
		}
	}, [readingStatus])

	const handleRead = () => {
		dispatch(setReadingStatus(readingStatus !== "reading" ? "reading" : "paused"))
	}

	const handleStop = () => {
		dispatch(setReadingStatus("ready"))
	}

	return <Box sx={{
		display: "flex",
		flexDirection: "column",
		gap: "10px"
	}}>
		<Box ref={ref} sx={{ maxHeight: "200px", overflowY: "scroll"}}></Box>
		<Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
			<Button onClick={handleRead} variant="contained">{readingStatus === "paused" ? "Resume" : readingStatus === "ready" ? "Read" : "Pause"}</Button>
			<Button onClick={handleStop} disabled={readingStatus === "ready"} variant="contained">Stop</Button>
		</Box>
	</Box>
}
