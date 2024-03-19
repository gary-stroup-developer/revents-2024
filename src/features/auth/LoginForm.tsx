import { Button, Form } from "semantic-ui-react"
import ModalWrapper from "../../app/common/modals/ModalWrapper"
import { FieldValues, useForm } from "react-hook-form"
import { useAppDispatch } from "../../app/store/hooks";
import { closeModal } from "../../app/common/modals/modalsSlice";
import { signIn } from "./authSlice";

const LoginForm = () => {
    const { register, handleSubmit, formState: { isSubmitting, isValid, isDirty, errors } } = useForm({
        mode: 'onTouched'
    });

    const dispatch = useAppDispatch();

    function onSubmit(data: FieldValues) {
        dispatch(signIn(data));
        dispatch(closeModal());
    }
    return (
        <ModalWrapper header='Sign into re-vents'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input
                    defaultValue=''
                    placeholder='Email address'
                    {...register('email', { required: true, pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                    error={
                        errors.email?.type === 'required' && 'Email is required' ||
                        errors.email?.type === 'pattern' && 'Invalid email format'
                    }
                />
                <Form.Input
                    type='password'
                    defaultValue=''
                    placeholder='Enter password'
                    {...register('password', { required: true })}
                    error={errors.password && 'Password is required'}
                />
                <Button
                    loading={isSubmitting}
                    disabled={!isValid || !isDirty || isSubmitting}
                    type="submit" 
                    fluid
                    size="large"
                    color="teal"
                    content="Login"
                />
            </Form>
        </ModalWrapper>
    )
}
export default LoginForm