import { Grid } from "semantic-ui-react"
import EventList from "./EventList"
import EventForm from "../form/EventForm"
import { sampleData } from "../../../assets/Snippets/sampleData"
import { useEffect, useState } from "react"
import { AppEvent } from "../../../app/types/types"

type Props = {
  showForm: boolean
  setFormOpen: (value:boolean) => void
}

const EventDashboard = ({showForm, setFormOpen}:Props) =>{
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData); // TODO:
  }, [])
  

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList data={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {
          showForm && <EventForm setFormOpen={setFormOpen} />
        }
        
      </Grid.Column>
    </Grid>
  )
}

export default EventDashboard