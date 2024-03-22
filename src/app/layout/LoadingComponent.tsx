import { Dimmer, Loader } from "semantic-ui-react"

type Props = {
    inverted?: boolean 
    content?: string
}

const LoadingComponent = ({inverted = true, content= 'Loading...'}:Props) => {
  return (
    <Dimmer inverted={inverted} active={true}>
        <Loader content= {content} />
    </Dimmer>
  )
}
export default LoadingComponent