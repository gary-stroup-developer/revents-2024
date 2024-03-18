import { useNavigate} from "react-router-dom"
import { Button, Form, Header, Segment } from "semantic-ui-react"
import { useAppDispatch } from "../../../app/store/hooks";
import { createEvent} from "../eventSlice";
import { createId } from "@paralleldrive/cuid2";
import { FieldValues, useForm } from "react-hook-form";

const CreateForm = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: 'onTouched'
    })


    function onSubmit(data: FieldValues) {
        const id = createId();
        dispatch(createEvent({...data, id, hostedBy:'Gary', attendees:[], hostPhotoURL:'https://randomuser.me/api/portraits/men/20.jpg'}));
        navigate(`/events/${id}`);
    }
  return (
    <Segment clearing>
            <Header content={'Create Event'} />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input 
                    placeholder="Event title"
                    defaultValue={''}
                    {...register('title',{required: true})}
                    error={errors.title && 'Title is required'}
                />

                <Form.Input 
                    placeholder="Category"
                    defaultValue={''}
                    {...register('category',{required: true})}
                    error={errors.category && 'Field is required'}
                />
                    
                <Form.Input 
                    placeholder="Description"
                    defaultValue={''}
                    {...register('description',{required: true})}
                    error={errors.description && 'Field is required'}
                />
        
                <Form.Input 
                    placeholder="City"
                    defaultValue={''}
                    {...register('city',{required: true})}
                    error={errors.city && 'Field is required'}
                />
              
                <Form.Input 
                    placeholder="Venue"
                    defaultValue={''}
                    {...register('venue',{required: true})}
                    error={errors.venue && 'Field is required'}
                />
                    
                <Form.Input 
                    type='date'
                    placeholder="Date" 
                    defaultValue={''}
                    {...register('date',{required: true})}
                    error={errors.date && 'Field is required'}
                />
                
                <Button loading={isSubmitting} disabled={!isValid} type="submit" floated="right" positive content="Submit" />
                <Button disabled={isSubmitting} type="button" floated="right" content="Cancel" />
            </Form>
        </Segment>
  )
}
export default CreateForm