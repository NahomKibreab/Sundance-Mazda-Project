import { createTheme } from '@mui/material/styles';
import { grey  } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: grey[500],
    },
  },
});

export default theme;