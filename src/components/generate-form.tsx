"use client"

import { ComponentPropsWithoutRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { generationConfig } from "~/config/generation"
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"

import { Icons } from "./icons"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Textarea } from "./ui/textarea"
import { useToast } from "./ui/use-toast"

type Style = (typeof generationConfig.styles)[number]["value"]
const STYLES: [Style, ...Style[]] = [
  generationConfig.styles[0].value,
  ...generationConfig.styles.slice(1).map((s) => s.value),
]
const formSchema = z.object({
  topic: z.string().min(5, { message: "Topic length is too short" }).max(250, {
    message: "Topic is too long",
  }),
  style: z.enum(STYLES),
})

interface Props extends ComponentPropsWithoutRef<"section"> {
  // eslint-disable-next-line no-unused-vars
  setIsFetching: (v: boolean) => void
  isFetching: boolean
  // eslint-disable-next-line no-unused-vars
  setContent: (v: string) => void
}

export default function GenerateForm({
  isFetching,
  setIsFetching,
  setContent,
  className,
  ...props
}: Props) {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      style: "CASUAL",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsFetching(true)
    try {
      const { data } = await axios.post("/api/tweet/generate", {
        topic: values.topic,
        style: values.style,
      })
      setContent(data)
    } catch (error: any) {
      console.error(
        "🚀 ~ file: generate-form.tsx:73 ~ onSubmit ~ error:",
        error.message
      )
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description:
          "You might not have enough credits or the server might be facing some difficulties.",
      })
    } finally {
      setIsFetching(false)
    }
  }
  return (
    <section className={cn("max-w-3xl", className)} {...props}>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topic</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. '🤖 How will AI change the job landscape?'"
                      rows={5}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="style"
              render={({ field }) => (
                <FormItem className="max-w-sm">
                  <FormLabel>Style</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Style" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {generationConfig.styles.map((style) => {
                        return (
                          <SelectItem
                            key={`style-${style.label}`}
                            value={style.value}
                          >
                            {style.label}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              isLoading={isFetching}
              icon={<Icons.sparkle className="h-5 w-5 mr-2" weight="duotone" />}
              size="default"
            >
              <p className="font-medium">Generate</p>
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
