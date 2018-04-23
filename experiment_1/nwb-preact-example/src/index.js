import 'document-register-element'


import './web_components/reevoo_reviews_list'

import {h, render} from 'preact'

if (process.env.NODE_ENV === 'development') {
  // Enable use of React Developer Tools
  require('preact/devtools')
}



if (module.hot) {
  // module.hot.accept('./App', init)
}
