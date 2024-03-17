import { Link, useNavigate } from "react-router-dom"
import {Menu, Image, Dropdown, DropdownMenu, DropdownItem } from "semantic-ui-react"

type  Props = {
  setAuth: (authState: boolean) => void;
}

const SignedInMenu = ({setAuth}:Props) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setAuth(false);
    navigate('/');
  }

  return (
    <Menu.Item position="right">
        <Image avatar spaced='right' src='/user.png' />
        <Dropdown pointing='top left' text='Gary'>
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