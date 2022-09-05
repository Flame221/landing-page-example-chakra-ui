import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AiFillGithub} from 'react-icons/ai'
import { ContextQuery } from '../App';
const GithubButtonComponent = () => {
  const isLargerScreen = useContext(ContextQuery);

  return (
    <Button
          minW={isLargerScreen ? 50 : 300}
          py={7}
          leftIcon={<AiFillGithub/>}
          onClick={() => window.open('https://github.com/Flame221/', '_blank')}
          >GitHub</Button>
  )
}

export default GithubButtonComponent