import { NavLink } from "react-router-dom"
import { Button, Container, Menu, MenuItem } from "semantic-ui-react"
import SignedInMenu from "./SignedInMenu"
import SignedOutButtons from "./SignedOutButtons"
import { useAppSelector } from "../../store/hooks"
import { sampleData } from "../../../assets/Snippets/sampleData"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../../config/firebase"

const NavBar = () => {
    const {authenticated} = useAppSelector(state => state.auth);

    function seedData() {
        sampleData.forEach(async (event) => {
            const {id, ...rest} = event;
            await setDoc(doc(db, 'events', id), {
                ...rest
            })
        })
    }

  return (
    <Menu inverted fixed="top">
        <Container>
            <MenuItem header as={NavLink} to="/">
                <img src="/logo.png" alt="logo" />
            </MenuItem>
            <MenuItem name='Events' as={NavLink} to="/events"/>
            <MenuItem>
                <Button as={NavLink} to="/createEvent" floated="right" positive inverted content='Create Event' />
            </MenuItem>
            {import.meta.env.DEV && (
                <MenuItem>
                    <Button inverted color="teal" content='Seed Data' onClick={seedData} />
                </MenuItem>
            )}
            {
                authenticated ? <SignedInMenu /> : <SignedOutButtons />
            }
            
        </Container>
    </Menu>
  )
}
export default NavBar