import { Grid, GridColumn } from "semantic-ui-react"
import EventDetailHeader from "./EventDetailHeader"
import EventDetailedInfo from "./EventDetailedInfo"
import EventDetailedChat from "./EventDetailedChat"
import EventDetailedSidebar from "./EventDetailedSidebar"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../../app/store/hooks"
import { useEffect } from "react"
import LoadingComponent from "../../../app/layout/LoadingComponent"
import { actions } from "../eventSlice"
import { useFirestore } from "../../../app/hooks/firestore/useFirestore"

const EventDetailsPage = () => {
  const { id } = useParams();
  const event = useAppSelector(state => state.events.data.find((evt) => evt.id === id));
  const { status } = useAppSelector(state => state.events);
  const { loadDocument } = useFirestore('events');

  useEffect(() => {
    if (!id) return;
    loadDocument(id, actions)
  }, [id, loadDocument])

  if (status === 'loading') return <LoadingComponent />

  if (!event) return <div>No such event</div>;

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