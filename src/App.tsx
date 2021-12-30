import './App.css';
import {Main} from './components/main.component'
import { ChakraProvider, Container } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Container m="auto" maxW='100%' minW='100%' centerContent>
        <Main></Main>
      </Container>
    </ChakraProvider>
  );
}

export default App;
