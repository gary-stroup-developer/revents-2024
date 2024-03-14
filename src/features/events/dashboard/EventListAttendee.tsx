import { Image, List } from "semantic-ui-react"

type Props = {}
const EventListAttendee = (props: Props) => {
  return (
    <List.Item>
        <Image size="mini" avatar src="/user.png"/>
    </List.Item>
  )
}
export default EventListAttendee