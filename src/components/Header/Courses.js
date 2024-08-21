import React, {useState} from 'react'
import CoursesData from './CourseData'
import Course from './Course'

export default function Courses() {
    const[courses,setCourses] =useState(CoursesData)
  return (
    <div className=' mt-5' style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      {courses.map(course=>(
        <Course key={course.id} {...course}/>
      ))}
    </div>
  )
}
