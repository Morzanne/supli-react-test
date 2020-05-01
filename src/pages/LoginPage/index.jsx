import React from 'react';
import { Container, Col } from 'reactstrap';
import linkedin_large from '../../images/linkedin_large.png';

import styles from './styles.module.scss';
import { Card, CardHeader, CardBody } from '../../components/common/card';
import Img from '../../components/common/Img';
import LoginFormContainer from '../../components/authentication/LoginForm/LoginFormContainer';

const LoginPage = () => (
    <Container className={styles.container}>
        <div className={styles.pageWrapper}>
            <Card>
                <CardHeader>
                    <Img src={linkedin_large} alt="linkedin logo" className={styles.linkedin} />
                </CardHeader>
                <CardBody>
                    <Col xs={12}>
                        <h1 className={styles.header}>Bon retour parmi nous</h1>
                        <p className={styles.subheading}>Ne manquez pas votre prochaine opportunité ! Identifiez vous pour rester au courant de ce qui se passe dans votre sphère professionnelle</p>
                    </Col>
                    <Col xs={12}>
                        <LoginFormContainer />
                    </Col>
                </CardBody>
            </Card>
        </div>
    </Container>
)

export default LoginPage;