import React, { useState, useEffect } from 'react'
import { useLazyQuery, gql } from '@apollo/client'
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
import jwt from 'jsonwebtoken'
import { tryLogin } from '../redux';
import {connect} from 'react-redux'


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

const LOGIN = gql`
    query($email:String!, $password:String!){
        login(email: $email, password: $password){
            token
        }
    }
`;

const LoginForm = props => {

	const classes = useStyles();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [token, setToken] = useState('');
	const [loginError, setLoginError] = useState(false);

	const APP_KEY = 'CostumersApp.session';
	const onEmailChange = e => {
		setEmail(e.target.value);
	}

	const onPasswordChange = e => {
		setPassword(e.target.value);
	}

	const [checkLogin, { loading, data, error }] = useLazyQuery(LOGIN, {
		variables: { email, password },
		onCompleted: () => {
			if (data?.login?.token) {
				setToken(data.login.token);
			} else {
				setLoginError(true);
			}
		}
	});

	useEffect(() => {
		const storedSession = JSON.parse(localStorage.getItem(APP_KEY));
		if (storedSession) {
			setToken(storedSession.token);
			console.log("session exist");
		} else {
			console.log('not loged');
		}
	}, []);

	useEffect(() => {
		//console.log(token);
		try {
			const tokenData = jwt.verify(token, 'secret');
			if (tokenData) {
				localStorage.setItem(APP_KEY, JSON.stringify({ token, user: tokenData.email }));
			}
		} catch (error) {
			console.log(error.message);
			localStorage.removeItem(APP_KEY);
		}
		return ()=> console.log('component unmounted');
	}, [token]);

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
						onClick={props.tryLogin}
					>
						Iniciar sesión
            </Button>
						<div>{props.token}</div>
				</form>
			</div>
		</Container>
	)
}

const mapStateToProps = state =>{
	return {
		token: state.token
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		tryLogin: ()=> dispatch(tryLogin())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
