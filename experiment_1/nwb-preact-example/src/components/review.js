import { h, Component } from 'preact'

export default class Review extends Component {
  render(props, state) {

    return <div>
      <h1>{props.review.id}</h1>
      <p>Good Points:{props.review.good_points}</p>
      <p>Bad Points:{props.review.bad_points}</p>
    </div>
  }
}
