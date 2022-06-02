// What I understand by this file?
// The _app.js file is kind of the the root file. It accepts two parameters. The Component and the pageProps. The component hold the content of the page that should be rerendered, while the pageProps represents the props of the page

import Layout from '../components/layout/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
       <Component {...pageProps} />
  </Layout> 
 
}

export default MyApp
