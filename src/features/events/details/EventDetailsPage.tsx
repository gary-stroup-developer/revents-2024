import { Grid, GridColumn } from "semantic-ui-react"
import EventDetailHeader from "./EventDetailHeader"
import EventDetailedInfo from "./EventDetailedInfo"
import EventDetailedChat from "./EventDetailedChat"
import EventDetailedSidebar from "./EventDetailedSidebar"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks"
import { useEffect, useState } from "react"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../../../app/config/firebase"
import { setEvents } from "../eventSlice"
import { toast } from "react-toastify"
import LoadingComponent from "../../../app/layout/LoadingComponent"

const EventDetailsPage = () => {
  const {id} = useParams();
  const event = useAppSelector(state => state.events.events.find(evt => evt.id === id));
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const unsubscribe = onSnapshot(doc(db, 'events', id), {
      next: doc => {
        dispatch(setEvents({id: doc.id,...doc.data()}));
        setLoading(false);
      },
      error: err => {
        console.log(err);
        toast.error(err.message);
        setLoading(false);
      }
    })
    return () => unsubscribe();
  }, [id, dispatch])
  
  if(loading) return <LoadingComponent />

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