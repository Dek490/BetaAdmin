import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1E8449',
//       // light: will be calculated from palette.primary.main,
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     error:{
//             main :"#E50F0C",
//             warning:"#E75E06"
//           },
//     secondary: {
//       main: '#E0C2FF',
//       light: '#F5EBFF',
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: '#47008F',
//     },
//   },
// });

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E8449',    
      dark:'#145A32',
      light:"#E9F7EF"
    },    
    error:{
      main:"#E50F0C",
      warning:"#E75E06",
      dark:'#145A32',
    }
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   

   <ThemeProvider theme={theme}>
    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
