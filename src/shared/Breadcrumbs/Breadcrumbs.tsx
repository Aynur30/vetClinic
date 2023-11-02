import { FC } from "react"
import { Link, useLocation } from "react-router-dom";
import styles from './Breadcrumbs.module.scss'
import home from './Vector.svg'

const Breadcrumbs: FC = () => {
    const location = useLocation()
    let currenLink = ''
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currenLink += `/${crumb}`

            return (
                <div className={styles.crumb} key={crumb}>
                    <Link to={currenLink}>{crumb}</Link>
                </div>
            )
        })
    return (
        <div data-testid="breadcrumbs" className={styles.breadcrumbs}>
            <Link to='/'><img src={home} alt="home" /></Link>
            {crumbs.length > 0 && '>'}
            {crumbs}
        </div>
    )
}

export default Breadcrumbs
