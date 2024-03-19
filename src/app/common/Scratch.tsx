import { Button } from "semantic-ui-react"
import { useAppDispatch } from "../store/hooks"
import { openModal } from "./modals/modalsSlice";

const Scratch = () => {
    const dispatch = useAppDispatch();
  return (
    <div>
        <h1>Scratch Page</h1>
        <Button
        onClick={() => dispatch(openModal({type: 'TestModal',data: 'Gary and Camille are friends....that\'\s it.'}))}
        color="teal" content="Open Modal"/>
    </div>
  )
}
export default Scratch