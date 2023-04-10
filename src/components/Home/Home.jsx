import React, {useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import Footer from '../Footer/Footer';

export const jobContext = React.createContext()

const Home = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('https://api.jsonbin.io/v3/b/643402d4ebd26539d0a821a6')
            .then(res => res.json())
            .then(data => setJobs(data.record))
    }, [])
    return (
        <jobContext.Provider value={jobs}>
            <div>
                <Header></Header>
                <JobCategory></JobCategory>
                <FeatureJobs></FeatureJobs>
                <Footer></Footer>
            </div>
        </jobContext.Provider>
    );
};

export default Home;