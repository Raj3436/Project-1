import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {useForm} from 'react-hook-form';

const DialogCreate = ({handleClose, title, formSubmit}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    formSubmit(data);
  };

  console.log(watch('example'));
  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle
          sx={{
            background: '#ded5ff',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          id='responsive-dialog-title'
        >
          <span>My Form {title}</span>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{width: '500px', m: 2, mt: 4}}>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid sx={{pt: 2}} container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label='Name'
                    fullWidth
                    error={errors.example}
                    size='small'
                    defaultValue='test'
                    {...register('example', {required: true})}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label='Email'
                    fullWidth
                    error={errors.exampleRequired}
                    size='small'
                    {...register('exampleRequired', {required: true})}
                  />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                </Grid>
              </Grid>
              <Box sx={{width: '100%', textAlign: 'center'}}>
                <Button sx={{mt: 2}} variant='contained' type='submit'>
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogCreate;
