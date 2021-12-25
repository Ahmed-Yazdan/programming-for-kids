import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'
import AllCourses from '../AllCourses/AllCourses';
const Home = () => {

  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-2 gap-4 grid-rows-12 p-2">
        <div>
          <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" />
        </div>
        <div>
          <h1 className="text-7xl text-purple-600">Programming is Fun and Easy to learn!</h1>
          <h3 className="mt-4">Welcome to programming for kids! Here you can choose your desired course on programming which are made for kids. These courses are interactive and fun for kids. So, why hesitate? Get your desired course right now!</h3>
          <Link to="/allcourses">
            <button className="bg-purple-500 rounded p-2 border-2 hover:border-black text-white" >Buy Courses</button>
          </Link>
        </div>
      </div>
      <div>
        <AllCourses></AllCourses>
      </div>
    </div>
  );
};

export default Home;