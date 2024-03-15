import { AppEvent } from "../../../app/types/types"
import EventListItem from "./EventListItem"

type Props = {
  data: AppEvent[]
}
const EventList = ({data}: Props) => {
  return (
    <>
    {
      data.map((appEvent)=>{
        return <EventListItem key={appEvent.id} data={appEvent} />
      })
    }
    </>
  )
}
export default EventList