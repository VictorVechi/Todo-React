import React, { useState } from 'react';
import Global from './globalStyle.module.css'
import Styles from './landingPage.module.css'
import List from '../components/List/List';
const LandingPage = () => {
    

    return (
        <div className={Styles.container}>
            <List/>
        </div>
    );
};

export default LandingPage;
