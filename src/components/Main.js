import { Heading, HStack, Stack, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import CardFeatures from './MainComponents/CardFeatures'
import { MdAccessibility } from 'react-icons/md'
import { BsFillPaletteFill, BsFillMoonFill, BsFillLightningChargeFill } from 'react-icons/bs'
import { HiCubeTransparent } from 'react-icons/hi'
import { FaDiscord } from 'react-icons/fa'

const Main = () => {
  const [isLargerScreen] = useMediaQuery('(min-width: 800px)');

  return (
    <Stack
      py={{ base: 20, md: 36 }}
      spacing={{ base: 8, md: 14 }}
      width='100%'
      px={{ base: 20, md: 36 }}
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