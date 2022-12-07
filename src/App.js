import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const custom = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '윤상복',
  'birthday': '930515',
  'gender': '남자',
  'job': '세무사'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김남자',
  'birthday': '900515',
  'gender': '남자',
  'job': '여대생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '윤여자',
  'birthday': '910515',
  'gender': '여자',
  'job': '남대생'
},]

class App extends Component {
  render() {
    return (
      <div>
        {
           custom.map (r => {
              return (
             <Customer 
              key={r.id}
              id={r.id}
              image={r.image}
              name={r.name}
              birthday={r.birthday}
              gender={r.gender}
              job={r.job}
              />
      
      )
    })
  }
  </div>
)
  }
}

export default App;
