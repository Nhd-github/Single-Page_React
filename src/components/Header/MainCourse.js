import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import coursesData from './CourseData'
import { Container, Row, Col } from 'react-bootstrap'

export default function MainCourse() {
    console.log('hhhhhhhhhiiiii')
    let [courses, setCourse] = useState(coursesData)
    let param = useParams().id
    console.log('params.courseID',typeof param)
    let findCourse = courses.find(course => {
         return( course.id === Number(param) )
     
    })
    console.log('findCourse', findCourse);
    return (
        <Container className='mt-5' style={{backgroundImage: 'url(./img/street-courses.svg)'}}>
            <Row>
            

                <Col md={6} >
                    <img src={findCourse.img} alt="" className='thumbnail shadow' style={{width:'400px'}} />
                </Col>
                <Col md={6}>
                <h2>{findCourse.title}</h2>
                <p>{findCourse.description}</p>
                </Col>
              
            </Row>

        </Container>
    )
}
