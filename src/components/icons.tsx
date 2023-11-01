import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown"
import { CaretLeft } from "@phosphor-icons/react/dist/ssr/CaretLeft"
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight"
import { CaretUp } from "@phosphor-icons/react/dist/ssr/CaretUp"
import { Command } from "@phosphor-icons/react/dist/ssr/Command"
import { GoogleLogo } from "@phosphor-icons/react/dist/ssr/GoogleLogo"
import { MoonStars } from "@phosphor-icons/react/dist/ssr/MoonStars"
import { Sparkle } from "@phosphor-icons/react/dist/ssr/Sparkle"
import { Spinner } from "@phosphor-icons/react/dist/ssr/Spinner"
import { SunDim } from "@phosphor-icons/react/dist/ssr/SunDim"
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart"
import { ChatTeardrop } from "@phosphor-icons/react/dist/ssr/ChatTeardrop"
import { Repeat } from "@phosphor-icons/react/dist/ssr/Repeat"
import { ChartBar } from "@phosphor-icons/react/dist/ssr/ChartBar"
import { BookmarkSimple } from "@phosphor-icons/react/dist/ssr/BookmarkSimple"
import { Copy } from "@phosphor-icons/react/dist/ssr/Copy"
import { Check } from "@phosphor-icons/react/dist/ssr/Check"
import { ClockCounterClockwise } from "@phosphor-icons/react/dist/ssr/ClockCounterClockwise"
import { Trophy } from "@phosphor-icons/react/dist/ssr/Trophy"
import { Sidebar } from "@phosphor-icons/react/dist/ssr/Sidebar"

export const Icons = {
  //
  //  Utils
  //
  logo: Command,
  spinner: Spinner,
  pro: Sparkle,
  sparkle: Sparkle,
  heart: Heart,
  comment: ChatTeardrop,
  repost: Repeat,
  analytics: ChartBar,
  bookmark: BookmarkSimple,
  copy: Copy,
  check: Check,
  history: ClockCounterClockwise,
  pricing: Trophy,
  sidebar: Sidebar,
  //
  //  Auth & Providers
  //
  google: GoogleLogo,
  //
  //  Arrow & Chevrons
  //
  chevronLeft: CaretLeft,
  chevronRight: CaretRight,
  chevronUp: CaretUp,
  chevronDown: CaretDown,
  //
  // Theme
  //
  darkMode: MoonStars,
  lightMode: SunDim,
}
