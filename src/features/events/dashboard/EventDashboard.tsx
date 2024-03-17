import { Grid } from "semantic-ui-react"
import EventList from "./EventList"
import { sampleData } from "../../../assets/Snippets/sampleData"
import { useEffect, useState } from "react"




const EventDashboard = () =>{
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
          <h2>Filter</h2>

      </Grid.Column>
    </Grid>
  )
}

export default EventDashboard