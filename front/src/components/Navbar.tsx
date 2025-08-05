import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { MdLogin, MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function Navbar() {
  const [darkMode, setDarkMode] = React.useState(true);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : '#388adcff' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ks soccer
            </Typography>

            {/* Toggle Dark Mode */}
            <IconButton
              onClick={toggleDarkMode}
              color="inherit"
              aria-label="toggle dark mode"
            >
              {darkMode ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
            </IconButton>

            {/* Login Button */}
            <IconButton
              component={Link}
              to="/register"
              color="inherit"
              aria-label="login"
            >
              <MdLogin size={24} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
