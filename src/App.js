import { Divider, Flex, Heading, IconButton, Spacer, useColorMode, useMediaQuery, VStack } from '@chakra-ui/react';
import React, { createContext } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';
import './App.css';
import ContactComponent from './components/Contact/ContactComponent';
import { Header } from './components/Header';
import Main from './components/Main';
import ChangeThemeComponent from './components/Theming/ChangeThemeComponent';

export const MyContext = createContext('');
export const ContextQuery = createContext('');

function App() {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isLargerScreen] = useMediaQuery('(min-width: 800px)');

  return (
    <ContextQuery.Provider value={isLargerScreen}>
      <MyContext.Provider value={isDark}> 
        <VStack p={5}>
          <Flex w="100%" align={'center'}>
            <Heading ml={isLargerScreen ? "8" : '0'} size="md" fontWeight='semibold' color='cyan.400'>
              Heading
            </Heading>
            <Spacer></Spacer>
            <IconButton ml={2} aria-label='theme' variant='outline' icon={<AiFillLinkedin/>}
              onClick={() => window.open('https://www.linkedin.com/in/dmytro-chornyi-96103a212/', '_blank')}
            />
            <IconButton ml={2} aria-label='theme' variant='outline' icon={<AiFillGithub/>}
              onClick={() => window.open('https://github.com/Flame221', '_blank')}
            />
            <IconButton ml={2} aria-label='theme' variant='outline' icon={<SiCodewars/>}
              onClick={() => window.open('https://www.codewars.com/users/Flame221', '_blank')}
            />
            <ChangeThemeComponent/>
          </Flex>
          <Header></Header>
          <Divider/>
          <Main></Main>
          <Divider/>
          <ContactComponent/>
        </VStack>
      </MyContext.Provider>
    </ContextQuery.Provider>
  );
}

export default App;