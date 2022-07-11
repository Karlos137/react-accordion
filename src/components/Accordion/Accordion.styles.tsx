// Styled Components
import styled from "styled-components"

// Framer Motion
import { motion } from "framer-motion"

export const StyledAccordion = styled(motion.div)`
  font-family: "Open Sans", sans-serif;
  max-width: 50ch;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
`

export const Question = styled(motion.div)`
  cursor: pointer;
  background-color: #a35858;
  padding: 1rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.625rem;
`

export const Answer = styled(motion.div)`
  max-width: 45ch;
  margin: 0 auto;
`
