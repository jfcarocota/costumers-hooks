import { Container, Grid, Paper, TextField } from '@material-ui/core';
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { costumerSelect, costumerStartFetchById } from "../../redux";

const CostumerSelectedView = ()=> {

  const dispatch = useDispatch();
  const costumerSelected = useSelector(({costumers}) => costumers.costumerSelected);

  useEffect(()=>{
    const costumerInfo = JSON.parse(sessionStorage.getItem(process.env.REACT_APP_COSTUMER_KEY));
    dispatch(costumerSelect(costumerInfo.costumerId));
    dispatch(costumerStartFetchById(costumerSelected));
    //console.log(costumerSelected);
  }, [costumerSelected, dispatch]);

  return (
    <div>
      <Container maxWidth='md'>
        <Paper elevation={3}>
          <Container maxWidth='lg'>
            <h3>Datos básicos</h3>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                required
                fullWidth
                margin='normal'
                id="standard-required"
                label="Nombre Completo"
                variant="outlined"
                defaultValue='name'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                required
                fullWidth
                margin='normal'
                id="standard-required"
                label="Correo electrónico"
                variant="outlined"
                type='email'
                autoComplete="email"
                defaultValue='email'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                required
                fullWidth
                margin='normal'
                id="standard-required"
                label="Teléfono"
                variant="outlined"
                type='text'
                autoComplete="phone"
                defaultValue='0000000000'
                />
              </Grid>
            </Grid>
            <h3>Datos de paquetería</h3>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                required
                fullWidth
                margin='normal'
                id="standard-required"
                label="Usuario"
                variant="outlined"
                type='email'
                autoComplete="email"
                defaultValue='usuario paquetería'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                required
                fullWidth
                margin='normal'
                id="standard-required"
                label="Contraseña"
                variant="outlined"
                type='text'
                autoComplete="password"
                defaultValue='contraseña paquetería'
                />
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Container>
    </div>
  )
}

export default CostumerSelectedView;
