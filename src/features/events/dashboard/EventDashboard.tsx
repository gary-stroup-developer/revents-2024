import { Grid } from "semantic-ui-react"
import EventList from "./EventList"
import { useAppSelector } from "../../../app/store/hooks"
import { useEffect} from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { actions } from "../eventSlice";
import { useFirestore } from "../../../app/hooks/firestore/useFirestore";


const EventDashboard = () =>{
  const {data: events, status} = useAppSelector(state => state.events);

  const {loadCollection} = useFirestore('events');

  useEffect(() => {
    loadCollection(actions)
  }, [loadCollection])
  
  if(status === 'loading') return <LoadingComponent />

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


