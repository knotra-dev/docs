'use client'

import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  DesktopIcon,
  GearIcon,
  LightningBoltIcon,
} from '@radix-ui/react-icons'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const firstSteps = [
  {
    id: 'choose',
    label: '1 Create & edit',
    title: 'Give the model a task',
    path: ['Create learning pipeline', 'My first pipeline', 'Instructions'],
    instruction:
      'A new workspace is empty. Start the tour to create one small learning pipeline with a model block. Change its Instructions to ask for an answer in your own style, then click outside the field to apply it. Replaying the tour reuses this pipeline and keeps your edits.',
  },
  {
    id: 'follow',
    label: '2 Add & connect',
    title: 'Pass the answer into a human review',
    path: ['Add node', 'Human review', 'answer.text → human.draft'],
    instruction:
      'Choose Add node, then Human review. The lesson prepares its draft input. Click the model’s text output and the review’s draft input, or drag between them, to pass the answer into the review and set their order.',
  },
  {
    id: 'model',
    label: '3 Choose a model',
    title: 'Connect the block to your model',
    path: ['Settings (optional)', 'answer block', 'Source', 'Model'],
    instruction:
      'In Settings → Model providers, choose Add source. Select Codex, Claude Code, OpenAI API, Anthropic API, OpenAI-compatible, or Ollama, then save a named source. This does not start the engine. Select the answer block, then choose its Source and Model. Each model or agent block keeps its own choice. Saved catalogs remain available offline. Use the provider default or refresh the source’s catalog through Manage model sources if needed. You can skip setup and continue the tour offline.',
  },
  {
    id: 'review',
    label: '4 Run & review',
    title: 'Start a real run when you are ready',
    path: ['Run', 'Inputs & engine profile', 'Start run', 'Inbox'],
    instruction:
      'For a real run, start the local engine separately in Settings after saving a source. Once configured, it starts automatically when Knotra reopens. Choose Run to preview inputs and the engine profile, then Start run. In Inbox, read What to do and From previous steps, fill in Your answer or approval fields, then Submit response to continue. Advanced JSON is for complex schemas. The tour also works offline and never starts a run for you.',
  },
]

export function FirstSteps() {
  return (
    <Tabs className="not-prose my-8" defaultValue="choose">
      <TabsList
        aria-label="Your first workflow"
        className="grid h-auto w-full grid-cols-1 gap-2 bg-muted p-2 sm:grid-cols-2 lg:grid-cols-4"
      >
        {firstSteps.map(step => (
          <TabsTrigger
            className="min-h-12 whitespace-normal px-3 py-3 text-sm"
            key={step.id}
            value={step.id}
          >
            {step.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {firstSteps.map(step => (
        <TabsContent className="mt-5 space-y-5" key={step.id} value={step.id}>
          <h3 className="text-2xl font-semibold">{step.title}</h3>
          <ol className="flex flex-wrap items-center gap-3 text-sm font-medium">
            {step.path.map((label, index) => (
              <li className="flex items-center gap-3" key={label}>
                {index > 0 && (
                  <ArrowRightIcon aria-hidden="true" className="size-4" />
                )}
                <span>{label}</span>
              </li>
            ))}
          </ol>
          <p className="text-base leading-relaxed">{step.instruction}</p>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export function HowItWorks() {
  return (
    <div className="my-8 space-y-10">
      <figure>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch">
          <div className="w-full flex-1 border-y py-6 sm:py-8">
            <DesktopIcon aria-hidden="true" className="mb-4 size-8" />
            <p className="text-xl font-semibold">Desktop</p>
            <p className="mt-2 text-muted-foreground">You plan and review.</p>
          </div>
          <ArrowRightIcon
            aria-hidden="true"
            className="size-6 shrink-0 self-center rotate-90 sm:rotate-0"
          />
          <div className="w-full flex-1 border-y py-6 sm:py-8">
            <GearIcon aria-hidden="true" className="mb-4 size-8" />
            <p className="text-xl font-semibold">Engine</p>
            <p className="mt-2 text-muted-foreground">
              It runs the steps and saves progress.
            </p>
          </div>
          <ArrowRightIcon
            aria-hidden="true"
            className="size-6 shrink-0 self-center rotate-90 sm:rotate-0"
          />
          <div className="w-full flex-1 border-y py-6 sm:py-8">
            <LightningBoltIcon aria-hidden="true" className="mb-4 size-8" />
            <p className="text-xl font-semibold">AI &amp; tools</p>
            <p className="mt-2 text-muted-foreground">
              They carry out the tasks.
            </p>
          </div>
        </div>
        <figcaption className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
          <ArrowLeftIcon
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0"
          />
          Results return to Desktop for you to inspect. The interactive tour
          teaches you to build a small pipeline before you choose to start a
          run.
        </figcaption>
      </figure>

      <figure>
        <div className="grid items-center gap-4 sm:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] sm:gap-0">
          <div className="rounded-xl border p-5">
            <p className="text-sm text-muted-foreground">
              Workflow: the reusable plan
            </p>
            <p className="mt-2 text-xl font-semibold">Weekly update</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Gather notes, write a draft, ask for review.
            </p>
          </div>
          <div
            aria-hidden="true"
            className="relative hidden self-stretch sm:block"
          >
            <span className="absolute left-0 top-1/2 w-1/2 border-t" />
            <span className="absolute bottom-1/4 left-1/2 top-1/4 border-l" />
            <ArrowRightIcon className="absolute right-0 top-1/4 h-5 w-1/2 -translate-y-1/2" />
            <ArrowRightIcon className="absolute right-0 top-3/4 h-5 w-1/2 -translate-y-1/2" />
          </div>
          <ArrowDownIcon
            aria-hidden="true"
            className="mx-auto size-6 sm:hidden"
          />
          <div className="grid gap-4">
            <div className="rounded-xl border p-4">
              <p className="font-semibold">Monday run</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Monday’s inputs, progress and result.
              </p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="font-semibold">Friday run</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Friday’s inputs, progress and result.
              </p>
            </div>
          </div>
        </div>
        <figcaption className="mt-4 text-sm text-muted-foreground">
          Example: reuse one workflow for separate runs. Each run keeps its own
          saved history.
        </figcaption>
      </figure>
    </div>
  )
}

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
