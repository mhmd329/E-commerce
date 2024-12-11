import { Container } from 'react-bootstrap';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Store } from './components/Store';
import { Navbar } from './components/Navbar';
import './components/style.css'
function App() {
  return (
    <>
    <Navbar/>
  <Container className='mb-4'>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Store' element={<Store/>}/>
<Route path='/About' element={<About/>}/>
</Routes>
  </Container>
  </>
  )
}

export default App;
