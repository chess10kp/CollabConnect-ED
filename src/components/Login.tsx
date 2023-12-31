import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

import {useRef} from 'react'


import "./Login.css"

const Login = ({showLogin ,isLoggedIn ,setshowLogin, setIsLoggedIn}) => {
  const username = useRef(null)
  const password = useRef(null)

  const onSubmit = () => {
    if (username.current.value == "admin" && password.current.value == "admin") {
      setshowLogin(false)
      setIsLoggedIn(true)
    }
  }
  return (
  <Container id="login-modal" maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
    <Stack spacing="8">
      <Stack spacing="6">
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
          <Text color="fg.muted">
            Don't have an account? <Link href="#">Sign up</Link>
          </Text>
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg.surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" ref={username} />
              <FormLabel htmlFor="email">Password</FormLabel>
              <Input id="email" ref={password} type="password" />
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Button variant="text" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button onClick={onSubmit}>Sign in</Button>
            <HStack>
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
  )
}

export default Login
