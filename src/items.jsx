import {Box, Grid} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {myData} from './item-list';

export default function Items() {
  const navigate = useNavigate();

  return (
    <div style={{padding: '20px'}}>
      <Grid container spacing={4}>
        {myData.map((el, ind) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={ind}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              onClick={() => navigate(`/items/${el.id}`)}
              sx={{
                width: '100%',
                maxWidth: '300px',
                height: '350px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                overflow: 'hidden',
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
                display: 'flex', //
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '10px',
              }}
            >
              <img
                src={el.src}
                alt={el.name}
                style={{
                  width: '70%',
                  height: 'auto',
                  maxHeight: '200px',
                  objectFit: 'contain',
                  margin: '30px auto 5px',
                }}
              />
              <div style={{marginBottom: '20px'}}>
                <div
                  style={{
                    fontWeight: 600,
                    marginBottom: '3px',
                    fontSize: '1.1rem',
                  }}
                >
                  {el.name}
                </div>
                <div style={{fontSize: '0.9rem', color: '#555'}}>{el.desc}</div>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
