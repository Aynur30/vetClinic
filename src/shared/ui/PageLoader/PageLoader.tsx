import React from 'react'
import styles from './PageLoader.module.scss'

const PageLoader: React.FC = () => {
    return (
        <div data-testid='loader' className={styles.loader}>
        </div>
    )
}

export default PageLoader