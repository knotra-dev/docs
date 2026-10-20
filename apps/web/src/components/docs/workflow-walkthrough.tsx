'use client'

import { useState } from 'react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircledIcon,
  DownloadIcon,
  FileTextIcon,
  Pencil2Icon,
  PersonIcon,
} from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const stages = [
  { value: 'brief', label: 'Brief', icon: FileTextIcon },
  { value: 'draft', label: 'AI draft', icon: Pencil2Icon },
  { value: 'review', label: 'Your review', icon: PersonIcon },
  { value: 'finished', label: 'Finished file', icon: DownloadIcon },
] as const

const original =
  'Our new customer help center opens Monday. Our opening hours are unchanged.'
const revised =
  'We’re opening a new customer help center on Monday to make it easier to find help. Our opening hours are unchanged.'

export function WorkflowWalkthrough() {
  const [currentStep, setCurrentStep] = useState(0)
  const [wordingChanged, setWordingChanged] = useState(false)
  const activeStage = stages[currentStep] ?? stages[0]
  const announcement = wordingChanged ? revised : original

  return (
    <section
      aria-label="Announcement walkthrough"
      className="not-prose my-8 space-y-5"
    >
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Try a short announcement</h3>
        <p className="text-muted-foreground text-base leading-relaxed">
          Illustrative example with prewritten text. Nothing is sent or
          published.
        </p>
      </div>

      <Tabs
        onValueChange={value =>
          setCurrentStep(
            Math.max(
              0,
              stages.findIndex(stage => stage.value === value)
            )
          )
        }
        value={activeStage.value}
      >
        <TabsList
          aria-label="Announcement steps"
          className="grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 sm:grid-cols-4"
        >
          {stages.map(({ value, label, icon: Icon }) => (
            <TabsTrigger
              className="min-h-14 min-w-0 flex-col gap-2 whitespace-normal border px-3 py-3 text-base data-[state=active]:border-primary-active data-[state=active]:bg-muted data-[state=active]:shadow-none"
              key={value}
              value={value}
            >
              <Icon aria-hidden="true" className="size-5 shrink-0" />
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        <p
          aria-live="polite"
          className="text-muted-foreground mb-4 mt-5 text-sm"
        >
          Step {currentStep + 1} of {stages.length}: {activeStage.label}
        </p>

        <TabsContent className="space-y-4" value="brief">
          <p className="text-base leading-relaxed">
            Give Knotra the facts and the result you want.
          </p>
          <div className="bg-card rounded-lg border p-5 sm:p-7">
            <FileTextIcon
              aria-hidden="true"
              className="text-primary-active mb-4 size-8"
            />
            <h4 className="mb-5 text-xl font-semibold">Your brief</h4>
            <dl className="space-y-4 text-base leading-relaxed">
              <div>
                <dt className="font-semibold">What is happening?</dt>
                <dd className="text-muted-foreground mt-1">
                  A new customer help center opens Monday.
                </dd>
              </div>
              <div>
                <dt className="font-semibold">What must stay clear?</dt>
                <dd className="text-muted-foreground mt-1">
                  Our opening hours are unchanged.
                </dd>
              </div>
              <div>
                <dt className="font-semibold">What do you need?</dt>
                <dd className="text-muted-foreground mt-1">
                  A short, friendly announcement for customers.
                </dd>
              </div>
            </dl>
          </div>
        </TabsContent>

        <TabsContent className="space-y-4" value="draft">
          <p className="text-base leading-relaxed">
            The process turns your brief into a draft for you to check.
          </p>
          <div className="bg-card rounded-lg border p-5 sm:p-7">
            <Pencil2Icon
              aria-hidden="true"
              className="text-primary-active mb-4 size-8"
            />
            <p className="text-muted-foreground mb-3 text-sm">
              Sample draft · not yet approved
            </p>
            <h4 className="mb-4 text-xl font-semibold">
              A new place to find help
            </h4>
            <p className="text-lg leading-relaxed">{announcement}</p>
          </div>
        </TabsContent>

        <TabsContent className="space-y-4" value="review">
          <p className="text-base leading-relaxed">
            You decide whether the wording is ready or needs a change.
          </p>
          <div className="bg-card rounded-lg border p-5 sm:p-7">
            <PersonIcon
              aria-hidden="true"
              className="text-primary-active mb-4 size-8"
            />
            <h4 className="mb-4 text-xl font-semibold">Ready to share?</h4>
            <p className="text-lg leading-relaxed">{announcement}</p>
            <ul
              aria-label="Facts to check"
              className="my-5 space-y-3 border-t pt-5 text-base"
            >
              <li className="flex items-start gap-2">
                <CheckCircledIcon
                  aria-hidden="true"
                  className="text-primary-active mt-1 size-5 shrink-0"
                />
                The opening day is Monday.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircledIcon
                  aria-hidden="true"
                  className="text-primary-active mt-1 size-5 shrink-0"
                />
                Opening hours are unchanged.
              </li>
            </ul>
            <Button
              disabled={wordingChanged}
              onClick={() => setWordingChanged(true)}
              type="button"
              variant="outline"
            >
              Change the wording
            </Button>
            {wordingChanged && (
              <output className="text-muted-foreground mt-4 block text-base leading-relaxed">
                Example feedback: “Make it warmer.” The revised sample is shown
                above.
              </output>
            )}
          </div>
        </TabsContent>

        <TabsContent className="space-y-4" value="finished">
          <p className="text-base leading-relaxed">
            After approval, the announcement is available as a file.
          </p>
          <div className="bg-card rounded-lg border p-5 sm:p-7">
            <FileTextIcon
              aria-hidden="true"
              className="text-primary-active mb-4 size-8"
            />
            <p className="text-muted-foreground mb-3 break-words text-sm">
              customer-help-center.txt · sample file
            </p>
            <h4 className="mb-4 text-xl font-semibold">
              A new place to find help
            </h4>
            <p className="mb-6 text-lg leading-relaxed">{announcement}</p>
            <Button asChild>
              <a
                download="customer-help-center.txt"
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(`A new place to find help\n\n${announcement}\n`)}`}
              >
                <DownloadIcon aria-hidden="true" className="mr-2 size-4" />
                Download example file
              </a>
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex flex-wrap justify-between gap-3 border-t pt-5">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(step => Math.max(0, step - 1))}
          type="button"
          variant="outline"
        >
          <ArrowLeftIcon aria-hidden="true" className="mr-2 size-4" />
          Previous step
        </Button>
        <Button
          disabled={currentStep === stages.length - 1}
          onClick={() =>
            setCurrentStep(step => Math.min(stages.length - 1, step + 1))
          }
          type="button"
        >
          {activeStage.value === 'review'
            ? 'Approve this example'
            : 'Next step'}
          <ArrowRightIcon aria-hidden="true" className="ml-2 size-4" />
        </Button>
      </div>
    </section>
  )
}
