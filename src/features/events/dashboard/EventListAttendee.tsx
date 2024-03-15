import { Image, List } from "semantic-ui-react"

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