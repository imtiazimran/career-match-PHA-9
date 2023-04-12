import React from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const assignmentData = [
  {
    name: 'Assignment 1',
    score: 60,
    fill: '#8884d8',
  },
  {
    name: 'Assignment 2',
    score: 60,
    fill: '#83a6ed',
  },
  {
    name: 'Assignment 3',
    score: 60,
    fill: '#8dd1e1',
  },
  {
    name: 'Assignment 4',
    score: 59,
    fill: '#82ca9d',
  },
  {
    name: 'Assignment 5',
    score: 58,
    fill: '#a4de6c',
  },
  {
    name: 'Assignment 6',
    score: 60,
    fill: '#d0ed57',
  },
  {
    name: 'Assignment 7',
    score: 60,
    fill: '#ffc658',
  },
  {
    name: 'Assignment 8',
    score: 60,
    fill: '#b9b9b9',
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer className="mx-auto" width="80%" height={300}>
      <ComposedChart className='md:mt-20' data={assignmentData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="score" stroke="#8884d8" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
