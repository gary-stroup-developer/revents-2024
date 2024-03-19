import ModalWrapper from "./ModalWrapper";

type Props = {
  data: any
}
const TestModal = ({data}:Props) => {

  return (
    <ModalWrapper header={'Testing 123'}>
        <div>{data}</div>
    </ModalWrapper>
  )
}
export default TestModal