import React from "react";
import { Box, Flex, Link, Stack, Text } from "@chakra-ui/layout";
import { Side } from "./components/Side";
import { Section } from "./components/Section";

function App() {
  return (
    <Box mt={8} mb={8} mx="auto" maxW="1200px" w="100%">
      <Flex>
        <Side
          name="Jeng-Yeu Shih"
          email="shihjengyeu@gmail.com"
          photo="https://jyssssss.github.io/about-me/head2.png"
          linkedIn="https://www.linkedin.com/in/shihjengyeu/"
          gitHub="https://github.com/Jyssssss"
        ></Side>
        <Box ml="auto">
          <Stack spacing={8} width="4xl">
            <Section title="About Me">
              <Text>
                <b>Full-stack software engineer</b> with 3+ years in analysis,
                design, development, and testing. Possessed advanced knowledge
                of programming from back-end to front-end. Demonstrated ability
                to work in a team environment with proven organizational and
                leadership capabilities.
              </Text>
            </Section>
            <Section title="Experience">
              <Flex mb="2">
                <Box fontWeight="bold">
                  <Text>
                    Software Engineer, E.sun Financial Holding Co., Ltd, Taipei,
                    Taiwan
                  </Text>
                </Box>
                <Box ml="auto">
                  <Text>11/2016 – 11/2019</Text>
                </Box>
              </Flex>
              <Text variant="content">
                ▪ Developed <b>.NET</b> shared function libraries used
                internally by over 500 developers, reducing time to market for
                applications by 30%, including authorization features with RBAC
                model, distributed caching system, and job scheduling
                application.
              </Text>
              <Text variant="content">
                ▪ Constructed a four-year <b>ASP.NET Core MVC</b> project in{" "}
                <b>JavaScript</b>, <b>C#</b>, and <b>SQL</b>, supporting
                corporate loans domestic and overseas.
              </Text>
              <Text variant="content">
                ▪ Architected the department’s first highly available
                distributed cache using <b>Redis</b> with clusters hosted on{" "}
                <b>Red Hat Enterprise Linux</b>, bringing benefit to 30% of data
                access in a single page on average.
              </Text>
              <Text variant="content">
                ▪ Oversaw <b>DevOps</b> daily tasks by using <b>Azure DevOps</b>{" "}
                and writing
                <b>MSBuild</b> and <b>PowerShell</b> scripts to automate
                deployment.
              </Text>
              <Text variant="content">
                ▪ Held the position of a <b>system designer</b>, planning{" "}
                <b>Git</b> branching strategy, analyzing system documents,
                designing database schema and software architecture.
              </Text>
              <Text variant="content">
                ▪ Led in a 5-person programming team, using <b>Scrum</b> process
                for <b>Agile</b> development, holding team meetings and
                reviewing peer’s code for quality.
              </Text>
              <Text variant="content">
                ▪ Served as a lecturer to provide employee training about web
                development, .NET CLR, database, and computer network for new
                recruits.
              </Text>
              <br></br>
              <Flex mb="2">
                <Box fontWeight="bold">
                  <Text>
                    Software Engineer Intern, Syscom Computer Engineering CO.,
                    Taipei, Taiwan
                  </Text>
                </Box>
                <Box ml="auto">
                  <Text>09/2014 – 06/2015</Text>
                </Box>
              </Flex>
              <Text variant="content">
                ▪ Used <b>socket programming</b> with Financial Information
                eXchange (FIX) protocol to develop a stock trading program in
                C#, which simulates the server-side of stock trading, testing
                client-side FIX Gateway.
              </Text>
            </Section>
            <Section title="Educations">
              <Flex mb="2">
                <Box fontWeight="bold">
                  <Text>Santa Clara University, Santa Clara, California</Text>
                </Box>
                <Box ml="auto">
                  <Text>01/2020 – 06/2021</Text>
                </Box>
              </Flex>
              <Text variant="content">
                Master Degree of Computer Science and Engineering
              </Text>
              <br></br>
              <Flex mb="2">
                <Box fontWeight="bold">
                  <Text>National Taiwan Normal University, Taipei, Taiwan</Text>
                </Box>
                <Box ml="auto">
                  <Text>09/2011 – 06/2015</Text>
                </Box>
              </Flex>
              <Text variant="content">
                Bachelor Degree of Computer Science and Information Engineering
              </Text>
            </Section>
            <Section title="Projects">
              <Text variant="content" fontWeight="bold">
                JoForum, Side Project
              </Text>
              <Text variant="content">
                An online discussion site for people to post and read messages.
                Built its frontend with <b>React.js</b> and <b>Next.js</b>, and
                the backend with <b>TypeScript</b>, <b>Node.js</b>,{" "}
                <b>Express.js</b>, <b>Apollo GraphQL</b>, <b>TypeORM</b>,{" "}
                <b>Redis</b>, <b>PostgreSQL</b>.
              </Text>
              <Flex>
                <Link
                  href="https://github.com/Jyssssss/JoForum"
                  color="blue"
                  target="_blank"
                >
                  Github
                </Link>

                <Link
                  href="https://joforum.herokuapp.com/"
                  color="blue"
                  target="_blank"
                  ml="2"
                >
                  Demo
                </Link>
              </Flex>
              <br></br>
              <Text variant="content" fontWeight="bold">
                Snake Game in React, Side Project
              </Text>
              <Text variant="content">
                A Snake game built in <b>React.js</b>.
              </Text>
              <Flex>
                <Link
                  href="https://github.com/Jyssssss/snake-game"
                  color="blue"
                  target="_blank"
                >
                  Github
                </Link>

                <Link
                  href="https://jyssssss.github.io/snake-game/"
                  color="blue"
                  target="_blank"
                  ml="2"
                >
                  Demo
                </Link>
              </Flex>
              <br></br>
              <Text variant="content" fontWeight="bold">
                Yelp Database Query System, Course Project
              </Text>
              <Text variant="content">
                An application to query information in yelp dataset using{" "}
                <b>Java Swing</b> and <b>Oracle Database</b>.
              </Text>
              <Flex>
                <Link
                  href="https://github.com/Jyssssss/SCU_COEN280_yelp-app"
                  color="blue"
                  target="_blank"
                >
                  Github
                </Link>
              </Flex>
              <br></br>
              <Text variant="content" fontWeight="bold">
                Color Video Compression System, Course Project
              </Text>
              <Text variant="content">
                Developed CNN structures with <b>keras</b> to implement color
                frames compression/decompression in <b>Python</b>.
              </Text>
              <Flex>
                <Link
                  href="https://github.com/Jyssssss/SCU_COEN240_video-compression"
                  color="blue"
                  target="_blank"
                >
                  Github
                </Link>
              </Flex>
              <br></br>
              <Text variant="content" fontWeight="bold">
                Artificial Intelligence of Gomoku, Independent Study Project
              </Text>
              <Text variant="content">
                Developed an AI engine by implementing Alpha-beta Pruning
                Algorithm in <b>C++</b>.
              </Text>
            </Section>
            <Section title="Skills">
              <Text variant="content" fontWeight="bold">
                Programming Languages
              </Text>
              <Text variant="content">
                C#, JavaScript, SQL, Python, Java, TypeScript, C, C++, Ruby
              </Text>
              <br></br>
              <Text variant="content" fontWeight="bold">
                Front-End Development
              </Text>
              <Text variant="content">
                HTML, CSS, React.js, Next.js, JQuery, AJAX, Bootstrap, webpack,
                Babel
              </Text>
              <br></br>
              <Text variant="content" fontWeight="bold">
                Database
              </Text>
              <Text variant="content">
                Microsoft SQL Server, Oracle Database, PostgresSQL, IBM DB2,
                MySQL
              </Text>
              <br></br>
              <Text variant="content" fontWeight="bold">
                Frameworks and Others
              </Text>
              <Text variant="content">
                Node.js, Express.js, .Net Core, .NET Framework, Maven, Ruby on
                Rails, GraphQL, Rest APIs, Git, Azure, TFS, Linux, Docker,
                Redis, Visual Studio, VS Code
              </Text>
            </Section>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
