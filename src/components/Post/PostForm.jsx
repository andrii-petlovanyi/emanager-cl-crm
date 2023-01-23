/* eslint-disable react/prop-types */

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect } from 'react';
import BtnClickAnim from 'components/Animations/BtnClickAnim';

const schema = yup
  .object({
    model: yup
      .string()
      .min(3, 'Minimal model length is 3 symbols')
      .max(16, 'Max model length is 16 symbols')
      .required('This field is required'),
    urlOffSite: yup
      .string()
      .url('Please enter a valid url address')
      .min(6, 'Minimal url length is 6 symbols')
      .required('This field is required'),
    urlBook: yup
      .string()
      .url('Please enter a valid url address')
      .min(6, 'Minimal url length is 6 symbols')
      .required('This field is required'),
    urlImg: yup
      .string()
      .url('Please enter a valid url address')
      .min(6, 'Minimal url length is 6 symbols')
      .required('This field is required'),
    info: yup
      .string()
      .min(20, 'Minimal text length is 20 symbols')
      .required('This field is required'),
  })
  .required();

/* eslint-disable no-unused-vars */
const PostForm = ({ submitPost, post = {}, isLoading, resetForm = false }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: post,
  });

  useEffect(() => {
    if (resetForm) reset();
  }, [resetForm]);

  const onSubmit = data => {
    submitPost(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap="20px" width="100%">
        <FormControl isInvalid={errors.model}>
          <FormLabel htmlFor="firstName">Product model</FormLabel>
          <Input
            id="model"
            variant="custom"
            placeholder="Product model"
            {...register('model')}
          />
          <FormErrorMessage>
            {errors.model && errors.model.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.urlOffSite}>
          <FormLabel htmlFor="urlOffSite">URL on official site</FormLabel>
          <Input
            id="urlOffSite"
            variant="custom"
            placeholder="URL on official site"
            {...register('urlOffSite')}
          />
          <FormErrorMessage>
            {errors.urlOffSite && errors.urlOffSite.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.urlBook}>
          <FormLabel htmlFor="urlBook">URL on documentations</FormLabel>
          <Input
            id="urlBook"
            variant="custom"
            placeholder="URL on documentations"
            {...register('urlBook')}
          />
          <FormErrorMessage>
            {errors.urlBook && errors.urlBook.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.urlImg}>
          <FormLabel htmlFor="urlImg">URL on product img</FormLabel>
          <Input
            id="urlImg"
            variant="custom"
            placeholder="URL on product img"
            {...register('urlImg')}
          />
          <FormErrorMessage>
            {errors.urlImg && errors.urlImg.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.info}>
          <FormLabel htmlFor="info">Info about product</FormLabel>
          <Textarea
            id="info"
            placeholder="Info about product"
            _focus={{
              borderColor: 'primaryTextColor',
              boxShadow: '0 0 1px 1px #D3D3D333',
            }}
            {...register('info')}
          />
          <FormErrorMessage>
            {errors.info && errors.info.message}
          </FormErrorMessage>
        </FormControl>
        <Box display="flex" justifyContent="space-between">
          <BtnClickAnim>
            <Button
              mt={4}
              variant="submitBtn"
              isLoading={isSubmitting || isLoading}
              type="submit"
            >
              Submit
            </Button>
          </BtnClickAnim>
          {!Object.keys(post).length && (
            <BtnClickAnim>
              <Button
                mt={4}
                variant="clearBtn"
                type="button"
                onClick={() => reset()}
              >
                Clear form
              </Button>
            </BtnClickAnim>
          )}
        </Box>
      </Box>
    </form>
  );
};

export default PostForm;
