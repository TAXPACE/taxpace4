import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'

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
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {custom.map (r => {
              return (
             <Customer 
              key={r.id}
              id={r.id}
              image={r.image}
              name={r.name}
              birthday={r.birthday}
              gender={r.gender}
              job={r.job}
              />)})}
          </TableBody>
        </Table>
    </Paper>
)
  }
}

export default App;
