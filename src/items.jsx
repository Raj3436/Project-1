import {Box, Grid} from '@mui/material';

export default function Items() {
  const myData = [
    {
      name: 'Item 1',
      desc: 'fsadf fdsaf dsaf fsdafdsaf f',
      src: '/assets/phone-1.webp',
    },
    {
      name: 'Item 1',
      desc: 'fsadf fdsaf dsaf fsdafdsaf f',
      src: '/assets/phone-1.webp',
    },
    {
      name: 'Item 1',
      desc: 'fsadf fdsaf dsaf fsdafdsaf f',
      src: '/assets/phone-1.webp',
    },
    {
      name: 'Item 1',
      desc: 'fsadf fdsaf dsaf fsdafdsaf f',
      src: '/assets/phone-1.webp',
    },
    {
      name: 'Item 1',
      desc: 'fsadf fdsaf dsaf fsdafdsaf f',
      src: '/assets/phone-1.webp',
    },
    {
      name: 'Item 1',
      desc: 'fsadf fdsaf dsaf fsdafdsaf f',
      src: '/assets/phone-1.webp',
    },
    {
      name: 'Item 1',
      desc: 'fsadf fdsaf dsaf fsdafdsaf f',
      src: '/assets/phone-1.webp',
    },
    {
      name: 'Item 1',
      desc: 'fsadf fdsaf dsaf fsdafdsaf f',
      src: '/assets/phone-1.webp',
    },
  ];
  return (
    <div>
      <Grid container spacing={4}>
        {myData.map((el, ind) => {
          return (
            <Grid item xs={3} key={ind}>
              <Box
                sx={{
                  width: '100%',
                  border: '1px solid grey',
                  borderRadius: '7px',
                  height: '300px',
                  textAlign: 'center',
                  p: 1,
                }}
              >
                <img src={el.src} style={{width: '100%', height: '80%'}} />
                <div style={{fontWeight: 600}}>{el.name}</div>
                <div>{el.desc}</div>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
