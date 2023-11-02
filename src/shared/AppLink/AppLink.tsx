import React, { memo } from 'react'
import { NavLink } from "react-router-dom";
import cl from 'classnames';
import styles from './AppLink.module.scss'


interface AppLinkProps {
    to: string,
    className?: string,
    children: React.ReactNode,
    role: string,
}

const AppLink: React.FC<AppLinkProps> = memo(({ to, children, className, role, ...rest }) => {

    return (
        <NavLink role={role} to={to} className={cl(styles.link, className)} {...rest}>
            {children}
        </NavLink>
    )
})

export default AppLink