import React, {useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import Footer from '../Footer/Footer';

export const jobContext = React.createContext()

const Home = () => {
    
    return (
            <div>
                <Header></Header>
                <JobCategory></JobCategory>
                <FeatureJobs></FeatureJobs>
                <Footer></Footer>
            </div>
    );
};

export default Home;