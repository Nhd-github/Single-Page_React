import { Component } from "react";

export default class Book extends Component{
    render(){
        return(
            <tr>
            <th>{this.props.year}</th>
            <th> {this.props.author}</th>

            <th> {this.props.title}</th>
        </tr>
        )
    }
}