import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Header, Segment } from "semantic-ui-react"
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { updateEvent } from "../eventSlice";
import { FieldValues, useForm } from "react-hook-form";



const EventForm = () => {

    let { id } = useParams();
    const event = useAppSelector(state => state.events.events.find(evt => evt.id === id));
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: 'onTouched'
    })


    function onSubmit(data: FieldValues) {
        dispatch(updateEvent({...event, ...data})) 
        navigate(`/events/${id}`);
    }

    return (
        <Segment clearing>
            <h3>{event ? '' : 'Data not properly loaded'}</h3>
            <Header content={'Event Details'} sub color="teal" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input 
                    placeholder="Event title"
                    defaultValue={event?.title}
                    {...register('title',{required: true})}
                    error={errors.title && 'Title is required'}
                />

                <Form.Input 
                    placeholder="Category"
                    defaultValue={event?.category}
                    {...register('category',{required: true})}
                    error={errors.category && 'Field is required'}
                />
                    
                <Form.TextArea 
                    placeholder="Description"
                    defaultValue={event?.description}
                    {...register('description',{required: true})}
                    error={errors.description && 'Field is required'}
                />
                <Header sub content='Location details' color="teal" />
                <Form.Input 
                    placeholder="City"
                    defaultValue={event?.city}
                    {...register('city',{required: true})}
                    error={errors.city && 'Field is required'}
                />
              
                <Form.Input 
                    placeholder="Venue"
                    defaultValue={event?.venue}
                    {...register('venue',{required: true})}
                    error={errors.venue && 'Field is required'}
                />
                    
                <Form.Input 
                    type='date'
                    placeholder="Date" 
                    defaultValue={event?.date}
                    {...register('date',{required: true})}
                    error={errors.date && 'Field is required'}
                />
                
                <Button loading={isSubmitting} disabled={!isValid} type="submit" floated="right" positive content="Submit" />
                <Button disabled={isSubmitting} type="button" floated="right" content="Cancel" />
            </Form>
          
        </Segment>
    )
}
export default EventForm