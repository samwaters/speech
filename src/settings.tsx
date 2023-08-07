import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	MenuItem,
	Select,
	SelectChangeEvent,
	Slider,
	Typography
} from "@mui/material";
import { useVoiceProvider } from "./provider.tsx";
import { useDispatch, useSelector } from "react-redux";
import {
	getPitch,
	getRate,
	getVoiceId,
	getVolume,
	setPitch,
	setRate,
	setVoiceId,
	setVolume
} from "./store/settings.store.ts";

export const Settings = () => {
	const dispatch = useDispatch()
	const { setVoices, voices } = useVoiceProvider()

	const handlePitchChange = (_e: Event, v: number | number[]) => {
		dispatch(setPitch(typeof v === "number" ? v : v[0]))
	}

	const handleRateChange = (_e: Event, v: number | number[]) => {
		dispatch(setRate(typeof v === "number" ? v : v[0]))
	}

	const handleReloadVoices = () => {
		setVoices(window.speechSynthesis.getVoices())
	}

	const handleVoiceChange = (e: SelectChangeEvent) => {
		dispatch(setVoiceId(parseInt(e.target.value)))
	}

	const handleVolumeChange = (_e: Event, v: number | number[]) => {
		dispatch(setVolume(typeof v === "number" ? v : v[0]))
	}

	const pitch = useSelector(getPitch)
	const rate = useSelector(getRate)
	const voiceId = useSelector(getVoiceId)
	const volume = useSelector(getVolume)

	return <Box sx={{ paddingTop: "10px" }}>
		<Card variant="outlined">
			<CardContent>
				<Box sx={{ padding: "10px 0" }}>
					<Typography variant="h6" component="div">Voice</Typography>
					<Select label="Selected Voice" onChange={handleVoiceChange} value={"" + voiceId}>
						{voices.map((voice, idx) => <MenuItem key={voice.voiceURI} value={idx}>
							{voice.name} ({voice.lang})
						</MenuItem>)}
					</Select>
					<Button onClick={handleReloadVoices} sx={{ marginTop: "10px" }} variant="contained">Reload Voices</Button>
				</Box>
				<Divider />
				<Box sx={{ padding: "10px 0" }}>
					<Typography variant="h6" component="div">Pitch</Typography>
					<Slider valueLabelDisplay="auto" min={0} max={2} onChange={handlePitchChange} step={0.1} value={pitch} />
					<Typography variant="h6" component="div">Rate</Typography>
					<Slider valueLabelDisplay="auto" min={0.1} max={5} onChange={handleRateChange} step={0.1} value={rate} />
					<Typography variant="h6" component="div">Volume</Typography>
					<Slider valueLabelDisplay="auto" min={0} max={1} onChange={handleVolumeChange} step={0.1} value={volume} />
				</Box>
			</CardContent>
		</Card>
	</Box>
}
