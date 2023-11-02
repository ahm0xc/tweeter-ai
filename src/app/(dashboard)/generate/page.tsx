import { Icons } from "~/components/icons"

import GeneratorWrapper from "../_components/generator-wrapper"
import Heading from "../_components/heading"

export default function OverviewPage() {
  return (
    <div className="container py-8">
      <Heading
        title="Generate"
        icon={<Icons.sparkle className="h-6 w-6" weight="duotone" />}
      />
      <GeneratorWrapper />
    </div>
  )
}
