import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Header, Segment } from "semantic-ui-react"
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { createEvent, updateEvent } from "../eventSlice";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { categoryOptions } from "./categoryOptions";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";
import { createId } from "@paralleldrive/cuid2";



const EventForm = () => {

    let { id } = useParams();
    const event = useAppSelector(state => state.events.events.find(evt => evt.id === id));
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { control, register, setValue, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: 'onTouched',
    })


    function onSubmit(data: FieldValues) {
        id = id ?? createId();
        event 
        ? dispatch(updateEvent({ ...event, ...data, date: data.date.toString() }))
        : dispatch(createEvent({ ...data, id, hostedBy: 'Gary', attendees: [], hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg', date: data.date.toString() }));
        navigate(`/events/${id}`);
    }

    return (
        <Segment clearing>
            <Header content={'Event Details'} sub color="teal" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input
                    placeholder="Event title"
                    defaultValue={event?.title || ''}
                    {...register('title', { required: true })}
                    error={errors.title && 'Title is required'}
                />
                <Controller
                    name='category'
                    control={control}
                    rules={{ required: 'Category is required' }}
                    defaultValue={event?.category || ''}
                    render={({ field }) => (
                        <Form.Select
                            options={categoryOptions}
                            placeholder="Category"
                            clearable
                            {...field}
                            onChange={(_, data) => setValue('category', data.value, { shouldValidate: true })}
                            error={errors.category && 'Field is required'}
                        />
                    )}
                />

                <Form.TextArea
                    placeholder="Description"
                    defaultValue={event?.description || ''}
                    {...register('description', { required: true })}
                    error={errors.description && 'Field is required'}
                />
                <Header sub content='Location details' color="teal" />
                <Form.Input
                    placeholder="City"
                    defaultValue={event?.city || ''}
                    {...register('city', { required: true })}
                    error={errors.city && 'Field is required'}
                />

                <Form.Input
                    placeholder="Venue"
                    defaultValue={event?.venue || ''}
                    {...register('venue', { required: true })}
                    error={errors.venue && 'Field is required'}
                />
                <Form.Field>
                    <Controller
                        name='date'
                        control={control}
                        rules={{ required: 'Date is required' }}
                        defaultValue={event && event.date || null}
                        render={({ field }) => (
                            <DatePicker
                            selected={field.value}
                            onChange={value => setValue('date',value,{shouldValidate:true})}
                            showTimeSelect
                            timeCaption="time"
                            dateFormat='MMM d, yyyy h:mm aa'
                            placeholderText="Event date and time"
                            />
                        )}
                    />
                </Form.Field>


                <Button loading={isSubmitting} disabled={!isValid} type="submit" floated="right" positive content="Submit" />
                <Button disabled={isSubmitting} type="button" floated="right" content="Cancel" />
            </Form>

        </Segment>
    )
}
export default EventForm