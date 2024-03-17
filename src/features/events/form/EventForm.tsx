import { ChangeEvent, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Header, Segment } from "semantic-ui-react"
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { createEvent, updateEvent } from "../eventSlice";
import { createId } from "@paralleldrive/cuid2";


const EventForm = () => {
    let { id } = useParams();
    const event = useAppSelector(state => state.events.events.find(evt => evt.id === id));
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const initialValue : AppEvent = event ?? {
        id:'',
        title: "",
        date: "",
        category: '',
        description: '',
        city: '',
        venue: '',
        hostedBy: '',
        hostPhotoURL: '',
        attendees:[]
    }

    const [values, setValues] = useState<AppEvent>(initialValue);

    
    function onSubmit() {
        id = id ??  createId();
        event ? dispatch(updateEvent({...event, ...values})) 
        : 
        dispatch(createEvent({...values, id, hostedBy:'Gary', attendees:[], hostPhotoURL:''}));
        navigate(`/events/${id}`);
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }
    return (
        <Segment clearing>
            <Header content={event ? 'Update Event' : 'Create Event'} />
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <input type="text" placeholder="Event title" value={values.title} name='title' onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category" value={values.category} name='category' onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description" value={values.description} name='description' onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City" value={values.city} name='city' onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue" value={values.venue} name='venue' onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Date" value={values.date} name='date' onChange={handleInputChange} />
                </Form.Field>
                <Button type="submit" floated="right" positive content="Submit" />
                <Button type="button" floated="right" content="Cancel" />
            </Form>
        </Segment>
    )
}
export default EventForm