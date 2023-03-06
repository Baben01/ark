import { CodeExample } from '@/components/marketing/CodeExample'
import { Community } from '@/components/marketing/Community'
import { Creators } from '@/components/marketing/Creators'
import { Enterprise } from '@/components/marketing/Enterprise'
import { Footer } from '@/components/marketing/Footer'
import { Frameworks } from '@/components/marketing/Frameworks'
import { Hero } from '@/components/marketing/Hero'
import { Showcase } from '@/components/marketing/Showcase'
import { Testimonials } from '@/components/marketing/Testimonials'
import { Universe } from '@/components/marketing/Universe'
import { Navbar } from '@/components/navigation/navbar/Navbar'
import { Box } from '@/panda/jsx'

export default function Page() {
  return (
    <Box minH="100%" position="relative" background="url(/images/pattern.svg) -26px -7px repeat-x">
      <Navbar />
      <Overlay />
      <Hero />
      <Showcase />
      <Frameworks />
      <CodeExample />
      <Enterprise />
      <Testimonials />
      <Universe />
      <Creators />
      <Community />
      <Footer />
    </Box>
  )
}

const Overlay = () => {
  return (
    <Box
      position="absolute"
      right="-480px"
      width="960px"
      height="960px"
      top="-130px"
      background="radial-gradient(42.48% 42.48% at 50% 50%, #EB5E41 0%, rgba(235, 94, 65, 0) 100%)"
      filter="blur(282px)"
    />
  )
}
