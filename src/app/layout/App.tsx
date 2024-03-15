import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/dashboard/EventDashboard'
import NavBar from './nav/NavBar'
import { useState } from 'react'

function App() {
  const [formOpen, setFormOpen] = useState<boolean>(false);

  
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard showForm={formOpen} setFormOpen={setFormOpen} />
      </Container>
      
    </>
  )
}

export default App
