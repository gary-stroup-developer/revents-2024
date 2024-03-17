import { MenuItem, Button } from "semantic-ui-react"

type  Props = {
    setAuth: (authState: boolean) => void;
  }

const SignedOutButtons = ({setAuth}:Props) => {
  return (
    <MenuItem position="right">
        <Button basic inverted content='Login' onClick={() => setAuth(true)} />
        <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
    </MenuItem>
  )
}
export default SignedOutButtons