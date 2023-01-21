/* eslint-disable react/prop-types */

import {
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
const PostForm = ({ submitPost, post = {} }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: post,
  });

  const onSubmit = data => {
    submitPost(data);
    if (!post) reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.model}>
        <FormLabel htmlFor="firstName">Product model</FormLabel>
        <Input id="model" placeholder="Product model" {...register('model')} />
        <FormErrorMessage>
          {errors.model && errors.model.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.urlOffSite}>
        <FormLabel htmlFor="urlOffSite">URL on official site</FormLabel>
        <Input
          id="urlOffSite"
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
          {...register('info')}
        />
        <FormErrorMessage>
          {errors.info && errors.info.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
      {!post && (
        <Button mt={4} colorScheme="teal" type="button" onClick={() => reset()}>
          Clear form
        </Button>
      )}
    </form>
  );
};

export default PostForm;
