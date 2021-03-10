import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client'
import { LOGIN_QUERY } from "../graphql/queries";
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
import { tryLogin } from '../redux';
import {useDispatch} from 'react-redux';


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
	const [loginError, setLoginError] = useState(false);

	//const authenticated = useSelector(({auth}) => auth.authenticated);
	const dispatch = useDispatch();

	const onEmailChange = e => setEmail(e.target.value);

	const onPasswordChange = e => setPassword(e.target.value);

	const [checkLogin, { loading, data, error }] = useLazyQuery(LOGIN_QUERY, {
		variables: { email, password },
		onCompleted: () => {
			if (data?.login?.token) {
				dispatch(tryLogin(data.login.token));
			} else {
				setLoginError(true);
			}
		}
	});

	/*useEffect(() => {
		//console.log(token);
		try {
			const tokenData = jwt.verify(token, process.env.REACP_APP_TOKEN_KEY);
			if (tokenData) {
				localStorage.setItem(process.env.REACT_APP_APP_KEY, JSON.stringify({ token, user: tokenData.email }));
			}
		} catch (error) {
			console.log(error.message);
			localStorage.removeItem(process.env.REACT_APP_APP_KEY);
		}
		return ()=> console.log('component unmounted');
	}, [token]);*/

	if (loading) return (
		<Container component="main" maxWidth="xs">
			<CircularProgress />
		</Container>
	);

	if (error) {
		console.log(error.message);
	}

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
