import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    email: yup
      .string()
      .min(6, 'Minimal length is 6 symbols')
      .max(30, 'Maximal length is 6 symbols')
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
import { MdCheck, MdClose, MdDriveFileRenameOutline } from 'react-icons/md';
import { useChangeUserEmailMutation } from 'redux/auth/authApiSlice';

const ChangeEmail = () => {
  const [showInput, setShowInput] = useState(false);
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
      setShowInput(false);
      reset();
    } catch (error) {
      addToast({ message: error.message, type: 'error' });
    }
  };

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" gap="10px">
        {showInput ? (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex gap="10px" py="4px">
                <FormControl position="relative" isInvalid={errors.email}>
                  <Input
                    id="email"
                    size="sm"
                    variant="auth"
                    {...register('email')}
                  />
                  <IconButton
                    position="absolute"
                    top="-10px"
                    left="-10px"
                    icon={<MdClose />}
                    fontSize="18px"
                    size="xs"
                    borderRadius="full"
                    aria-label="Close form change password button"
                    color="secondaryTextColor"
                    variant="customIB"
                    onClick={() => setShowInput(false)}
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
              onClick={() => setShowInput(true)}
            />
          </>
        )}
      </Flex>
    </>
  );
};

export default ChangeEmail;
