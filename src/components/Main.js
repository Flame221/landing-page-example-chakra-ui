import { Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { BsFillLightningChargeFill, BsFillMoonFill, BsFillPaletteFill } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { HiCubeTransparent } from 'react-icons/hi'
import { MdAccessibility } from 'react-icons/md'
import { ContextQuery } from '../App'
import CardFeatures from './MainComponents/CardFeatures'

const Main = () => {
  const isLargerScreen = useContext(ContextQuery);

  return (
    <Stack
      py={{ base: 20, md: 36 }}
      spacing={{ base: 8, md: 14 }}
      width='100%'
      textAlign={'center'}
      >
        <Heading onClick={() => console.log(isLargerScreen)}>Our ad platform has ad types to meet all <br/> your marketing objectives.</Heading>
        <Text color={'gray.500'}>Opinionated and designed for daily use.</Text>
        <VStack spacing={{ base: 10 }} direction={'column'}>
          <Stack direction={isLargerScreen ? 'row' : 'column'} spacing={{ base: 10 }} textAlign={'start'}>
            <CardFeatures icon={<MdAccessibility/>} title='Accessible' description='Chakra UI strictly follows WAI-ARIA standards for all components.'/>
            <CardFeatures icon={<BsFillPaletteFill/>} title='Themeable' description='Customize any part of our components to match your design needs.'/>
            <CardFeatures icon={<HiCubeTransparent/>} title='Composable' description='Designed with composition in mind. Compose new components with ease.'/>
          </Stack>
          <Stack direction={isLargerScreen ? 'row' : 'column'} spacing={{ base: 10 }} textAlign={'start'}>
            <CardFeatures icon={<BsFillMoonFill/>} title='Light and Dark UI' description='Optimized for multiple color modes. Use light or dark, your choice.'/>
            <CardFeatures icon={<BsFillLightningChargeFill/>} title='Developer Experience' description='Guaranteed to boost your productivity when building your app or website.'/>
            <CardFeatures icon={<FaDiscord/>} title='Active Community' description={`We're a team of active maintainers ready to help you whenever you need.`}/>
          </Stack>
        </VStack>
      </Stack>
  )
}

export default Main