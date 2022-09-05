import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { ContextQuery, MyContext } from '../App'
import GithubButtonComponent from './GithubButtonComponent'
export const Header = () => {
  const isDark = useContext(MyContext);
  const isLargerScreen = useContext(ContextQuery);

  const getStartedHandler = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Stack
      py={{ base: 20, md: 36 }}
      spacing={{ base: 8, md: 14 }}
      textAlign={'center'}
      >
      <Heading
        as='h1' 
        size={isLargerScreen ? '4xl' : '3xl'}
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
        <Stack direction={isLargerScreen ? 'row' : 'column'} spacing={3} align={'center'} alignSelf={'center'}>

          <Button
            minW={isLargerScreen ? 50 : 300}
            color={isDark ? 'gray.700' : 'white'}
            p={7}
            fullWidth
            colorScheme='cyan'
            rightIcon={<IoMdArrowForward />}
            onClick={getStartedHandler}
            >
            Get Started</Button>
            <GithubButtonComponent/>
        </Stack>
        
      </Stack>
  )
}
