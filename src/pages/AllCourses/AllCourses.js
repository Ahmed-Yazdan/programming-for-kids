import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../../components/Course/Course';

const AllCourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
            {
                courses.map(course => <Course course={course} key={course.courseId}></Course>)
            }
        </div>
    );
};

export default AllCourses;