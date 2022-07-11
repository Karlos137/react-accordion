// React components
import Accordion from "../Accordion/Accordion"

// Styled Components
import { StyledAccordions } from "./Accordions.styles"

// Data
import data from "./Accordions.data"

const Accordions = () => {
  return (
    <StyledAccordions>
      {data.map(({ id, question, answer }) => {
        return <Accordion key={id} question={question} answer={answer} />
      })}
    </StyledAccordions>
  )
}

export default Accordions
