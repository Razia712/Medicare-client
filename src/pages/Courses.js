import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "./../hooks/useAuth.js";
import Slide from "react-reveal/Slide";
import sectionBG from "./../assets/images/sectionBg.png";
import Course from "../components/course/Course.js";

const Courses = () => {
  const { courses } = useAuth();

  return (
    <div className="py-5" style={{ background: `url(${sectionBG})` }}>
      <div className="text-center text-white">
        <Slide left>
          <h1> Our All Services</h1>
        </Slide>

        <Slide right>
          <p className="mb-0">
          "TO BE A RENOWNED ORGANIZATION AT THE LEADING EDGE OF MEDICINE, PROVIDING QUALITY HEALTHCARE TO MEET OUR NATION'S ASPIRATIONS."
          </p>
        </Slide>
      </div>

      <Container>
        <div className="my-3 d-flex flex-wrap justify-content-between ">
          <Row>
            {courses.map((course) => (
              <Course key={course.key} course={course} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
