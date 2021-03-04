import React from 'react'

import {
	Button,
	MenuItem,
	Menu,
	Fade
} from '@material-ui/core'

const MenuBar = ()=> {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
				Menu
            </Button>
			<Menu
				id="fade-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				<MenuItem onClick={handleClose}>Buscar clientes</MenuItem>
				<MenuItem onClick={handleClose}>Registrar clientes</MenuItem>
				<MenuItem onClick={handleClose}>Buscar empleados</MenuItem>
				<MenuItem onClick={handleClose}>Registrar empleados</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</>
	)
}

export default MenuBar;
