import { Image, List } from "semantic-ui-react"
import { Attendee } from "../../../app/types/types"

type Props = {
  attendee: Attendee
}
const EventListAttendee = ({attendee}: Props) => {
  return (
    <List.Item>
        <Image size="mini" avatar src={attendee.photoURL}/>
    </List.Item>
  )
}
export default EventListAttendee