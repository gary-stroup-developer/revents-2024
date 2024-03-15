import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react"
import EventListAttendee from "./EventListAttendee"
import { AppEvent } from "../../../app/types/types"

type Props = {
    data: AppEvent
}
const EventListItem = ({data}: Props) => {
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
            <Button color="teal" floated="right" content="view" />
        </Segment>
    </SegmentGroup>
  )
}
export default EventListItem