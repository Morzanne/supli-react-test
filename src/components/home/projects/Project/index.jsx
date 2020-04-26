import React from 'react';
import { Row, Col } from 'reactstrap';
import PT from 'prop-types';
import cx from 'classnames';

import { Card, CardHeader, CardBody, CardFooter } from '../../../common/card/index';
import project from '../../../../images/project.jpg'
import styles from './styles.module.scss';

export const Project = ({ projectUnit }) => {
    return (
        <div>
            <div className={styles.cardBody}>
                <div className={styles.imgWrapper}>
                    <a href="#">
                        <img src={project} className={cx(styles.img)} alt="project image" />
                    </a>
                </div>
            </div>
            <div>
                <div className={styles.commandBlock}>
                    <span className={styles.projectTitle}>{projectUnit.title}</span>
                    <div className="d-inline-block">
                        <span className={styles.description}>{projectUnit.description}{', '}
                        </span>
                        <span className={styles.date}>
                            {projectUnit.date}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

Project.propTypes = {
    projectUnit: PT.object
}

export default Project
