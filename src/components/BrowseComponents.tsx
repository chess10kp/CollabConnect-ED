import { useState, useRef, } from "react";
import {
  Flex,
  useDisclosure,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Heading,
  Box,
  FormControl,
  Select,

} from "@chakra-ui/react";

import MakeProject from "./newProject.tsx"

const data = [
  {
    id: 1,
    title: "Mobile App Development",
    problemStatement:
      "Develop a feature-rich mobile app, from concept to deployment, using cutting-edge technologies.",
    skills_needed: [
      "Mobile App Development",
      "Programming",
      "User Interface Design",
    ],
    members: ["John Smith", "Sarah Brown"],
    skills_met: [],
    campus: "Wayne State University",
    image: "https://i.pinimg.com/564x/d2/b4/19/d2b4197ad5ba872aa709aaf5af7fcc87.jpg",
  },
  {
    id: 2,
    title: "Autonomous Drone",
    problemStatement:
      "Build an autonomous drone capable of obstacle avoidance and remote control via a smartphone app.",
    skills_needed: [
      "Drone Technology",
      "AI Programming",
      "Electrical Engineering",
    ],
    members: ["Michael Johnson", "Emily White"],
    skills_met: [],
    campus: "Wayne State University",
    image: "https://i.pinimg.com/564x/e9/35/5d/e9355d76c984cf6b32754b8ac311e56f.jpg",
  },
  {
    id: 3,
    title: "3D Printer Construction",
    problemStatement:
      "Assemble a 3D printer kit and optimize its performance, exploring the world of additive manufacturing.",
    skills_needed: ["3D Printing", "Mechanical Engineering", "CAD Design"],
    members: ["Alex Turner", "Olivia Green"],
    skills_met: [],
    campus: "Michigan State University",
    image: "https://i.pinimg.com/564x/24/0a/e3/240ae3a16ddb4eda0cbdf8412d20ae79.jpg",
  },
  {
    id: 4,
    title: "Cybersecurity Workshop",
    problemStatement:
      "Organize and host a workshop on cybersecurity best practices, including hands-on exercises and demos.",
    skills_needed: ["Cybersecurity", "Network Security", "IT Training"],
    members: ["Daniel Lee", "Sophia Martinez"],
    skills_met: [],
    campus: "Michigan State University",
    image: "https://i.pinimg.com/564x/3f/2e/e1/3f2ee171d7b29ffc6c21124bc4bbdc68.jpg",
  },
  {
    id: 5,
    title: "Internet of Things (IoT) Device",
    problemStatement:
      "Create a functional IoT device, integrating sensors and microcontrollers for data collection and analysis.",
    skills_needed: ["IoT Development", "Embedded Systems", "Sensor Technology"],
    members: ["William Davis", "Emma Wright"],
    skills_met: [],
    campus: "University of Michigan Dearborn",
    image:"https://i.pinimg.com/564x/cf/13/a8/cf13a8d6516b7c141ded804db293e643.jpg" ,
  },
  {
    id: 6,
    title: "Augmented Reality (AR) Game",
    problemStatement:
      "Develop an AR game that blends virtual elements with the real world using AR technology.",
    skills_needed: [
      "Machine Learning",
      "AR Development",
      "Game Design",
      "Computer Vision",
    ],
    members: ["Matthew Adams", "Ava Johnson"],
    skills_met: [],
    campus: "University of Michigan Dearborn",
    image:"https://i.pinimg.com/564x/3e/74/20/3e7420de18583b530e0d048ae78056f9.jpg",
  },
  {
    id: 7,
    title: "Machine Learning Research",
    problemStatement:
      "Conduct research in machine learning algorithms, aiming to address a real-world problem or improve existing solutions.",
    skills_needed: ["Machine Learning", "Data Science", "AI Research"],
    skills_met: [],
    members: ["James Wilson", "Grace Clark"],
    campus: "University of Michigan Ann Arbor",
    image: "https://i.pinimg.com/564x/a9/cc/c5/a9ccc578e32f35ceac0b8ac1f081c3d4.jpg",
  },
  {
    id: 9,
    title: "Renewable Energy Monitoring",
    problemStatement:
      "Create a system for monitoring and analyzing renewable energy sources, such as solar panels and wind turbines.",
    skills_needed: ["Renewable Energy", "Data Analysis", "Sustainability"],
    members: ["Ethan Miller", "Mia Anderson"],
    skills_met: [],
    campus: "Henry Ford College",
    image: "https://i.pinimg.com/564x/0c/ef/ca/0cefcaf2bb670cd12ed9058379b6d061.jpg",
  },
  {
    id: 10,
    title: "Virtual Reality (VR) Simulation",
    problemStatement:
      "Develop an immersive VR simulation to provide a unique educational or training experience.",
    skills_needed: ["VR Development", "3D Modeling", "Immersive Technology"],
    skills_met: [],
    members: ["Jacob Brown", "Nora Taylor"],
    campus: "Henry Ford College",
    image:"https://i.pinimg.com/564x/7a/9b/46/7a9b46e67de2cea0b0b82b43f207a0d8.jpg" ,
  },
];

