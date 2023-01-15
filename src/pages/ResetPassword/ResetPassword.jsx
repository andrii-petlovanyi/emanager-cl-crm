import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useResetUserPassMutation } from 'redux/auth/authApiSlice';
import Toast from 'components/Toast/Toast';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { addToast } = Toast();
  const [resetUserPass, { isLoading }] = useResetUserPassMutation();

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.email.value.trim();

    if (!email.length)
      return addToast({ message: 'Please enter your email', type: 'error' });

    try {
      const { data, error } = await resetUserPass(email);
      if (!data)
        return addToast({ message: error.data.message, type: 'error' });

      addToast({ message: data.message, type: 'success' });
      form.reset();
      navigate('/login');
    } catch (error) {
      addToast({ message: error.message, type: 'error' });
    }
  };

  return (
    <>
      <Flex
        minH={'calc(100vh)'}
        align={'center'}
        justify={'center'}
        bg="sectionBG"
      >
        <Stack
          spacing={6}
          mx={'auto'}
          maxW={'md'}
          w="100%"
          py={12}
          px={6}
          color="secondaryTextColor"
        >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign="center">
              Reset password to your account
            </Heading>
          </Stack>
          <Box rounded={'lg'} bg="#404756" boxShadow={'lg'} p={8}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="text">
                  <FormLabel>Email address</FormLabel>
                  <Input type="text" name="email" />
                </FormControl>
                <Stack spacing={8}>
                  <Link as={NavLink} alignSelf="end" to="/login">
                    Back to sign in?
                  </Link>
                  <Button
                    type="submit"
                    bg="sidebarActiveLinkBG"
                    color="secondaryTextColor"
                    _hover={{
                      bg: 'buttonHover',
                      color: 'hoverColor',
                    }}
                    isLoading={isLoading}
                  >
                    Reset password
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default ResetPassword;
