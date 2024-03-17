import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react"
import EventListAttendee from "./EventListAttendee"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../../app/store/hooks"
import { deleteEvent } from "../eventSlice"


type Props = {
    data: AppEvent
}
const EventListItem = ({data}: Props) => {
    const dispatch = useAppDispatch();
  return (
    <SegmentGroup>
        <Segment>
            <ItemGroup>
                <Item>
                    <Item.Image size="tiny" circular src={data.hostPhotoURL} />
                    <Item.Content>
                        <Item.Header>{data.title}</Item.Header>
                        <Item.Description>Hosted by {data.hostedBy}</Item.Description>
                    </Item.Content>
                </Item>
            </ItemGroup>
        </Segment>
        <Segment>
            <span>
                <Icon name="clock" /> {data.date} 
                <Icon name="marker" /> {data.venue}
            </span>
        </Segment>
        <Segment secondary>
            <List horizontal>
                {
                    data.attendees.map((value) => (
                        <EventListAttendee key={value.id} attendee={value}/>
                    ))
                }
            </List>
        </Segment>
        <Segment clearing>
            <span>{data.description}</span>
            <Button color="red" floated="right" content='Delete' onClick={()=>dispatch(deleteEvent(data.id))} />
            <Button as={Link} to={`/events/${data.id}`} color="teal" floated="right" content="View" />
        </Segment>
    </SegmentGroup>
  )
}
export default EventListItem