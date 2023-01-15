import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
} from '@chakra-ui/react';

import { useLogInUserMutation } from 'redux/auth/authApiSlice';
import { logIn } from 'redux/auth/authSlice';
import Toast from 'components/Toast/Toast';
import Logo from 'components/Logo/Logo';
import Footer from 'components/Footer/Footer';

const Login = () => {
  const [userCred, setUserCred] = useState({
    email: '',
    password: '',
  });
  const { addToast } = Toast();
  const dispatch = useDispatch();
  const [logInUser, { isLoading }] = useLogInUserMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    if (userCred.email === '' || userCred.password === '')
      return addToast({
        message: 'All fields is required!',
        type: 'error',
      });
    try {
      const { data, error } = await logInUser(userCred);
      if (!data)
        return addToast({ message: error.data.message, type: 'error' });
      dispatch(logIn(data));
      setUserCred({ email: '', password: '' });
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

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    setUserCred(state => ({ ...state, [name]: value }));
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
        <Box rounded={'lg'} bg="#404756" boxShadow={'lg'} p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="text">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="text"
                  name="email"
                  value={userCred.email}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={userCred.password}
                  onChange={handleInputChange}
                />
              </FormControl>
              <Stack spacing={8}>
                <Link as={NavLink} alignSelf="end" to="/reset-pass">
                  Forgot password?
                </Link>
                <Button
                  type="submit"
                  bg="sidebarActiveLinkBG"
                  color="secondaryTextColor"
                  isLoading={isLoading}
                  _hover={{
                    bg: 'buttonHover',
                    color: 'hoverColor',
                  }}
                >
                  Sign in
                </Button>
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
