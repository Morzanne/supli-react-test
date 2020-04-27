import React from 'react'
import cx from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCog } from '@fortawesome/free-solid-svg-icons';

import { Card, CardHeader, CardBody } from '../../common/card/index';
import { Row, Col } from 'reactstrap';


import styles from './styles.module.scss';

export const FastAccessBlock = () => {
    return (
        <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
                <Row className={styles.row}>
                    <div className={styles.title}>Fast access</div>
                </Row>
            </CardHeader>
            <CardBody className={styles.cardBody}>
                <Row className={styles.row}>
                    <Col xs={12} className={styles.buttonWrapper}>
                        <button className={cx(styles.button, styles.questionsButton)}>
                            <span>QUESTIONS ?</span>
                            <span>
                                <FontAwesomeIcon icon={faQuestionCircle} />
                            </span>
                        </button>
                    </Col>
                    <Col xs={12} className={styles.buttonWrapper}>
                        <button className={cx(styles.button, styles.settingsButton)}>
                            <span>SETTINGS</span>
                            <span>
                                <FontAwesomeIcon icon={faCog} />
                            </span>
                        </button>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
export default FastAccessBlock