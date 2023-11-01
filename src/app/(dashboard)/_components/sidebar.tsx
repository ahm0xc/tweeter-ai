import { ComponentPropsWithoutRef, Suspense } from "react"
import Link from "next/link"

import { siteConfig } from "~/config/site"
import { cn } from "~/lib/utils"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Icons } from "~/components/icons"

import ProfileCard from "./profile-card"
import ProfileCardSkeleton from "./profile-card-skeleton"
import ThemeToggler from "./theme-toggler"

interface Props extends ComponentPropsWithoutRef<"aside"> {}

export default function Sidebar({ className, ...props }: Props) {
  return (
    <aside
      className={cn(
        "pb-12 border-r border-stone-800/10 dark:border-white/10",
        className
      )}
      {...props}
    >
      <Link
        href="/overview"
        className="flex items-center gap-2 px-8 py-6 text-2xl font-semibold tracking-tight duration-200 stroke-zinc-800 dark:text-zinc-200 dark:stroke-zinc-500 dark:hover:stroke-white hover:stroke-zinc-700 hover:text-zinc-700 dark:hover:text-white"
      >
        <Icons.logo className="w-8 h-8 duration-200 " />
        {siteConfig.name}
      </Link>
      <div className="space-y-4">
        <div className="px-6 py-2">
          <div className="space-y-1">
            <Link href="/overview">
              <Button
                variant="ghost"
                size="sm"
                className="justify-start w-full"
                icon={
                  <Icons.sparkle className="w-4 h-4 mr-2" weight="duotone" />
                }
              >
                Generate
              </Button>
            </Link>
            <Link href="/history">
              <Button
                variant="ghost"
                size="sm"
                className="justify-start w-full"
                icon={<Icons.history className="w-4 h-4 mr-2" />}
              >
                History
              </Button>
            </Link>
            <Button
              variant="ghost"
              disabled
              size="sm"
              className="justify-start w-full"
              icon={<Icons.pricing className="w-4 h-4 mr-2" />}
            >
              Pricing
              <Badge variant="secondary" className="ml-2">
                coming soon
              </Badge>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 mx-6 bottom-8 flex flex-col gap-y-2">
        <ThemeToggler />
        <Link href="/pricing">
          <Button
            variant="ghost"
            size="sm"
            className="justify-start w-full"
            icon={<Icons.pro className="w-5 h-5 mr-2" weight="duotone" />}
          >
            <p className="bg-gradient-to-r from-primary to-primary/70 from-70% bg-clip-text text-transparent to-80%">
              Upgrade to pro
            </p>
          </Button>
        </Link>
        <Suspense fallback={<ProfileCardSkeleton />}>
          <ProfileCard />
        </Suspense>
      </div>
    </aside>
  )
}
