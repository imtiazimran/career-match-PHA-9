import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { jobContext } from '../Home/Home';
const JobDetails = () => {
    const {jobId} = useParams()
    
    const jobs = useContext(jobContext)
    console.log(jobs)
    return (
        <div>
            <h3>job details page of {jobId}</h3>
            
        </div>
    );
};

export default JobDetails;