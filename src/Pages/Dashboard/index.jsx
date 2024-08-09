import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, {useState} from 'react';
import Create from './dialog-create';
import EditIcon from '@mui/icons-material/Edit';
const Dashboard = () => {
  const [dialog, setDialog] = useState(false);
  const myData = [
    {
      name: 'Raj',
      gender: 'Male',
      age: 99,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj',
      gender: 'Male',
      age: 99,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj',
      gender: 'Male',
      age: 99,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj',
      gender: 'Male',
      age: 99,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj',
      gender: 'Male',
      age: 99,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Ranjan',
      gender: 'Male',
      age: 2,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj2',
      gender: 'Male',
      age: 27,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj3',
      gender: 'Male',
      age: 9,
      role: ['User'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj',
      gender: 'Male',
      age: 99,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj',
      gender: 'Male',
      age: 99,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj',
      gender: 'Male',
      age: 99,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj',
      gender: 'Male',
      age: 99,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj',
      gender: 'Male',
      age: 99,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
    {
      name: 'Raj',
      gender: 'Male',
      age: 99,
      role: ['User', 'Admin'],
      email: 'raj@srtinfotech.in',
      mobile: 9771082642,
    },
  ];
  function formSubmit(d) {
    console.log(d, 'RRERERER');
  }
  return (
    <div>
      {dialog && (
        <Create
          handleClose={() => setDialog(false)}
          title='MY PAGE 2323'
          formSubmit={formSubmit}
        />
      )}
      <Box sx={{textAlign: 'right', p: 2}}>
        <Button
          variant='contained'
          onClick={() => {
            setDialog(true);
          }}
        >
          Create New
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              style={{
                background: '#ddd5ff',
              }}
            >
              <TableCell>Serial No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Email ID</TableCell>
              <TableCell>Mobile No</TableCell>
              <TableCell sx={{textAlign: 'center'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myData?.map((el, ind) => {
              return (
                <TableRow key={ind + 'row'}>
                  <TableCell>{ind + 1}</TableCell>
                  <TableCell>{el.name}</TableCell>
                  <TableCell>{el.gender}</TableCell>
                  <TableCell>{el.age}</TableCell>
                  <TableCell>{el.role}</TableCell>
                  <TableCell>{el.email}</TableCell>
                  <TableCell>{el.mobile}</TableCell>
                  <TableCell sx={{textAlign: 'center'}}>
                    <IconButton
                      onClick={() => {
                        setDialog(true);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
