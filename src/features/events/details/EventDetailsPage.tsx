import { Grid, GridColumn } from "semantic-ui-react"
import EventDetailHeader from "./EventDetailHeader"
import EventDetailedInfo from "./EventDetailedInfo"
import EventDetailedChat from "./EventDetailedChat"
import EventDetailedSidebar from "./EventDetailedSidebar"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../../app/store/hooks"

const EventDetailsPage = () => {
  const {id} = useParams();
  const event = useAppSelector(state => state.events.events.find(evt => evt.id === id));

  if(!event) return  <div>No such event</div>;
  return (
    <Grid>
      <GridColumn width={10}>
        <EventDetailHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </GridColumn>
      <GridColumn width={6}>
        <EventDetailedSidebar />
      </GridColumn>
    </Grid>
  )
}
export default EventDetailsPage