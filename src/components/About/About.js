import React from 'react';

const About = () => {
    return (
      <div>
        <div className="row mt-5 pt-5 mb-5 d-flex justify-content-center  align-items-center">
          <div className="col-md-6">
            <div className="div">
              <h2 className="text-success fw-bold ">About Us</h2>
              <p>
                Students have individual learning paths in “folders”. When a
                student works on a folder, they engage in instruction through
                video, audio, animation, and interaction writing tools.
              </p>
              <p>
                {" "}
                myON is an online library of more than 10,000 enhanced digital
                books with multimedia supports, real-time reporting and
                assessments and embedded close reading tools. Students receive
                book recommendations based on their interests and reading
                abilities
              </p>
              <p>
                Students have access to over 400 eBooks in English and Spanish.
                Each book has a corresponding quiz to monitor student’s
                comprehension.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="about-image"
              src={
                "https://archivedinnings.files.wordpress.com/2016/06/bart-giamatti.jpg?w=590"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default About;