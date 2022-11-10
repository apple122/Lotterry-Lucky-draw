import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../../Context/ThemeContext';

function DarkMode() {
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  const token = localStorage.getItem('token')
  const CheckToken = localStorage.getItem('CheckToken')
  return (
    <div>
        <div className={token && token === CheckToken ? 'paddingWhenLogin' : 'paddingWhenNotLogin'}>{isDark ? <FontAwesomeIcon onClick={toggleTheme} className='mt-2 pe-3 faMoon zoom icon' icon={faSun} fontSize={30}/> : <FontAwesomeIcon onClick={toggleTheme} className='mt-2 pe-3 faMoon zoom icon' icon={faMoon} fontSize={30}/>}</div>
    </div>
  )
}

export default DarkMode