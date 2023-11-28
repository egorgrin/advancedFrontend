import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";

import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AppRouter} from "app/providers/router";

const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
      <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Change Theme</button>
        <Link to={'/'}>MainPage</Link>
        <Link to={'/about'}>AboutPage</Link>
        <AppRouter/>
      </div>
  );
};

export default App;
