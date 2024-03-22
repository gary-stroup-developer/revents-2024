import { Grid } from "semantic-ui-react"
import EventList from "./EventList"
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks"
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../app/config/firebase";
import { setEvents } from "../eventSlice";
import { AppEvent } from "../../../types";
import LoadingComponent from "../../../app/layout/LoadingComponent";


const EventDashboard = () =>{
  const {events} = useAppSelector(state => state.events);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db,'events'));
    const unsubscribe = onSnapshot(q,{
      next: querySnapshot => {
        const evts: AppEvent[] = [];
        querySnapshot.forEach(doc => {
          evts.push({id: doc.id, ...doc.data()} as AppEvent)
        })
        dispatch(setEvents(evts));
        setLoading(false);
      },
      error: err => {
        console.log(err);
        setLoading(false);
      },
      complete: () => console.log('never will see this because the snapshot stream is never ending')
    });
    //cancels the onSnapshot listener aka ends the stream
    return () => unsubscribe()
  }, [dispatch])
  
  if(loading) return <LoadingComponent />

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


