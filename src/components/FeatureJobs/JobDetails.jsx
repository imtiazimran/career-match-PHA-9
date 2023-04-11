import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { jobId } = useParams();
    const loaderData = useLoaderData()
    const jobs = loaderData.record
    const matchedData = jobs.find(job => job.id === jobId)
    const { category, company, jobTitle, location
        , logo, salaryRange, id, jobDescription, jobResponsibilities, experience, educationalRequirements, responsibilities} = matchedData
        console.log(matchedData)
    return (
        <div>
            <div className='bg-emerald-400 text-center  '>
                <h2 className='p-20 text-3xl font-medium bg-center bg-cover text-indigo-700'  style={{ backgroundImage: `url('${logo}')` }}>Job Details of: {company}</h2>
            </div>
            <div className='detailsContainer w-3/4 mx-auto'>
                <div className='requarments'>
                    <p><span className='text-md font-semibold'>Job Description:</span> {jobDescription}</p>
                    <p className='mt-5'><span className='text-md font-semibold'>Job Responsibility:</span> {jobResponsibilities  ? jobResponsibilities : responsibilities.map(respons => <p className='mt-2'>{respons}</p>)}</p>
                    <p className='mt-5'><span className='text-md font-semibold'>Educational Requirements:</span> {educationalRequirements ? educationalRequirements : "Data Not found"}</p>
                    <p className='mt-5'><span className='text-md font-semibold'>Job Experience:</span> {experience ? experience : "Data Not found"}</p>

                </div>
                <div className='details'>
                    <div className='detailsInfo p-5'>
                        <h2 className='text-xl font-semibold pb-3'>Job Details</h2>
                        <hr className='py-2' />
                        <p><span className='text-md font-semibold'>Job Title:</span>{jobTitle}</p>
                        <p className='mt-2'><span className='text-md font-semibold'>Salary:</span>{salaryRange}</p>
                        <h2 className='text-xl font-semibold mt-2 pb-3'>Contact Information</h2>
                        <hr/>
                        <p className='mt-2'><span className='text-md font-semibold'>Phone:</span> +88014-779-93 25</p>
                        <p className='mt-2'><span className='text-md font-semibold'>Email:</span> example@host.com</p>
                        <p className='mt-2'><span className='text-md font-semibold'>Address:</span> {location}</p>
                    </div>
                    <div className='flex justify-center'><button className='px-2 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md text-white my-2 w-full'>Apply Now</button></div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;