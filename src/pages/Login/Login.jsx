import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogInUserMutation } from 'redux/auth/authApiSlice';
import { logIn } from 'redux/auth/authSlice';

export default function Login() {
  const [value, setValue] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logInUser] = useLogInUserMutation();

  // gAcwaw-qyvra6-xyxwyv

  const handleSubmit = async e => {
    e.preventDefault();
    if (value.username === '' || value.password === '')
      return console.log('error');

    try {
      const { data } = await logInUser(value);
      console.log(data);

      dispatch(logIn(data));
      setValue({ username: '', password: '' });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    setValue(state => ({ ...state, [name]: value }));
  };

  return (
    <Flex
      minH={'calc(100vh)'}
      align={'center'}
      justify={'center'}
      bg="sectionBG"
    >
      <Stack
        spacing={8}
        mx={'auto'}
        maxW={'lg'}
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
                  name="username"
                  value={value.email}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={value.email}
                  onChange={handleInputChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  type="submit"
                  bg="sidebarActiveLinkBG"
                  color="secondaryTextColor"
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
    </Flex>
  );
}