// const checkIndex = (inputString) =>  {
//     if (index[inputString]) 
//     return data[index[inputString]]
//     return [] 
// }

const BrowseProjects = ({ }) => {
  const [skills, setSkills] = useState("");
  const [campus, setCampus] = useState("");
  const projects = useRef([{}])
  const [makeNewProject, setMakeNewProject] = useState(true)

  const skillChangeHandler = (event) => {
    setSkills(event.target.value);
  };
 

  // const filterProjects = () => {
  //   const filteredSkills = checkIndex(skills)
  //   projects.current = data.filter((item) => {
  //     const isCollege = (campus) ? (item.campus == campus) : true;
  //     const isSkill = (filteredSkills) ? true : false;
  //     return isCollege && isSkill;
  //   })
  // }

  const campusChangeHandler = (event) => {
    setCampus(event.target.value);
    projects.current = data.filter((item) => {
      return (item.campus == campus)
    }
    )
  };

  const joinProject = ({id, name}) => {
      data[id].members.push(name)
      // filterProjects();
  }


  if (projects.current.length == 1 )
  return (
    <>
      <Filter
        skills={skills}
        campus={campus}
        skillChangeHandler={skillChangeHandler}
        campusChangeHandler={campusChangeHandler}
        filteredProjects={projects}
      ></Filter>
      <Flex justifyContent="center" alignItems="center" minH="100vh" flexWrap={"wrap"}  flexDirection={"row"}>
      {data.map((listitem) => (
        <ProjectItem 
          joinProject={joinProject}
          key={listitem.id}
          title={listitem.title}
          description={listitem.problemStatement}
          people={listitem.members}
          skills={listitem.skills_needed}
          campus={listitem.campus}
          imgurl={listitem.image}
        />
      ))}
      </Flex>
    </>
  );
  else 
  return (
    <>
      <Filter
        skills={skills}
        campus={campus}
        skillChangeHandler={skillChangeHandler}
        campusChangeHandler={campusChangeHandler}
        filteredProjects={projects}
      ></Filter>
      <Flex flexWrap={"wrap"} alignItems={"center"} flexDirection={"row"}>
      {projects.current.map((listitem) => (
        <ProjectItem
          key={listitem.id}
          joinProject={joinProject}
          title={listitem.title}
          description={listitem.problemStatement}
          people={listitem.members}
          skills={listitem.skills_needed}
          campus={listitem.campus}
          imgurl={listitem.image}
        />
      ))}
      </Flex>
      {isMakingNewProject && <MakeProject data={projects}></MakeProject>}
    </>
  );

};

const Filter = ({
  skills,
  campus,
  skillChangeHandler,
  campusChangeHandler,
  filteredProjects, 
}) => {
  return (
    <FormControl>
      <Select
        value={campus}
        onChange={campusChangeHandler}
        placeholder="University"
      >
        <option>University of Michigan Ann Arbor</option>
        <option>University of Michigan Dearborn</option>
        <option>Henry Ford College</option>
        <option>Wayne State University</option>
        <option>Michigan State University</option>
      </Select>
      {/* <FormControl> */}
      {/*   <FormLabel>Skills</FormLabel> */}
      {/*   <Input type="skills" value={skills} onChange={skillChangeHandler} /> */}
      {/* </FormControl> */}
    </FormControl>
  );
};

const ProjectItem = ({
  title,
  description,
  people,
  skills,
  campus,
  imgurl,
  joinProject,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
<Card maxW='sm'>
  <CardBody>
    <Image
      objectFit={"cover"}
      boxSize='150px'
      src={imgurl}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>{description}</Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={joinProject}>
        Join now
      </Button>
      <Button variant='ghost' colorScheme='blue' onClick={onOpen}>
        View project
      </Button>
    </ButtonGroup>
  </CardFooter>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {description}
          <Card>
            <CardHeader>
            </CardHeader>
            <CardBody>
            {people.map((person) => {
                  return (
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Text pt='2' fontSize='sm'>
                        {person}
                  </Text>
                </Box>
              </Stack>
                  )
                })}
                </CardBody>
          </Card>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Card>  
  )};

export default BrowseProjects;
