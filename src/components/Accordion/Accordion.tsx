// React components
import AccordionItem from "../AccordionItem/AccordionItem"

// Styled Components
import { StyledAccordion } from "./Accordion.styles"

// Data
import data from "./Accordion.data"

const Accordion = () => {
  return (
    <StyledAccordion>
      {data.map(({ id, question, answer }) => {
        return <AccordionItem key={id} question={question} answer={answer} />
      })}
    </StyledAccordion>
  )
}

export default Accordion
