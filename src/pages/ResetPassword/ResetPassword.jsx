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
import Logo from 'components/Logo/Logo';
import Footer from 'components/Footer/Footer';
import BtnClickAnim from 'components/Animations/BtnClickAnim';

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
        <Logo
          display={{ base: 'flex', lg: 'none' }}
          position="absolute"
          top="20px"
          left="20px"
        />
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
            <Heading fontSize={'4xl'} textAlign="start">
              Reset password to your account
            </Heading>
          </Stack>
          <Box rounded={'lg'} bg="loginSectionBG" boxShadow={'lg'} p={8}>
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
                  <BtnClickAnim>
                    <Button
                      width="100%"
                      type="submit"
                      isLoading={isLoading}
                      variant="submitBtn"
                    >
                      Reset password
                    </Button>
                  </BtnClickAnim>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Footer display={{ base: 'flex', lg: 'none' }} mx="auto" />
      </Flex>
    </>
  );
};

export default ResetPassword;
