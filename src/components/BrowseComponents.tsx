import { useState, useRef, useEffect } from "react";
import {
  Text,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Heading,
  Box,
  list,
  propNames,
} from "@chakra-ui/react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
} from "@chakra-ui/react";
import { useMiniSearch } from "react-minisearch";


const index = 
{
  '3': [ 3, 10 ],
  '': [
    1,  2, 
    3,  4,  5,
    6,  7, 8, 9,10
  ],
  'M': [ 1, 3, 6, 7, 8 ],
  'Mo': [ 1 ],
  'Mob': [ 1 ],
  'Mobi': [ 1 ],
  'Mobil': [ 1 ],
  'Mobile': [ 1 ],
  'Mobile ': [ 1 ],
  'Mobile A': [ 1 ],
  'Mobile Ap': [ 1 ],
  'Mobile App': [ 1 ],
  'Mobile App ': [ 1 ],
  'Mobile App D': [ 1 ],
  'Mobile App De': [ 1 ],
  'Mobile App Dev': [ 1 ],
  'Mobile App Deve': [ 1 ],
  'Mobile App Devel': [ 1 ],
  'Mobile App Develo': [ 1 ],
  'Mobile App Develop': [ 1 ],
  'Mobile App Developm': [ 1 ],
  'Mobile App Developme': [ 1 ],
  'Mobile App Developmen': [ 1 ],
  'P': [ 1, 8 ],
  'Pr': [ 1, 8 ],
  'Pro': [ 1, 8 ],
  'Prog': [ 1, 8 ],
  'Progr': [ 1, 8 ],
  'Progra': [ 1, 8 ],
  'Program': [ 1, 8 ],
  'Programm': [ 1, 8 ],
  'Programmi': [ 1, 8 ],
  'Programmin': [ 1, 8 ],
  'S': [ 1, 5, 9 ],
  'So': [ 1 ],
  'Sof': [ 1 ],
  'Soft': [ 1 ],
  'Softw': [ 1 ],
  'Softwa': [ 1 ],
  'Softwar': [ 1 ],
  'Software': [ 1 ],
  'Software ': [ 1 ],
  'Software E': [ 1 ],
  'Software En': [ 1 ],
  'Software Eng': [ 1 ],
  'Software Engi': [ 1 ],
  'Software Engin': [ 1 ],
  'Software Engine': [ 1 ],
  'Software Enginee': [ 1 ],
  'Software Engineer': [ 1 ],
  'Software Engineeri': [ 1 ],
  'Software Engineerin': [ 1 ],
  'U': [ 1 ],
  'Us': [ 1 ],
  'Use': [ 1 ],
  'User': [ 1 ],
  'User ': [ 1 ],
  'User I': [ 1 ],
  'User In': [ 1 ],
  'User Int': [ 1 ],
  'User Inte': [ 1 ],
  'User Inter': [ 1 ],
  'User Interf': [ 1 ],
  'User Interfa': [ 1 ],
  'User Interfac': [ 1 ],
  'User Interface': [ 1 ],
  'User Interface ': [ 1 ],
  'User Interface D': [ 1 ],
  'User Interface De': [ 1 ],
  'User Interface Des': [ 1 ],
  'User Interface Desi': [ 1 ],
  'User Interface Desig': [ 1 ],
  'D': [ 2, 7, 9 ],
  'Dr': [ 2 ],
  'Dro': [ 2 ],
  'Dron': [ 2 ],
  'Drone': [ 2 ],
  'Drone ': [ 2 ],
  'Drone T': [ 2 ],
  'Drone Te': [ 2 ],
  'Drone Tec': [ 2 ],
  'Drone Tech': [ 2 ],
  'Drone Techn': [ 2 ],
  'Drone Techno': [ 2 ],
  'Drone Technol': [ 2 ],
  'Drone Technolo': [ 2 ],
  'Drone Technolog': [ 2 ],
  'A': [ 2, 6, 7 ],
  'AI': [ 2, 7 ],
  'AI ': [ 2, 7 ],
  'AI P': [ 2 ],
  'AI Pr': [ 2 ],
  'AI Pro': [ 2 ],
  'AI Prog': [ 2 ],
  'AI Progr': [ 2 ],
  'AI Progra': [ 2 ],
  'AI Program': [ 2 ],
  'AI Programm': [ 2 ],
  'AI Programmi': [ 2 ],
  'AI Programmin': [ 2 ],
  'E': [ 2, 5 ],
  'El': [ 2 ],
  'Ele': [ 2 ],
  'Elec': [ 2 ],
  'Elect': [ 2 ],
  'Electr': [ 2 ],
  'Electri': [ 2 ],
  'Electric': [ 2 ],
  'Electrica': [ 2 ],
  'Electrical': [ 2 ],
  'Electrical ': [ 2 ],
  'Electrical E': [ 2 ],
  'Electrical En': [ 2 ],
  'Electrical Eng': [ 2 ],
  'Electrical Engi': [ 2 ],
  'Electrical Engin': [ 2 ],
  'Electrical Engine': [ 2 ],
  'Electrical Enginee': [ 2 ],
  'Electrical Engineer': [ 2 ],
  'Electrical Engineeri': [ 2 ],
  'Electrical Engineerin': [ 2 ],
  '3D': [ 3, 10 ],
  '3D ': [ 3, 10 ],
  '3D P': [ 3 ],
  '3D Pr': [ 3 ],
  '3D Pri': [ 3 ],
  '3D Prin': [ 3 ],
  '3D Print': [ 3 ],
  '3D Printi': [ 3 ],
  '3D Printin': [ 3 ],
  'Me': [ 3, 8 ],
  'Mec': [ 3, 8 ],
  'Mech': [ 3, 8 ],
  'Mecha': [ 3, 8 ],
  'Mechan': [ 3, 8 ],
  'Mechani': [ 3, 8 ],
  'Mechanic': [ 3, 8 ],
  'Mechanica': [ 3, 8 ],
  'Mechanical': [ 3, 8 ],
  'Mechanical ': [ 3, 8 ],
  'Mechanical E': [ 3, 8 ],
  'Mechanical En': [ 3, 8 ],
  'Mechanical Eng': [ 3, 8 ],
  'Mechanical Engi': [ 3, 8 ],
  'Mechanical Engin': [ 3, 8 ],
  'Mechanical Engine': [ 3, 8 ],
  'Mechanical Enginee': [ 3, 8 ],
  'Mechanical Engineer': [ 3, 8 ],
  'Mechanical Engineeri': [ 3, 8 ],
  'Mechanical Engineerin': [ 3, 8 ],
  'C': [ 3, 4, 6 ],
  'CA': [ 3 ],
  'CAD': [ 3 ],
  'CAD ': [ 3 ],
  'CAD D': [ 3 ],
  'CAD De': [ 3 ],
  'CAD Des': [ 3 ],
  'CAD Desi': [ 3 ],
  'CAD Desig': [ 3 ],
  'Cy': [ 4 ],
  'Cyb': [ 4 ],
  'Cybe': [ 4 ],
  'Cyber': [ 4 ],
  'Cybers': [ 4 ],
  'Cyberse': [ 4 ],
  'Cybersec': [ 4 ],
  'Cybersecu': [ 4 ],
  'Cybersecur': [ 4 ],
  'Cybersecuri': [ 4 ],
  'Cybersecurit': [ 4 ],
  'N': [ 4 ],
  'Ne': [ 4 ],
  'Net': [ 4 ],
  'Netw': [ 4 ],
  'Netwo': [ 4 ],
  'Networ': [ 4 ],
  'Network': [ 4 ],
  'Network ': [ 4 ],
  'Network S': [ 4 ],
  'Network Se': [ 4 ],
  'Network Sec': [ 4 ],
  'Network Secu': [ 4 ],
  'Network Secur': [ 4 ],
  'Network Securi': [ 4 ],
  'Network Securit': [ 4 ],
  "I": [ 4, 5, 10 ],
  'IT': [ 4 ],
  'IT ': [ 4 ],
  'IT T': [ 4 ],
  'IT Tr': [ 4 ],
  'IT Tra': [ 4 ],
  'IT Trai': [ 4 ],
  'IT Train': [ 4 ],
  'IT Traini': [ 4 ],
  'IT Trainin': [ 4 ],
  'Io': [ 5 ],
  'IoT': [ 5 ],
  'IoT ': [ 5 ],
  'IoT D': [ 5 ],
  'IoT De': [ 5 ],
  'IoT Dev': [ 5 ],
  'IoT Deve': [ 5 ],
  'IoT Devel': [ 5 ],
  'IoT Develo': [ 5 ],
  'IoT Develop': [ 5 ],
  'IoT Developm': [ 5 ],
  'IoT Developme': [ 5 ],
  'IoT Developmen': [ 5 ],
  'Em': [ 5 ],
  'Emb': [ 5 ],
  'Embe': [ 5 ],
  'Embed': [ 5 ],
  'Embedd': [ 5 ],
  'Embedde': [ 5 ],
  'Embedded': [ 5 ],
  'Embedded ': [ 5 ],
  'Embedded S': [ 5 ],
  'Embedded Sy': [ 5 ],
  'Embedded Sys': [ 5 ],
  'Embedded Syst': [ 5 ],
  'Embedded Syste': [ 5 ],
  'Embedded System': [ 5 ],
  'Se': [ 5 ],
  'Sen': [ 5 ],
  'Sens': [ 5 ],
  'Senso': [ 5 ],
  'Sensor': [ 5 ],
  'Sensor ': [ 5 ],
  'Sensor T': [ 5 ],
  'Sensor Te': [ 5 ],
  'Sensor Tec': [ 5 ],
  'Sensor Tech': [ 5 ],
  'Sensor Techn': [ 5 ],
  'Sensor Techno': [ 5 ],
  'Sensor Technol': [ 5 ],
  'Sensor Technolo': [ 5 ],
  'Sensor Technolog': [ 5 ],
  'Ma': [ 6, 7 ],
  'Mac': [ 6, 7 ],
  'Mach': [ 6, 7 ],
  'Machi': [ 6, 7 ],
  'Machin': [ 6, 7 ],
  'Machine': [ 6, 7 ],
  'Machine ': [ 6, 7 ],
  'Machine L': [ 6, 7 ],
  'Machine Le': [ 6, 7 ],
  'Machine Lea': [ 6, 7 ],
  'Machine Lear': [ 6, 7 ],
  'Machine Learn': [ 6, 7 ],
  'Machine Learni': [ 6, 7 ],
  'Machine Learnin': [ 6, 7 ],
  'AR': [ 6 ],
  'AR ': [ 6 ],
  'AR D': [ 6 ],
  'AR De': [ 6 ],
  'AR Dev': [ 6 ],
  'AR Deve': [ 6 ],
  'AR Devel': [ 6 ],
  'AR Develo': [ 6 ],
  'AR Develop': [ 6 ],
  'AR Developm': [ 6 ],
  'AR Developme': [ 6 ],
  'AR Developmen': [ 6 ],
  'G': [ 6 ],
  'Ga': [ 6 ],
  'Gam': [ 6 ],
  'Game': [ 6 ],
  'Game ': [ 6 ],
  'Game D': [ 6 ],
  'Game De': [ 6 ],
  'Game Des': [ 6 ],
  'Game Desi': [ 6 ],
  'Game Desig': [ 6 ],
  'Co': [ 6 ],
  'Com': [ 6 ],
  'Comp': [ 6 ],
  'Compu': [ 6 ],
  'Comput': [ 6 ],
  'Compute': [ 6 ],
  'Computer': [ 6 ],
  'Computer ': [ 6 ],
  'Computer V': [ 6 ],
  'Computer Vi': [ 6 ],
  'Computer Vis': [ 6 ],
  'Computer Visi': [ 6 ],
  'Computer Visio': [ 6 ],
  'Da': [ 7, 9 ],
  'Dat': [ 7, 9 ],
  'Data': [ 7, 9 ],
  'Data ': [ 7, 9 ],
  'Data S': [ 7 ],
  'Data Sc': [ 7 ],
  'Data Sci': [ 7 ],
  'Data Scie': [ 7 ],
  'Data Scien': [ 7 ],
  'Data Scienc': [ 7 ],
  'AI R': [ 7 ],
  'AI Re': [ 7 ],
  'AI Res': [ 7 ],
  'AI Rese': [ 7 ],
  'AI Resea': [ 7 ],
  'AI Resear': [ 7 ],
  'AI Researc': [ 7 ],
  'R': [ 8, 9 ],
  'Ro': [ 8 ],
  'Rob': [ 8 ],
  'Robo': [ 8 ],
  'Robot': [ 8 ],
  'Roboti': [ 8 ],
  'Robotic': [ 8 ],
  'Re': [ 9 ],
  'Ren': [ 9 ],
  'Rene': [ 9 ],
  'Renew': [ 9 ],
  'Renewa': [ 9 ],
  'Renewab': [ 9 ],
  'Renewabl': [ 9 ],
  'Renewable': [ 9 ],
  'Renewable ': [ 9 ],
  'Renewable E': [ 9 ],
  'Renewable En': [ 9 ],
  'Renewable Ene': [ 9 ],
  'Renewable Ener': [ 9 ],
  'Renewable Energ': [ 9 ],
  'Data A': [ 9 ],
  'Data An': [ 9 ],
  'Data Ana': [ 9 ],
  'Data Anal': [ 9 ],
  'Data Analy': [ 9 ],
  'Data Analys': [ 9 ],
  'Data Analysi': [ 9 ],
  'Su': [ 9 ],
  'Sus': [ 9 ],
  'Sust': [ 9 ],
  'Susta': [ 9 ],
  'Sustai': [ 9 ],
  'Sustain': [ 9 ],
  'Sustaina': [ 9 ],
  'Sustainab': [ 9 ],
  'Sustainabi': [ 9 ],
  'Sustainabil': [ 9 ],
  'Sustainabili': [ 9 ],
  'Sustainabilit': [ 9 ],
  'V': [ 10 ],
  'VR': [ 10 ],
  'VR ': [ 10 ],
  'VR D': [ 10 ],
  'VR De': [ 10 ],
  'VR Dev': [ 10 ],
  'VR Deve': [ 10 ],
  'VR Devel': [ 10 ],
  'VR Develo': [ 10 ],
  'VR Develop': [ 10 ],
  'VR Developm': [ 10 ],
  'VR Developme': [ 10 ],
  'VR Developmen': [ 10 ],
  '3D M': [ 10 ],
  '3D Mo': [ 10 ],
  '3D Mod': [ 10 ],
  '3D Mode': [ 10 ],
  '3D Model': [ 10 ],
  '3D Modeli': [ 10 ],
  '3D Modelin': [ 10 ],
  'Im': [ 10 ],
  'Imm': [ 10 ],
  'Imme': [ 10 ],
  'Immer': [ 10 ],
  'Immers': [ 10 ],
  'Immersi': [ 10 ],
  'Immersiv': [ 10 ],
  'Immersive': [ 10 ],
  'Immersive ': [ 10 ],
  'Immersive T': [ 10 ],
  'Immersive Te': [ 10 ],
  'Immersive Tec': [ 10 ],
  'Immersive Tech': [ 10 ],
  'Immersive Techn': [ 10 ],
  'Immersive Techno': [ 10 ],
  'Immersive Technol': [ 10 ],
  'Immersive Technolo': [ 10 ],
  'Immersive Technolog': [ 10 ]
}

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
    image: "https://picsum.photos/id/237/200/300",
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
    image: "https://picsum.photos/id/237/200/300",
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
    image: "https://picsum.photos/id/237/200/300",
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
    image: "https://picsum.photos/id/237/200/300",
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
    image: "https://picsum.photos/id/237/200/300",
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
    image: "https://picsum.photos/id/237/200/300",
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
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 8,
    title: "Robotics Challenge",
    problemStatement:
      "Participate in a robotics competition, designing and programming robots to accomplish specific tasks.",
    skills_needed: ["Robotics", "Programming", "Mechanical Engineering"],
    members: ["Benjamin Harris", "Lily Adams"],
    skills_met: [],
    campus: "University of Michigan Ann Arbor",
    image: "https://picsum.photos/id/237/200/300",
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
    image: "https://picsum.photos/id/237/200/300",
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
    image: "https://picsum.photos/id/237/200/300",
  },
];

