import React from 'react';

const Trainer = (props) => {
    const { name, Skills, Age } = props.trainer;
    return (
        <div className="col">
            <div className="card">
                <img src="https://image.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg" className=" img-size mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">Age: {Age}</h5>
                    <p className="card-text">Skills: {Skills}</p>
                </div>
            </div>
        </div>
    );
};

export default Trainer;


