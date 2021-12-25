import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Trainer from '../../components/Trainer/Trainer';

const OurTrainers = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(()=>{
        fetch("trainers.json")
        .then(res=>res.json())
        .then(data => setTrainers(data));
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
            {
                trainers.map( trainer => <Trainer trainer={trainer}></Trainer> )
            }
        </div>
    );
};

export default OurTrainers;