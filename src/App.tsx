import './App.css';
import { Main } from './components/main.component'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { customTheme } from './configs/themes';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Container className='app-container' centerContent>
        <Main></Main>
      </Container>
    </ChakraProvider>
  );
}

export default App;
