import './App.scss';
import NavBar from './components/shared/NavBar/NavBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import { IntlProvider } from 'react-intl';
import { translate } from './translation/translate';
import Footer from './components/shared/Footer/Footer';



function App() {

  const language = useSelector((state) => state.language.language);

  return (
    <div className="App">
      <IntlProvider
        locale={language}
        formats={{ number: 'en' }}
        messages={translate[language]}>
        <Router>
          <NavBar />
          {/* <ScrollToTop /> */}
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </IntlProvider>
    </div>
  );
}

export default App;
