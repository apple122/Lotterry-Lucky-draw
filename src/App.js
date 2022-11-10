import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Visitor/Layouts/Header/Header'
import Router from './Visitor/Routes/route'
import Footer from '../src/Visitor/Layouts/Footer/Footer'
import '../src/App.css';
import { useContext } from 'react';
import { ThemeContext } from './Visitor/Context/ThemeContext';
// import { TimesContext } from './Visitor/Context/TimesContext';
import ButtonScrollToTop from './Visitor/Components/ButtonScrollToTop/ButtonScrollToTop';

function App() {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  return (
    <div style={{backgroundColor: theme.backgroundColor, color: theme.color, transition: theme.transition}}>
      <Header/>
      <body style={{backgroundColor: theme.backgroundColor, color: theme.color, transition: theme.transition}} className='d-flex flex-column min-vh-100'>
        <Router/>
        <ButtonScrollToTop/>
        </body>
      <Footer/>
    </div>
  );
}

export default App;