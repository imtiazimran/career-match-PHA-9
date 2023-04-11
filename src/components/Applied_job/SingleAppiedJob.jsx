import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faCoins } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const SingleAppiedJob = ({ job }) => {
    const { logo, company, location, salaryRange, jobTitle, id } = job
    return (
            <div className='ReviewItem flex items-center border w-2/5 mx-auto my-3 rounded'>
                <img className='w-32 pl-3' src={logo} alt="" />
                <div className='ReviewJobInfo flex-grow pl-3 py-2'>
                    <p className='text-xl font-medium'>{jobTitle}</p>
                    <p><span className='text-md'>{company}</span></p>
                    <p className='text-gray-700'><span><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> {location}</span> <span className='pl-3'><FontAwesomeIcon icon={faCoins}></FontAwesomeIcon> {salaryRange}</span></p>
                </div>
                <Link className='pr-2' to={`/job/${id}`}>
                    <button className='px-2 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md text-white my-2'>View Details</button>
                </Link>
            </div>
    );
};

export default SingleAppiedJob;