import { h, Component } from 'preact'
import Review from './review'

export default class ReviewsList extends Component {
  render(props, state) {
    return <div>
      {props.reviews.map((review, index) => <Review key={index} review={review} />)}
    </div>
  }
}
