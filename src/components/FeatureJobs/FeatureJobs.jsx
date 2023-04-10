import React, { useContext} from 'react';
import Job from './Job';
import { jobContext } from '../Home/Home';

const FeatureJobs = () => {
    const jobs = useContext(jobContext)
    return (
        <div>
            <h2 className="text-2xl text-center font-bold mb-4">Feature Jobs</h2>
            <p className="mb-4 text-center">Explore thousends of job opportunities with all the informantion you need. its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-3/5 mx-auto'>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className='w-1/5 text-center mx-auto m-4'>
                <button className='px-2 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md text-white my-2 text-center mx-auto'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeatureJobs;