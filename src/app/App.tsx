import './styles/index.scss'
import {Suspense} from "react";
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";

import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
      <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Change Theme</button>
        <Link to={'/'}>MainPage</Link>
        <Link to={'/about'}>AboutPage</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={<MainPage />}/>
            <Route path={'/about'} element={<AboutPage />}/>
          </Routes>
        </Suspense>
      </div>
  );
};

export default App;
