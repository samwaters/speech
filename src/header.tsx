import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";

export const Header = () => {
	return <AppBar position="static">
		<Toolbar>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				Speech Synthesis
			</Typography>
			<Avatar />
		</Toolbar>
	</AppBar>
}
