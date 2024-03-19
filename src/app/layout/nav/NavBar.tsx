import { NavLink } from "react-router-dom"
import { Button, Container, Menu, MenuItem } from "semantic-ui-react"
import SignedInMenu from "./SignedInMenu"
import SignedOutButtons from "./SignedOutButtons"
import { useAppSelector } from "../../store/hooks"

const NavBar = () => {
    const {authenticated} = useAppSelector(state => state.auth);
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
            {
                authenticated ? <SignedInMenu /> : <SignedOutButtons />
            }
            
        </Container>
    </Menu>
  )
}
export default NavBar