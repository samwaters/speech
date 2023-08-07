import { Box, Divider } from "@mui/material";
import { Reader } from "./reader.tsx";
import { Editor } from "./editor.tsx";

export const Pane = () => {
	return <Box sx={{
		flexDirection: "column",
		display: "flex",
		gap: "10px",
		padding: "10px",
	}}>
		<Reader />
		<Divider />
		<Editor />
	</Box>
}
