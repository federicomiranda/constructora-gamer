import '../styles/globals.css'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
