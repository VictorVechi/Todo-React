import React, { useState } from 'react';
import Global from './globalStyle.module.css'
import Styles from './landingPage.module.css'
import List from '../components/List/List';
const LandingPage = () => {
    

    return (
        // Cria a página inicial com o componente List
        <div className={Styles.container}>
            <List/>
        </div>
    );
};

export default LandingPage;
