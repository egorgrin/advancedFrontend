import s from './AppLink.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.LIGHT,
    ...otherProps
  } = props;

  return (
      <Link
          to={to}
          // @ts-ignore
          className={classNames(s.applink, {}, [className, s[theme]])}
          {...otherProps}
      >
        {children}
      </Link>
  );
};