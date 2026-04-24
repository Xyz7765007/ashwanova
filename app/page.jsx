import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Meet from '@/components/Meet';
import WhyRootOnly from '@/components/WhyRootOnly';
import EdgePlatform from '@/components/EdgePlatform';
import ClinicalEvidence from '@/components/ClinicalEvidence';
import Outcomes from '@/components/Outcomes';
import Applications from '@/components/Applications';
import Trust from '@/components/Trust';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Meet />
        <WhyRootOnly />
        <EdgePlatform />
        <ClinicalEvidence />
        <Outcomes />
        <Applications />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
