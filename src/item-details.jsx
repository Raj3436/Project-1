import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {myData} from './item-list';
import {Box, Grid} from '@mui/material';

const ItemDetails = () => {
  const {id} = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    myData.map((el) => {
      if (el.id == id) {
        setData(el);
      }
    });
  }, [id]);

  return (
    <div style={{paddingLeft: '12px'}}>
      <Grid container spacing={4} sx={{height: '100vh'}}>
        <Grid
          item
          md={4}
          xs={12}
          sm={4}
          sx={{borderRadius: '8px', height: '101vh', background: '#ff00000d'}}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img src={data?.src} />
          </Box>
        </Grid>
        <Grid item md={8} xs={12} sm={8}>
          <h2>{data.name}</h2>
          <p>{data.desc}</p>
          <p>{data.specs}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemDetails;
