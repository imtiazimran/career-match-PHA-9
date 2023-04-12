import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobIds } from '../../../public/fakedb';
import SingleAppiedJob from './SingleAppiedJob'
import Footer from '../Footer/Footer';

const AppliedJob = () => {
    const data = useLoaderData()
    const jobs = data.record
    const storedJobs = getStoredJobIds()
    const [appliedJob, setAppliedJob] = useState([])
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        // Load applied jobs
        const appliedJobData = []
        for (const id of storedJobs) {
            const addedJobs = jobs.find(job => job.id === id)
            appliedJobData.push(addedJobs)
        }
        setAppliedJob(appliedJobData)
    }, [])
    // Filter the applied jobs based on the category property
    const filteredJobs = filter === 'all' ? appliedJob : appliedJob.filter(job => job.category.includes(filter))
    return (
        <div>
            <div className='w-2/5 mx-auto mr-0'>
                <select className='bg-green-400 mt-4 rounded px-2 py-2' value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                </select>
            </div>
            <div className="grid grid-cols-1 mx-auto"> {
                filteredJobs.map(job => <SingleAppiedJob key={job.id} job={job}></SingleAppiedJob>)
            }</div>
            <Footer />
        </div>
    );
};

export default AppliedJob;
