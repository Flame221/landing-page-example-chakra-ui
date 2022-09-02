import { Box, IconButton, Stack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import theme from '../../theme'
const CardFeatures = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Stack p="10" boxShadow="lg" borderRadius="lg"
      direction='column'
      alignItems='flex-start'
      width={300}
      height={240}
      bgColor={isDark ? 'gray.700' : 'white'}
      >
      <Box mb={2} bgColor={'cyan.400'} p={3} borderRadius="20" color={'white'}>
        {props.icon}
      </Box>
      <Text fontSize='xl' letterSpacing={1} color={'cyan.500'}>{props.title}</Text>
      <Text color={'gray.500'}>{props.description}</Text>
      <Text color={'gray.500'}>{theme.color}</Text>
      
    </Stack>
  )
}

export default CardFeatures