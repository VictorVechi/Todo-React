import React, { useState } from 'react';
import { DivLandingPage } from './LandingPage.styles';
import List from '../components/List/List';

const LandingPage = () => {
    

    return (
        // Cria a página inicial com o componente List
        <DivLandingPage>
            <List/>
        </DivLandingPage>
    );
};

export default LandingPage;
