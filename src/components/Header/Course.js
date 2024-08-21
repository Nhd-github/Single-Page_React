import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

export default function Course(props) {

    return (
        <Link to={`/course/${props.id}`}>
            <div style={{ display: 'flex' }} className='shadow'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text style={{textDecoration:'none'}}>
                            {/* It’s no secret that we’re big believers in functional programming and use OCaml,
                            a statically typed functional language. */}
                           <span  style={{color:'white'}}  className='bg-primary '>
                           {props.price}

                            </span> 
                        </Card.Text>
                        <Button variant="secondary">Get Course</Button>
                    </Card.Body>
                </Card>
            </div>
        </Link>

    )
}
