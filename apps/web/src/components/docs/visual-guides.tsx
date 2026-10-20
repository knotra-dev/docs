'use client'

import Image from 'next/image'
import { basePath } from '@/lib/utils'

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
    label: '1 Choose a demo',
    image: 'choose-demo',
    title: 'Choose Research brief',
    path: ['Pipelines', 'New pipeline', 'Guided demo'],
    instruction:
      'Open Research brief, choose Run demo, then Start demo. Keep the sample topic for your first try.',
  },
  {
    id: 'follow',
    label: '2 Follow the work',
    image: 'runs',
    title: 'Watch the steps reach review',
    path: ['Runs', 'Guided demo', 'Your run'],
    instruction:
      'Completed steps turn green. The sample pauses at Review when it needs your answer.',
  },
  {
    id: 'review',
    label: '3 Review & collect',
    image: 'inbox',
    title: 'Your turn, then your file',
    path: ['Inbox', 'Your feedback', 'Submit response'],
    instruction:
      'Read the sample draft and send your feedback. Once the demo finishes, find brief.md in Artifacts.',
  },
]

export function FirstSteps() {
  return (
    <Tabs className="not-prose my-8" defaultValue="choose">
      <TabsList
        aria-label="Your first guided demo"
        className="grid h-auto w-full grid-cols-1 gap-2 bg-muted p-2 sm:grid-cols-3"
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
      {firstSteps.map(step => {
        const src = `${basePath}/images/${step.image}.jpg`
        return (
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
            <a
              aria-label={`Open full-size screenshot: ${step.title}`}
              href={src}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt={step.title}
                className="h-auto w-full rounded-lg border"
                height={800}
                src={src}
                width={1200}
              />
            </a>
            <p className="text-base leading-relaxed">{step.instruction}</p>
            <p className="text-sm text-muted-foreground">
              Real app · sample data · Select the picture to enlarge it.
            </p>
          </TabsContent>
        )
      })}
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
          Results return to Desktop for you to inspect. This is how a live run
          works; the guided demo uses sample data.
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
      'Desktop has not reached an engine: open Settings, check the engine address, and connect. You can explore the guided demo without an engine connection.',
  },
  {
    question: 'Why is my run waiting?',
    answer:
      'Open Inbox: a step may need your answer before work continues. If there is no request, open the run and read the waiting step’s message.',
  },
  {
    question: 'Why won’t my run start?',
    answer:
      'Open the pipeline, fix any validation messages, and check the engine connection in Settings. Run demo is available only for the unchanged Research brief sample.',
  },
  {
    question: 'Where is my result?',
    answer:
      'Open Runs, select the finished run, and check its outputs and Artifacts. A step that is still running or has failed may not have produced a file yet.',
  },
  {
    question: 'What happens when I close the app?',
    answer:
      'Live runs continue as long as their engine keeps running. Reopen Desktop and reconnect to inspect saved progress.',
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
