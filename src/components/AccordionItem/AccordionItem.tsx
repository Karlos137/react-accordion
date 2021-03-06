// React
import { useState } from "react"

// Framer Motion
import { AnimatePresence } from "framer-motion"

// Styled Components
import { StyledAccordionItem, Question, Answer } from "./AccordionItem.styles"

type Props = {
  question: string
  answer: string
}

const AccordionItem = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledAccordionItem>
      <AnimatePresence>
        <Question
          key="question"
          initial={false}
          animate={{ backgroundColor: isOpen ? "#726E97" : "#7F557D" }}
          transition={{ duration: 0.35 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
        </Question>
        {isOpen && (
          <Answer
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", scale: 1 },
              collapsed: { opacity: 0, height: 0, scale: 0.98 },
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {answer}
          </Answer>
        )}
      </AnimatePresence>
    </StyledAccordionItem>
  )
}

export default AccordionItem
