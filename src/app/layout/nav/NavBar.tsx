import { Button, Container, Menu, MenuItem } from "semantic-ui-react"

const NavBar = ({setFormOpen}:{setFormOpen: (value:boolean)=> void}) => {
  return (
    <Menu inverted fixed="top">
        <Container>
            <MenuItem header>
                <img src="/logo.png" alt="logo" />
            </MenuItem>
            <MenuItem name='Events' />
            <MenuItem>
                <Button onClick={()=>setFormOpen(true)} floated="right" positive inverted content='Create Event' />
            </MenuItem>
            <MenuItem position="right">
                <Button basic inverted content='Login' />
                <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
            </MenuItem>
        </Container>
    </Menu>
  )
}
export default NavBar