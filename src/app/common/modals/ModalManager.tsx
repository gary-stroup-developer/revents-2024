import LoginForm from "../../../features/auth/LoginForm";
import { useAppSelector } from "../../store/hooks"
import TestModal from "./TestModal"



const ModalManager = () => {
    const modalLookup = {
        TestModal,
        LoginForm
    }
    const {type, data, open} = useAppSelector(state => state.modals);

    let renderedModal;

    if (open && type) {
        const ModalComponent = (modalLookup as any)[type];
        renderedModal = <ModalComponent data={data}/>
    }
  return (
    <div>{renderedModal}</div>
  )
}
export default ModalManager