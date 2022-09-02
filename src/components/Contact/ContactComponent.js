import { Heading, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import ContactForm from '../ContactForm'
import MyLinks from './MyLinks'

const ContactComponent = () => {
  return (
    <Stack direction='column' align={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 10, md: 10 }}>
      <Heading>Contact Me</Heading>
      <HStack spacing={{ base: 8, md: 14 }}>
        <ContactForm/>
        <Heading>OR</Heading>
        <MyLinks/>
      </HStack>
    </Stack>
  )
}

export default ContactComponent