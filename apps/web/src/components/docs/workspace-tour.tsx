'use client'

import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { basePath } from '@/lib/utils'

const areas = [
  {
    id: 'pipelines',
    label: 'Choose work',
    title: 'Pipelines',
    instruction:
      'Create a pipeline, continue the interactive lesson, or choose an optional template.',
  },
  {
    id: 'runs',
    label: 'Follow progress',
    title: 'Runs',
    instruction: 'See which steps have finished and what needs your attention.',
  },
  {
    id: 'inbox',
    label: 'Review',
    title: 'Inbox',
    instruction: 'Read the draft and respond before the work continues.',
  },
  {
    id: 'artifacts',
    label: 'Get the file',
    title: 'Artifacts',
    instruction: 'Preview the finished result and export a copy.',
  },
]

export function WorkspaceTour() {
  return (
    <Tabs className="not-prose my-8" defaultValue="pipelines">
      <TabsList
        aria-label="Explore Knotra Desktop"
        className="grid h-auto grid-cols-2 gap-2 bg-muted p-2 sm:grid-cols-4"
      >
        {areas.map(area => (
          <TabsTrigger
            className="min-h-12 whitespace-normal px-2 py-3 text-sm"
            key={area.id}
            value={area.id}
          >
            {area.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {areas.map(area => {
        const src = `${basePath}/images/${area.id}.jpg`
        return (
          <TabsContent className="mt-5 space-y-4" key={area.id} value={area.id}>
            <div>
              <h3 className="text-2xl font-semibold">{area.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {area.instruction}
              </p>
            </div>
            <figure>
              <a
                aria-label={`Open full-size ${area.title} screenshot`}
                href={src}
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  alt={`Knotra Desktop ${area.title} area showing the prepared example workspace`}
                  className="h-auto w-full rounded-lg border"
                  height={800}
                  src={src}
                  width={1200}
                />
              </a>
              <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
                <span>Earlier app version · sample workspace</span>
                <a
                  className="underline underline-offset-4"
                  href={src}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open full size
                </a>
              </figcaption>
            </figure>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
