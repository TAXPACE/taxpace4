import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'



class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

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
          {this.state.customers ? this.state.customers.map (r => {
              return (
             <Customer 
              key={r.id}
              id={r.id}
              image={r.image}
              name={r.name}
              birthday={r.birthday}
              gender={r.gender}
              job={r.job}
              />)}) : ""}
          </TableBody>
        </Table>
    </Paper>
)
  }
}

export default App;
