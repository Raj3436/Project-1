import React, {useEffect} from 'react';
import {useAuth} from '../../Services/Context/Auth-Context';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {Button, Grid, TextField} from '@mui/material';
const Login = () => {
  const {login} = useAuth();
  const {isAuthenticated} = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e) => {
    login(e);
    // navigate('/dashboard');
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        style={{width: '500px', margin: 'auto'}}
      >
        <h2 style={{width: '100%', textAlign: 'center'}}>Login Page</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label='Email Id'
              size='small'
              error={errors.email}
              {...register('email', {required: true})}
            />
            {errors.email && (
              <span style={{color: '#d3302f', fontSize: '12px'}}>
                This field is required
              </span>
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label='Password'
              type='password'
              fullWidth
              size='small'
              error={errors.password}
              {...register('password', {required: true})}
            />
            {errors.password && (
              <span style={{color: '#d3302f', fontSize: '12px'}}>
                This field is required
              </span>
            )}
          </Grid>

          <Grid item xs={12} md={12} sx={{textAlign: 'center'}}>
            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
