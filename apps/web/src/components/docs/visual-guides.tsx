'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const questions = [
  {
    question: 'Why does Knotra say it is not connected?',
    answer:
      'Desktop has not reached an engine: open Settings, check the engine address, and connect. You can explore pipelines and the interactive tour without an engine connection.',
  },
  {
    question: 'Why is my run waiting?',
    answer:
      'Open Inbox: a step may need your answer before work continues. If there is no request, open the run and read the waiting step’s message.',
  },
  {
    question: 'Why won’t my run start?',
    answer:
      'Open the pipeline, fix any validation messages, and check the engine connection in Settings. Select each model or agent block and check its Source and Model. The engine profile must supply the tools and other resources the workflow needs.',
  },
  {
    question: 'Where is my result?',
    answer:
      'Open Runs, select the finished run, and check its outputs and Artifacts. A step that is still running or has failed may not have produced a file yet.',
  },
  {
    question: 'Do I need to declare a model called writer?',
    answer:
      'Select a Model or AI agent block and choose Source and Model. Names such as writer are internal pipeline bindings that Knotra creates for you. Choose Code environment for Code blocks and grant file or command permissions separately for agents. Advanced resource bindings is for editing those internal links directly.',
  },
  {
    question: 'How do I answer a human request?',
    answer:
      'Open its request in Inbox, read What to do and From previous steps, then complete Your answer and Submit response. Ordinary schemas have labeled fields; Advanced JSON is available for complex custom schemas. Follow the fields for this request rather than copying a response from another pipeline.',
  },
  {
    question: 'Why are connection changes still waiting?',
    answer:
      'The local engine waits for every unfinished run before applying saved source or MCP changes. Paused runs, human waits, and scheduled retries count. Finish or cancel those runs; pending changes survive reopening Knotra and do not need a manual restart.',
  },
  {
    question: 'Where do I add MCP?',
    answer:
      'For external tools, use Settings → MCP servers → Add server. Load its tools, enable the ones you need, and save. Select the server and tool in a Tool block, or check individual tools in an AI agent. To let an assistant control Knotra itself, use the separate Control Knotra with MCP section in Settings and copy its configuration.',
  },
  {
    question: 'What happens when I close the app?',
    answer:
      'Sources, model catalogs, and block choices are saved. A configured local engine starts automatically when you reopen Knotra; account sign-in is never started automatically. Runs continue only while their engine is running, and saved progress remains available after reconnection.',
  },
]

export function CommonQuestions() {
  return (
    <Accordion className="my-6" collapsible type="single">
      {questions.map(({ question, answer }) => (
        <AccordionItem key={question} value={question}>
          <AccordionTrigger className="gap-4 py-5 text-left text-base">
            {question}
          </AccordionTrigger>
          <AccordionContent className="max-w-prose text-base leading-relaxed text-muted-foreground">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
