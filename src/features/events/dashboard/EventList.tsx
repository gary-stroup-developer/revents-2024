import { AppEvent } from "../../../types"
import EventListItem from "./EventListItem"

type Props = {
  data: AppEvent[],
}
const EventList = ({data}: Props) => {
  return (
    <>
    {
      data ?
      data.map((appEvent)=>{
        return <EventListItem key={appEvent.id} data={appEvent} />
      })
      : <h3>No Events to Display!</h3>
    }
    </>
  )
}
export default EventList