import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, price, img, courseAbout, courseDetails } = props.course;

    return (
        <div className="col">
            <div className="card">
                <div className="m-3">
                    <img src={img} className=" img-size mx-auto" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Tags: {courseAbout}</p>
                    <h5 className="card-title">Price: ${price}</h5>
                    <p className="card-text">Details: {courseDetails.slice(0, 100)}</p>
                    <button className="bg-purple-400 rounded p-2">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Course;