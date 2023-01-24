import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Link,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

import { useLogInUserMutation } from 'redux/auth/authApiSlice';
import { logIn } from 'redux/auth/authSlice';
import Toast from 'components/Toast/Toast';
import Logo from 'components/Logo/Logo';
import Footer from 'components/Footer/Footer';
import BtnClickAnim from 'components/Animations/BtnClickAnim';

const schema = yup
  .object({
    email: yup
      .string()
      .min(6, 'Minimal email length is 6 symbols')
      .max(30, 'Maximal email length is 6 symbols')
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Minimal password length is 6 symbols')
      .max(12, 'Maximal password length is 12 symbols')
      .required('Password is required'),
  })
  .required();

const Login = () => {
  const [show, setShow] = useState(false);
  const { addToast } = Toast();
  const dispatch = useDispatch();
  const [logInUser, { isLoading }] = useLogInUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async formData => {
    try {
      const { data, error } = await logInUser(formData);
      if (!data)
        return addToast({ message: error.data.message, type: 'error' });
      dispatch(logIn(data));
      reset();
      addToast({
        message: `${data.user.name}, welcome back!`,
        type: 'success',
      });
    } catch (error) {
      addToast({
        message: `${error.message}`,
        type: 'error',
      });
    }
  };

  return (
    <Flex
      minH={'calc(100vh)'}
      align={'center'}
      justify={'center'}
      bg="sectionBG"
    >
      <Logo
        display={{ base: 'flex', lg: 'none' }}
        position="absolute"
        top="20px"
        left="20px"
      />
      <Stack
        spacing={8}
        mx={'auto'}
        maxW={'md'}
        w="100%"
        py={12}
        px={6}
        color="secondaryTextColor"
      >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={'lg'} bg="loginSectionBG" boxShadow={'lg'} p={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input id="email" variant="auth" {...register('email')} />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    type={show ? 'text' : 'password'}
                    variant="auth"
                    {...register('password')}
                  />
                  <InputRightElement>
                    <BtnClickAnim>
                      <IconButton
                        variant="customIB"
                        onClick={() => setShow(!show)}
                        icon={show ? <IoEyeOffOutline /> : <IoEyeOutline />}
                      />
                    </BtnClickAnim>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={8}>
                <Link as={NavLink} alignSelf="end" to="/reset-pass">
                  Forgot password?
                </Link>
                <BtnClickAnim>
                  <Button
                    width="100%"
                    type="submit"
                    variant="submitBtn"
                    isLoading={isLoading || isSubmitting}
                  >
                    Sign in
                  </Button>
                </BtnClickAnim>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Footer display={{ base: 'flex', lg: 'none' }} mx="auto" />
    </Flex>
  );
};

export default Login;
