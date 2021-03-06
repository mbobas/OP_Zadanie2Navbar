import Navbar from 'components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import {theme} from 'theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar />
    </ThemeProvider>
   
  );
}

export default App;
