import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';

const Product = () => {
  const [listData, setListData] = useState();
  const [openDial, setOpenDial] = useState(null);
  const [formData, setformData] = useState();
  useEffect(() => {
    if (!openDial) return;
    axios
      .get(`https://fakestoreapi.com/products/${openDial}`)
      .then((res) => {
        setformData(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, [openDial]);
  function handleChange(e) {
    setformData({...formData, [e.target.name]: e.target.value});
  }
  async function getData() {
    // try {
    //   let res = await axios.get('https://fakestoreapi.com/products');
    //   setListData(res?.data);
    // } catch (error) {
    //   console.log(error);
    // }
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setListData(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box sx={{width: '100%', textAlign: 'right', mb: 2}}>
        <Button
          variant='contained'
          onClick={() => {
            setOpenDial('create');
          }}
        >
          Create New
        </Button>
      </Box>
      <Table sx={{border: '1px solid #d3d3d3'}}>
        <TableHead sx={{background: '#d6eced'}}>
          <TableRow>
            <TableCell sx={{fontWeight: 800}}>Image</TableCell>
            <TableCell sx={{fontWeight: 800}}>Title</TableCell>
            <TableCell sx={{fontWeight: 800}}>Category</TableCell>
            <TableCell sx={{fontWeight: 800}}>Description</TableCell>
            <TableCell sx={{fontWeight: 800}}>Price</TableCell>
            <TableCell sx={{fontWeight: 800}}>Rating</TableCell>
            <TableCell sx={{fontWeight: 800}}>Rating Count</TableCell>
            <TableCell sx={{fontWeight: 800}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listData?.map((el) => {
            return (
              <TableRow>
                <TableCell>
                  <img
                    style={{width: '50px', height: '50px', borderRadius: '50%'}}
                    src={el.image}
                  />
                </TableCell>
                <TableCell>{el.title}</TableCell>
                <TableCell>{el.category}</TableCell>
                <TableCell>{el.description}</TableCell>
                <TableCell>{el.price}</TableCell>
                <TableCell>{el.rating?.rate}</TableCell>
                <TableCell>{el.rating?.count}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      setOpenDial(el.id);
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
      <Dialog
        open={openDial}
        onClose={() => {
          setOpenDial(null);
        }}
      >
        <DialogTitle>
          {openDial == 'create' ? 'New ' : 'Update '}Form
        </DialogTitle>
        <DialogContent>
          <Box sx={{width: '500px'}}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              name='title'
              fullWidth
              sx={{mt: 2}}
              label='Title'
              onChange={handleChange}
              value={formData?.title}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              name='category'
              sx={{mt: 2}}
              label='Description'
              onChange={handleChange}
              value={formData?.category}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              name='description'
              sx={{mt: 2}}
              label='Category'
              onChange={handleChange}
              value={formData?.description}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              name='price'
              sx={{mt: 2}}
              label='Price'
              onChange={handleChange}
              value={formData?.price}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              sx={{mt: 2}}
              disabled
              label='Rating'
              value={formData?.rating?.rate}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              sx={{mt: 2}}
              label='Rating Count'
              disabled
              value={formData?.rating?.count}
            />
          </Box>
          <Box sx={{width: '100%', textAlign: 'center'}}>
            <Button
              variant='contained'
              sx={{mt: 4}}
              onClick={() => {
                if (openDial == 'create') {
                  axios
                    .post('https://fakestoreapi.com/products', formData)
                    .then((res) => {
                      console.log(res, ':DONE:');
                      if (res?.status == 200) {
                        alert('Submitted Successfully');
                      } else {
                        alert('Something went wrong');
                      }
                      setOpenDial(null);
                      getData();
                    })
                    .catch((er) => {
                      console.log(er);
                    });
                } else {
                  axios
                    .put(
                      `https://fakestoreapi.com/products/${openDial}`,
                      formData,
                    )
                    .then((res) => {
                      console.log(res, ':DONE:');
                      if (res?.status == 200) {
                        alert('Updated Successfully');
                      } else {
                        alert('Something went wrong');
                      } //
                      setOpenDial(null);
                      getData();
                    })
                    .catch((er) => {
                      console.log(er);
                    });
                }
              }}
            >
              {openDial == 'create' ? 'Submit' : 'Update'}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Product;
