import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react"
import EventListAttendee from "./EventListAttendee"
import { Link } from "react-router-dom"
import { AppEvent } from "../../../types"
import { useState } from "react"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../../app/config/firebase"
import { toast } from "react-toastify"


type Props = {
    data: AppEvent
}
const EventListItem = ({ data }: Props) => {
    const [loading, setLoading] = useState(false);

    async function removeEvent() {
        setLoading(true);
        try {
            await deleteDoc(doc(db, 'events', data.id));

        } catch (error: any) {
            console.log(error);
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    }

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
                            <EventListAttendee key={value.id} attendee={value} />
                        ))
                    }
                </List>
            </Segment>
            <Segment clearing>
                <span>{data.description}</span>
                <Button loading={loading} color="red" floated="right" content='Delete' onClick={removeEvent} />
                <Button as={Link} to={`/events/${data.id}`} color="teal" floated="right" content="View" />
            </Segment>
        </SegmentGroup>
    )
}
export default EventListItem