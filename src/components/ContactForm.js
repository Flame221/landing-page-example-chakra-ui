import { Button, FormControl, FormErrorMessage, FormLabel, Input, useColorMode, useToast } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ContextQuery } from '../App';
const isValidEmail = email =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const ContactForm = () => {
  const toast = useToast()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }, 3000)
    })
  }
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const isLargerScreen = useContext(ContextQuery);

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <FormControl isInvalid={errors.name} py={{ md: 1 }} >
        <FormLabel htmlFor='name'>Company Name</FormLabel>
        <Input
          id='name'
          placeholder='Company Name'
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          id='email'
          placeholder='Email Address'
          {...register('email', {
            required: 'This is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <Button minW={isLargerScreen ? 50 : 300} p={4} colorScheme='cyan' mt={4} isLoading={isSubmitting} type='submit'
        color={isDark ? 'gray.700' : 'white'}>
        Submit
      </Button>
    </form>
  )
}

export default ContactForm