import { Button } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub} from 'react-icons/ai'
const GithubButtonComponent = () => {
  return (
    <Button
          py={7}
          leftIcon={<AiFillGithub/>}
          onClick={() => window.open('https://github.com/Flame221/', '_blank')}
          >GitHub</Button>
  )
}

export default GithubButtonComponent