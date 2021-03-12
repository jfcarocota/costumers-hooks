import React, { useState } from 'react';
import {
	makeStyles,
	TextField,
	Container,
	CssBaseline,
	Button,
	Avatar,
	CircularProgress
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { fetchLogin } from '../redux';
import {useDispatch, useSelector} from 'react-redux';


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const LoginForm = () => {

	const classes = useStyles();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const loginError = useSelector(({auth}) => auth.error)

	const onEmailChange = ({target}) => setEmail(target.value);

	const onPasswordChange = ({target}) => setPassword(target.value);

	const checkLogin = ()=> dispatch(fetchLogin(email, password));

	/*if (loading) return (
		<Container component="main" maxWidth="xs">
			<CircularProgress />
		</Container>
	);*/

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
        </Typography>
				<form className={classes.form}>
					<TextField
						value={email}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Correo electrónico"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={onEmailChange}
					/>
					<TextField
						value={password}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Contraseña"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={onPasswordChange}
					/>
					{loginError && (<Alert severity="error">Credenciales incorrectas</Alert>)}
					<Button
						size="large"
						fullWidth
						variant="outlined"
						color="default"
						className={classes.submit}
						onClick={checkLogin}
					>
						Iniciar sesión
            </Button>
				</form>
			</div>
		</Container>
	)
}

export default LoginForm;
