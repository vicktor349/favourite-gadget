import '../styles/globals.css'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import SecondLayout from '../components/SecondLayout'

function MyApp({ Component, pageProps }) {
  const location = useRouter()
  if (location.pathname === '/') {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  } else {
    return (
      <SecondLayout>
        <Component {...pageProps} />
      </SecondLayout>
    )
  }
}

export default MyApp
