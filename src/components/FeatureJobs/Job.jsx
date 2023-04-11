import React from 'react';
import './jobs.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { category, company, jobTitle, location
        , logo, salaryRange, id } = job
    return (
        <div className='singleJob border px-8 pt-2 rounded-md'>
            <img className='w-2/5' src={logo} alt="job Logo" />
            <h3 className='my-3 text-xl font-semibold'>{jobTitle}</h3>
            <p className='text-md font-medium text-gray-700'>{company}</p>
            <div className='flex gap-2'>
                <p className='p-2 border my-3 border-indigo-700 w-24 text-center rounded'>{category[0]}</p>
                <p className='p-2 border my-3 border-indigo-700 w-24 text-center rounded'>{category[1]}</p>
            </div>
            <div className='flex gap-4 text-gray-700 my-3'>
                <p><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> {location}</p>
                <p><FontAwesomeIcon icon={faCoins}></FontAwesomeIcon> {salaryRange}</p>
            </div>
            <Link to={`/job/${id}`}>
                <button className='px-2 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md text-white my-2'>View Details</button>
            </Link>
        </div>
    );
};

export default Job;
