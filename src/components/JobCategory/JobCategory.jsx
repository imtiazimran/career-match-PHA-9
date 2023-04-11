import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faUsers, faHospital, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import './JobCategory.css'
const categories = [
  {
    id: 1,
    name: "Software Development",
    icon: "faLaptopCode",
    availableJobs: 157,
  },
  {
    id: 2,
    name: "Human Resources",
    icon: "faUsers",
    availableJobs: 300,
  },
  {
    id: 3,
    name: "Healthcare",
    icon: "faHospital",
    availableJobs: 432,
  },
  {
    id: 4,
    name: "Degital Marketing",
    icon: "faBriefcase",
    availableJobs: 152,
  },
];

const JobCategory = () => {
  return (
    <div className="flex justify-center">
      <div className="job-category bg-white p-6 rounded-lg  w-full md:w-auto">
        <h2 className="text-4xl text-center font-bold mb-4">Job Categories</h2>
        <p className="mb-4 text-center">Explore the available job categories below.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="job-card shadow-md p-8 rounded-md"
            >
              {category.icon === "faLaptopCode" && (
                <FontAwesomeIcon icon={faLaptopCode} className="text-2xl mb-2 pt-4 text-indigo-400" />
              )}
              {category.icon === "faUsers" && (
                <FontAwesomeIcon icon={faUsers} className="text-2xl mb-2 pt-4 text-indigo-400" />
              )}
              {category.icon === "faHospital" && (
                <FontAwesomeIcon icon={faHospital} className="text-2xl mb-2 pt-4 text-indigo-400" />
              )}
              {category.icon === "faBriefcase" && (
                <FontAwesomeIcon icon={faBriefcase} className="text-2xl mb-2 pt-4 text-indigo-400" />
              )}
              <h3 className="text-lg font-medium mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600">
                {category.availableJobs} available jobs
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
