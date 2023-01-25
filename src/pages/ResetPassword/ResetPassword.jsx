import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useResetUserPassMutation } from 'redux/auth/authApiSlice';
import Toast from 'components/Toast/Toast';
import Logo from 'components/Logo/Logo';
import Footer from 'components/Footer/Footer';
import BtnClickAnim from 'components/Animations/BtnClickAnim';

const schema = yup.object({
  email: yup
    .string()
    .min(6, 'Minimal email length is 6 symbols')
    .max(30, 'Maximal email length is 6 symbols')
    .email('Invalid email format')
    .required('Email is required'),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const { addToast } = Toast();
  const [resetUserPass, { isLoading }] = useResetUserPassMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async formData => {
    console.log(formData.email);
    try {
      const { data, error } = await resetUserPass(formData.email);
      if (!data)
        return addToast({ message: error.data.message, type: 'error' });

      addToast({ message: data.message, type: 'success' });
      reset();
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
        flexDirection="column"
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    type="text"
                    id="email"
                    variant="auth"
                    {...register('email')}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <Stack spacing={8}>
                  <Link as={NavLink} alignSelf="end" to="/login">
                    Back to sign in?
                  </Link>
                  <BtnClickAnim>
                    <Button
                      width="100%"
                      type="submit"
                      isLoading={isLoading || isSubmitting}
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
        <Flex display={{ base: 'flex', lg: 'none' }}>
          <Footer
            display={{ base: 'flex', lg: 'none' }}
            mx="auto"
            transform="translateX(-50%)"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default ResetPassword;
