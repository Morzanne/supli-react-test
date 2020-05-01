import React from 'react';
import { NavItem } from 'reactstrap';
import PT from 'prop-types';
import cx from 'classnames';

import up from '../../../../images/up.jpeg';
import styles from './styles.module.scss';
import Img from '../../../common/Img';
import { differenceInYears, differenceInMonths } from 'date-fns';

const extractDurationOfJob = (startYear, isStillEmployed, lastYear = null) => {
    const lastDate = isStillEmployed ? new Date() : lastYear;
    const diffInYear = differenceInYears(lastDate, startYear);
    const diffInMonth = differenceInMonths(lastDate, startYear);

    const numberOfMonthInDiffYear = diffInYear * 12;

    const finalNumberOfMont = diffInMonth - numberOfMonthInDiffYear;
    if (diffInYear === 0) {
        return finalNumberOfMont.toString().concat(' ', 'mos')
    }

    return diffInYear.toString().concat(' ', 'yrs', ' ', finalNumberOfMont, ' ', 'mos')

}

export const Experience = ({ experience }) => {
    return <NavItem className="p-0 d-flex align-items-center">
        <div className={styles.button}>
            <Img className={styles.schoolPic} src={up} alt="github pic" />
            <div className={styles.commandBlock}>
                <div className="d-inline-block">
                    <span>{experience.title}
                    </span>

                    <span className={styles.message} >
                        <span>
                            {experience.employeer}
                        </span>{' '}
                        <span className={styles.corporateEmployeer}>{experience.location}</span>
                    </span>
                    <span className={cx(styles.message, styles.praticalDate)}>
                        {experience.stillEmployed ? (experience.employementDate + '--Present') : (experience.employementDate + '--Unknow')} <span className={styles.timeOfEmployment}>{extractDurationOfJob(experience.startingDate, experience.stillEmployed)}</span>
                    </span>
                    <span className={styles.message}>
                        {experience.description}
                    </span>
                </div>
            </div>
        </div>
    </NavItem>
}

Experience.propTypes = {
    experience: PT.object
}


export default Experience;