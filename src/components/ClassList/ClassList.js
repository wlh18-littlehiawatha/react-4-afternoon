import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: []

    }
    
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(results => {
      console.log(results.data)
      this.setState({
        students: results.data
      });
    });

  }
  
  render() {
    console.log(students);

    const students = this.state.students.map((student, index) => {
      console.log(student);
      return <h3 Key={index}>
        {student.first_name} {student.last_name}
        </h3>
    });

    return (
      <div className="box">
        <h1>{this.props.match.class}</h1>
        <h2>ClassList:</h2>
        {students}

      </div>
    )
  }
}