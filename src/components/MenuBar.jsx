import React from 'react';

import {
	Button,
	MenuItem,
	Menu,
	Fade
} from '@material-ui/core';
import { useDispatch} from 'react-redux';
import { tryLogout } from "../redux";

const MenuBar = ()=> {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const dispatch = useDispatch();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogOut = ()=> {
		setAnchorEl(null);
		dispatch(tryLogout())
	}

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
				<MenuItem onClick={handleLogOut}>Cerrar sesión</MenuItem>
			</Menu>
		</>
	)
}

export default MenuBar;
