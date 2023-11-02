import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft"
import { BookmarkSimple } from "@phosphor-icons/react/dist/ssr/BookmarkSimple"
import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown"
import { CaretLeft } from "@phosphor-icons/react/dist/ssr/CaretLeft"
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight"
import { CaretUp } from "@phosphor-icons/react/dist/ssr/CaretUp"
import { ChartBar } from "@phosphor-icons/react/dist/ssr/ChartBar"
import { ChatTeardrop } from "@phosphor-icons/react/dist/ssr/ChatTeardrop"
import { Check } from "@phosphor-icons/react/dist/ssr/Check"
import { ClockCounterClockwise } from "@phosphor-icons/react/dist/ssr/ClockCounterClockwise"
import { Command } from "@phosphor-icons/react/dist/ssr/Command"
import { Copy } from "@phosphor-icons/react/dist/ssr/Copy"
import { GoogleLogo } from "@phosphor-icons/react/dist/ssr/GoogleLogo"
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart"
import { MoonStars } from "@phosphor-icons/react/dist/ssr/MoonStars"
import { Repeat } from "@phosphor-icons/react/dist/ssr/Repeat"
import { Sidebar } from "@phosphor-icons/react/dist/ssr/Sidebar"
import { Sparkle } from "@phosphor-icons/react/dist/ssr/Sparkle"
import { Spinner } from "@phosphor-icons/react/dist/ssr/Spinner"
import { SunDim } from "@phosphor-icons/react/dist/ssr/SunDim"
import { Trophy } from "@phosphor-icons/react/dist/ssr/Trophy"

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
  arrowLeft: ArrowLeft,
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
