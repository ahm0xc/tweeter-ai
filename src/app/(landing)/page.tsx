import { Cta } from "./_components/cta"
import Features from "./_components/features"
import Footer from "./_components/footer"
import Header from "./_components/header"
import Hero from "./_components/hero"
import { Pricing } from "./_components/pricing"

export default async function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  )
}
