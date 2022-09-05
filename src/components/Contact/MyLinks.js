import { Button, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Spacer, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import GithubButtonComponent from '../GithubButtonComponent'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ContextQuery } from '../../App'

const MyLinks = () => {
  const email = 'dmytrochornyi221@gmail.com'
  const [state, setState] = useState(false);
  const isLargerScreen = useContext(ContextQuery);

  return (
    <VStack align={'start'}>
      <GithubButtonComponent/>
      <Button
          minW={isLargerScreen ? 50 : 300}
          py={7}
          leftIcon={<BsLinkedin/>}
          onClick={() => window.open('https://www.linkedin.com/in/dmytro-chornyi-96103a212/', '_blank')}
          >Linkedin</Button>
      <Popover>
        <PopoverTrigger>
          <Button
            py={7}
            leftIcon={<MdEmail/>}
            minW={isLargerScreen ? 50 : 300}
            >Email</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow/>
          <PopoverCloseButton/>
          <PopoverHeader>My Email</PopoverHeader>
          <PopoverBody>
            {email}
            <CopyToClipboard text={email}
              onCopy={() => setState(true)}>
            {/* <Button m={3}>{state.copied ? 'Copied' : 'Copy'}</Button> */}
            <Button m={3}>{state ? 'Copied' : 'Copy'}</Button>
            </CopyToClipboard> 
          </PopoverBody>
        </PopoverContent>
      </Popover>
      

    </VStack>
  )
}

export default MyLinks