const checkIndex = (inputString) =>  {
    if (index[inputString]) 
    return data[index[inputString]]
    return [] 
}

const BrowseProjects = ({ isLoggedIn }) => {
  const [skills, setSkills] = useState("");
  const [campus, setCampus] = useState("");
  const projects = useRef([{}])

  const skillChangeHandler = (event) => {
    setSkills(event.target.value);
  };
 

  const filterProjects = () => {
    const filteredSkills = checkIndex(skills)
    projects.current = data.filter((item) => {
      const isCollege = (campus) ? (item.campus == campus) : true;
      const isSkill = (filteredSkills) ? true : false;
      return isCollege && isSkill;
    })
  }

  const campusChangeHandler = (event) => {
    setCampus(event.target.value);
    projects.current = data.filter((item) => {
      return (item.campus == campus)
    }
    )
  };


  if (projects.current.length == 0 )
  return (
    <>
      <Filter
        skills={skills}
        campus={campus}
        skillChangeHandler={skillChangeHandler}
        campusChangeHandler={campusChangeHandler}
        filteredProjects={projects}
      ></Filter>
      {data.map((listitem) => (
        <ProjectItem
          title={listitem.title}
          description={listitem.problemStatement}
          people={listitem.members}
          skills={listitem.skills_needed}
          campus={listitem.campus}
          imgurl={listitem.image}
        />
      ))}
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
      {projects.current.map((listitem) => (
        <ProjectItem
          title={listitem.title}
          description={listitem.problemStatement}
          people={listitem.members}
          skills={listitem.skills_needed}
          campus={listitem.campus}
          imgurl={listitem.image}
        />
      ))}
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
}) => {
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {title}
            </Heading>
            <Text pt="2" fontSize="sm">
              {description}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default BrowseProjects;
