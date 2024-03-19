import { Link, useNavigate } from "react-router-dom"
import {Menu, Image, Dropdown, DropdownMenu, DropdownItem } from "semantic-ui-react"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { signOut } from "../../../features/auth/authSlice";



const SignedInMenu = () => {
  const {currentUser} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/');
  }

  return (
    <Menu.Item position="right">
        <Image avatar spaced='right' src='/user.png' />
        <Dropdown pointing='top left' text={currentUser?.email}>
          <DropdownMenu>
            <DropdownItem as={Link} to='/createEvent' text='Create event' icon='plus' />
            <DropdownItem text='My Profile' icon='user' />
            <DropdownItem onClick={handleSignOut} text='Sign Out' icon='power' />
          </DropdownMenu>
          
        </Dropdown>
        
    </Menu.Item>
  )
}
export default SignedInMenu