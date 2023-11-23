import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense, useContext, useState} from "react";
import {useTheme} from "./theme/useTheme";

const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
      <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>Change Theme</button>
        <Link to={'/'}>MainPage</Link>
        <Link to={'/about'}>AboutPage</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={<MainPageAsync/>}/>
            <Route path={'/about'} element={<AboutPageAsync/>}/>
          </Routes>
        </Suspense>
      </div>
  );
};

export default App;
