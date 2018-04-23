import { render, createElement } from 'preact'
import ReviewsList from '../components/reviews_list'

const URL = "http://localhost:8080/http://admin.revieworld.com/v4/organisations/D10/reviews?locale=en-GB&sku=AIPTPDV5700"
const HEADERS = new Headers({
   'Authorization': "Basic " + btoa("FILL_ME" + ":" + "FILL_ME"),
   'Content-Type': 'application/json'
})

class ReevooReviewsList extends HTMLElement {
  connectedCallback () {
    fetch(URL, {headers: HEADERS}).then(response => response.json())
    .then(json => {
      render(createElement(ReviewsList, json), this)
    }
  )
  }
}
customElements.define('reevoo-reviews-list', ReevooReviewsList)
