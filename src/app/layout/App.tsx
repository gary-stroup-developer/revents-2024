import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/dashboard/EventDashboard'
import NavBar from './nav/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Container className='main'>
        <EventDashboard data='Gary Stroup' />
      </Container>
      
    </>
  )
}

export default App
