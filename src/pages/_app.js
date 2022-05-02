import '../styles/shared.css'

import { Provider } from 'react-redux'
import store from './_redux/store'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
}

export default MyApp
