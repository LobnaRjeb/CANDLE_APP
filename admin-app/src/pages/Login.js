import React from 'react';
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

const Login = () => {
  // const dispatch = useDispatch();
  const schema = Yup.object().shape({
    email: Yup.string().email('Email Should be Valid').required('Email is Required'),
    password: Yup.string().required('Password is Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // dispatch(login(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='py-5' style={{ background: '#ff6347', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center title'>Login</h3>
        <p className='text-center'>Login to your account to continue.</p>
        <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput
            type='text'
            name='email'
            label='Email Address'
            id='email'
            val={formik.values.email}
            onCh={formik.handleChange}
          />
          <div className='error'>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
          <CustomInput
            type='password'
            name='password'
            label='Password'
            id='pass'
            val={formik.values.password}
            onCh={formik.handleChange}
          />
          <div className='error'>
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
          </div>
          <div className='mb-3 text-end'>
            <Link to='forgot-password' className=''>
              Forgot Password?
            </Link>
          </div>
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
            style={{ background: '#ff6347' }}
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
