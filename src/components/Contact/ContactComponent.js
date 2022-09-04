import { Heading, Stack, useColorMode, useMediaQuery } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { MyContext } from '../../App'
import ContactForm from '../ContactForm'
import MyLinks from './MyLinks'

const ContactComponent = () => {
  const [isLargerScreen] = useMediaQuery('(min-width: 800px)');
  const isDark = useContext(MyContext);

  return (
    <Stack direction='column' align={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 10, md: 10 }}>
      <Heading>Contact Me</Heading>
      <Stack direction={isLargerScreen ? 'row' : 'column'} align={'center'} spacing={{ base: 8, md: 14 }}>
        <ContactForm/>
        <Heading>OR</Heading>
        <MyLinks/>
      </Stack>
    </Stack>
  )
}

export default ContactComponent