import { ChangeEvent, useState } from "react"
import { Button, Form, Header, Segment } from "semantic-ui-react"


const EventForm = () => {
    const initialValue = {
        title: "",
        date: "",
        category: '',
        description: '',
        city: '',
        venue: ''
    }
    const [values, setValues] = useState(initialValue);
    function onSubmit() {
        console.log("submitted");
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const {name,value} = e.target;
        setValues({...values, [name]:value});
    }
  return (
    <Segment clearing>
        <Header content='Create Event' />
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