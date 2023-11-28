import s from './Navbar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
      <div className={classNames(s.Navbar, {}, [className])}>
        <div className={s.links}>
          <AppLink
              to={'/'}
              theme={AppLinkTheme.DARK}
              className={s.link}>MainPage</AppLink>
          <AppLink
              to={'/about'}
              theme={AppLinkTheme.DARK}
              className={s.link}>AboutPage</AppLink>
        </div>
      </div>
  );
};