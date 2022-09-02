import logo from './logo.svg';
import './App.css';
import { Button, Divider, Flex, Heading, IconButton, Spacer, VStack } from '@chakra-ui/react';
import ChangeThemeComponent from './components/Theming/ChangeThemeComponent';
import { BsFillMoonFill,  } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiCodewars } from 'react-icons/si'
import { Header } from './components/Header';
import Main from './components/Main';
import CardFeatures from './components/MainComponents/CardFeatures';
import ContactForm from './components/ContactForm';
import ContactComponent from './components/Contact/ContactComponent';

function App() {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight='semibold' color='cyan.400'>
          Heading
        </Heading>
        <Spacer></Spacer>
        <IconButton ml={2} aria-label='theme' variant='outline' icon={<AiFillLinkedin/>}
          onClick={() => window.open('http://google.com/', '_blank')}
        />
        <IconButton ml={2} aria-label='theme' variant='outline' icon={<AiFillGithub/>}
          onClick={() => window.open('http://google.com/', '_blank')}
        />
        <IconButton ml={2} aria-label='theme' variant='outline' icon={<SiCodewars/>}
          onClick={() => window.open('http://google.com/', '_blank')}
        />
        <ChangeThemeComponent/>
      </Flex>
      <Header></Header>
      <Divider/>
      <Main></Main>
      <Divider/> 
      <ContactComponent/>
      
    </VStack>
  );
}

export default App;
