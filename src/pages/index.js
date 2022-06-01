import { useRouter } from "next/router";

import SEO from "../components/seo";
import Hero from "../sections/main/Hero";
import HowItWorks from "../sections/main/HowItWorks";
import Features from "../sections/main/Features";
import Cta from "../sections/main/Cta";
import MailList from "../sections/main/MailList";

import MainLayout from "../layouts/main";

export default function Home() {
  return (
    <>
      <SEO
        title="Home page"
        description="Just ask and get clear and precise explanation from your peers."
      />

      <MainLayout>
        <Hero />
        <HowItWorks />
        <Features />
        <Cta />
        <MailList />
      </MainLayout>
    </>
  );
}
