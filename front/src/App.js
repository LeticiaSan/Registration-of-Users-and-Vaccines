import './App.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@material-ui/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
/*import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';*/

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
  white: {
      main: '#0971f1',
      contrastText: 'white',
    },
  },
});

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
const vacinas = [
  { label: 'Gripe H1N1', year: 1994 },
  { label: 'Gripe H1N2', year: 1972 },
  { label: 'Febre amarela', year: 1972 },
  { label: 'Hepatite B', year: 1972 }];

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
    
      </header>
      <div className="Form">
        <h2>Cadastro de Vacinas</h2>
        <ThemeProvider theme={theme}>
          <Stack spacing={2} direction="row">
            <Button color="white" variant="contained">Logout</Button>
            <Button color="white" variant="contained">Registro</Button>
            <Button color="white" variant="contained">Seus dados</Button>
          </Stack>
        </ThemeProvider>
        <h3>Registro</h3>
        <Autocomplete
          theme={theme}
          disablePortal
          color="white"
          /*className={classes.root}
          id="combo-box-demo"*/
          options={vacinas}
          sx={{ width: 300,height: 80}}
          renderInput={(params) => <TextField {...params} label="Vacina" />}
        />
        <ThemeProvider theme={theme}>
          <Stack spacing={2} direction="row">
            <Button color="white" variant="contained">Criar</Button>
            <Button color="white" variant="contained">Limpar</Button>
          </Stack>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
