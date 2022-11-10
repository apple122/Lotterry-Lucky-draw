import React from 'react'
import { useEffect, useState } from 'react'
import '../../Assets/sass/ScrollToTopButton.scss'
import { FaAngleUp } from 'react-icons/fa'

function ButtonScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
          setShowTopBtn(true);
      } else {
          setShowTopBtn(false);
      }
  });
  }, []);
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
  return (
    <div>
      <div className="top-to-btm">
            {" "}
            {showTopBtn && (
              <div onClick={goToTop}><FaAngleUp className="icon-position icon-style"/></div> 
            )}{" "}
        </div>
    </div>
  )
}

export default ButtonScrollToTop