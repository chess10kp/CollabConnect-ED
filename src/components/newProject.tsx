import {useRef} from 'react'

import {
  Box,
  MenuButton,
  Flex,
  MenuList, 
  Menu, 
  MenuItem, 
  MenuGroup, 
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  useDisclosure,
  IconButton,
  Modal, 
  FormControl, 
  ModalOverlay, 
  ModalContent, 
  ModalBody, 
  ModalCloseButton, 
  FormLabel, 
  Input, 
  ModalHeader, 
  ModalFooter
  } from "@chakra-ui/react"

const MakeProject = ({data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null);
  const newData = useRef(null);
  const newSchool = useRef(null);
  const newTags = useRef(null);
  const newSkills = useRef(null);

const saveHandler = ({data}) => {
    console.log(newData.current, newSchool.current.value, newSkills.current.value, initialRef.current.value )
}
    return (
      <>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create new Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Project name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input ref={newData} placeholder="Description" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Tags</FormLabel>
                <Input ref={newTags} placeholder="tags" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Skills required</FormLabel>
                <Input ref={newSkills} placeholder="skils" />
              </FormControl>

<Menu>
  <MenuButton as={Button} colorScheme='pink'>
    Campus
  </MenuButton>
  <MenuList>
    <MenuGroup ref={newSchool} title='Profile'>
      <MenuItem>Wayne State University</MenuItem>
      <MenuItem>University of Michigan Dearborn</MenuItem>
      <MenuItem>University of Michigan Ann Arbor</MenuItem>
      <MenuItem>Michigan State University</MenuItem>
      <MenuItem>Henry Henry Ford College</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>

            </ModalBody>

            <ModalFooter>
              <Button onClick={saveHandler} colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}



export default MakeProject


