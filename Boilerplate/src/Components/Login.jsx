import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Card, Input } from '@material-tailwind/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
export const pawdRegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const schema = yup
  .object({
    firstname: yup.string().required('First Name is Required '),
    lastname: yup.string().required('Last Name is Required'),
    email: yup.string().required('Email is required').email(),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        pawdRegExp,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      ),
    city: yup.string().required('City Required'),
  })
  .required();

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      city: '',
    },
    resolver: yupResolver(schema),
  });
  const { updateUser, updateShowProfile } = useContext(UserContext);

  const handleSubmiter = (data) => {
    console.log('handle submit', data);
    reset();
  };
  return (
    <Card className=' Login-card w-[500px] h-[500px] m-auto mt-10'>
      <form
        onSubmit={handleSubmit(handleSubmiter)}
        className='m-auto flex flex-col gap-4 justify-center items-center '
      >
        <Controller
          name='firstname'
          control={control}
          label='FirstName'
          render={({ field }) => (
            <>
              <Input {...field} className='w-[300px]' label='First Name' />
              {errors.firstname && (
                <p className='text-red-500 text-xs'>
                  {errors.firstname.message}
                </p>
              )}
            </>
          )}
        />
        <Controller
          name='lastname'
          control={control}
          label='Lastname'
          render={({ field }) => (
            <>
              <Input {...field} className='w-[300px]' label='Last Name' />
              {errors.lastname && (
                <p className='text-red-500 text-xs'>
                  {errors.lastname.message}
                </p>
              )}
            </>
          )}
        />
        <Controller
          name='email'
          control={control}
          label='email'
          render={({ field }) => (
            <>
              <Input {...field} className='w-[300px]' label='Email' />
              {errors.email && (
                <p className='text-red-500 text-xs'>{errors.email.message}</p>
              )}
            </>
          )}
        />
        <Controller
          name='password'
          control={control}
          label='password'
          render={({ field }) => (
            <>
              <Input
                {...field}
                className='w-[300px]'
                label='Password'
                type='password'
              />
              {errors.password && (
                <p className='text-red-500 text-xs'>
                  {errors.password.message}
                </p>
              )}
            </>
          )}
        />
        <Controller
          name='city'
          control={control}
          label='City'
          render={({ field }) => (
            <>
              <Input {...field} className='w-[300px]' label='City' />
              {errors.city && (
                <p className='text-red-500 text-xs'>{errors.city.message}</p>
              )}
            </>
          )}
        />
        <Button type='submit' className='mt-4 w-full'>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
