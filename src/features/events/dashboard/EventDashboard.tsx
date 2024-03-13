import { Grid } from "semantic-ui-react"

type Props = {
  data: string
}

const EventDashboard = (props: Props) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <h2>Left column {props.data}</h2>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Right Column</h2>
      </Grid.Column>
    </Grid>
  )
}

export default EventDashboard