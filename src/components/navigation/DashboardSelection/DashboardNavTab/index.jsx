import React from 'react';


import styles from './styles.module.scss';

const DashboardNavTab = ({ title, type, active, setActive }) => {

    return (
        <div className={[styles.dashboardNavTab, active ? styles.active : ``].join(' ')}>
            <a onClick={() => setActive(type)} className={styles.link} href="#!">
                <span>{title}</span>
            </a>
        </div>
    )
}

export default DashboardNavTab;