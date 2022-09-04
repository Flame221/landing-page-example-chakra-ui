import { Button, Divider, Heading, Spacer, Stack, Text, useColorMode } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {IoMdArrowForward} from 'react-icons/io'
import { AiFillGithub} from 'react-icons/ai'
import GithubButtonComponent from './GithubButtonComponent'
import { MyContext } from '../App'
export const Header = () => {
  const isDark = useContext(MyContext);
  return (
    <Stack
      py={{ base: 20, md: 36 }}
      spacing={{ base: 8, md: 14 }}
      textAlign={'center'}
      >
      <Heading
        as='h1' 
        size='4xl'
        >
        
        Make money from <br/>
        <Text
          as={'span'}
          bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
          bgClip='text'>
              your audience
        </Text>
        
        </Heading>
        <Text color={'gray.500'}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give <br/> back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
        </Text>
        <Stack direction='row' spacing={3} align={'center'} alignSelf={'center'} >

          <Button
            color={isDark ? 'gray.700' : 'white'}
            p={7}
            colorScheme='cyan'
            rightIcon={<IoMdArrowForward />}
            >
            Get Started</Button>
            <GithubButtonComponent/>
        </Stack>
        
      </Stack>
  )
}
