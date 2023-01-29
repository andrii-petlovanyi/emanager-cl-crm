import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    password: yup
      .string()
      .min(6, 'Minimal length is 6 symbols')
      .max(20, 'Maximal password length is 20 symbols')
      .required('Password is required'),
  })
  .required();

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import Toast from 'components/Toast/Toast';
import { useChangeUserPassMutation } from 'redux/auth/authApiSlice';
import { useForm } from 'react-hook-form';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import BtnClickAnim from 'components/Animations/BtnClickAnim';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { MdCheck, MdClose, MdDriveFileRenameOutline } from 'react-icons/md';

const ChangePass = () => {
  const [showInput, setShowInput] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const userId = useSelector(authSelectors.userId);
  const { addToast } = Toast();

  const [changePassword, { isLoading }] = useChangeUserPassMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ password }) => {
    try {
      const { data, error } = await changePassword({ userId, password });
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
                <FormControl isInvalid={errors.password}>
                  <InputGroup size="sm">
                    <Input
                      id="password"
                      type={showPass ? 'text' : 'password'}
                      variant="auth"
                      {...register('password')}
                    />
                    <InputRightElement>
                      <BtnClickAnim>
                        <IconButton
                          variant="customIB"
                          aria-label="Show password button"
                          onClick={() => setShowPass(!showPass)}
                          icon={
                            showPass ? <IoEyeOffOutline /> : <IoEyeOutline />
                          }
                        />
                      </BtnClickAnim>
                    </InputRightElement>
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
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
                <IconButton
                  isLoading={isLoading}
                  icon={<MdCheck />}
                  fontSize="20px"
                  size="sm"
                  bg="green.700"
                  borderRadius="5px"
                  aria-label="Change password button"
                  color="secondaryTextColor"
                  variant="customIB"
                  type="submit"
                />
              </Flex>
            </form>
          </>
        ) : (
          <>
            <Text color="primaryTextColor">Change Password</Text>
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

export default ChangePass;
