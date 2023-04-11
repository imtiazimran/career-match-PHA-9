import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobIds } from '../../../public/fakedb';
import SingleAppiedJob from './SingleAppiedJob';
import Footer from '../Footer/Footer';

const AppliedJob = () => {
    const data = useLoaderData()
    const jobs = data.record
    const storedJobs = getStoredJobIds()
    const appiledJobs = []

    for (const id of storedJobs) {
        const addedJobs = jobs.find(job => job.id === id)
        appiledJobs.push(addedJobs)
    }
    return (
        <div>
            <div className="grid grid-cols-1 mx-auto"> {
                appiledJobs.map(aj => <SingleAppiedJob key={aj.id} job={aj}></SingleAppiedJob>)
            }</div>
            <Footer></Footer>
        </div>
    );
};

export default AppliedJob;