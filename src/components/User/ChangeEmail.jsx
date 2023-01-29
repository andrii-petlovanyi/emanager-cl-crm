import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    email: yup
      .string()
      .min(6, 'Minimal email length is 6 symbols')
      .max(30, 'Maximal email length is 6 symbols')
      .email('Invalid email format')
      .required('Email is required'),
  })
  .required();

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import Toast from 'components/Toast/Toast';
import { useForm } from 'react-hook-form';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react';
import { MdCheck, MdDriveFileRenameOutline } from 'react-icons/md';
import { useChangeUserEmailMutation } from 'redux/auth/authApiSlice';

const ChangeEmail = () => {
  const [emailInput, setEmailInput] = useState(false);
  const userId = useSelector(authSelectors.userId);
  const { addToast } = Toast();

  const [changeUserEmail, { isLoading }] = useChangeUserEmailMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email }) => {
    try {
      const { data, error } = await changeUserEmail({ userId, email });
      if (error)
        return addToast({ message: error.data.message, type: 'error' });

      addToast({ message: data.message, type: 'success' });
      setEmailInput(false);
      reset();
    } catch (error) {
      addToast({ message: error.message, type: 'error' });
    }
  };

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" gap="10px">
        {emailInput ? (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex gap="10px">
                <FormControl isInvalid={errors.email}>
                  <Input
                    id="email"
                    size="sm"
                    variant="auth"
                    {...register('email')}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <IconButton
                  isLoading={isLoading}
                  icon={<MdCheck />}
                  fontSize="20px"
                  size="sm"
                  bg="green.700"
                  borderRadius="5px"
                  color="secondaryTextColor"
                  variant="customIB"
                  type="submit"
                />
              </Flex>
            </form>
          </>
        ) : (
          <>
            <Text color="primaryTextColor">Change Email</Text>
            <IconButton
              variant="customIB"
              fontSize="22px"
              icon={<MdDriveFileRenameOutline />}
              isLoading={isSubmitting}
              onClick={() => setEmailInput(true)}
            />
          </>
        )}
      </Flex>
    </>
  );
};

export default ChangeEmail;
