import { useContext } from "react";
import AuthContext from "../context/authContext";
import { useRouter } from "next/router";

import SEO from "../components/seo";
import Hero from "../sections/main/Hero";
import HowItWorks from "../sections/main/HowItWorks";
import Features from "../sections/main/Features";
import Cta from "../sections/main/Cta";
import MailList from "../sections/main/MailList";

import MainLayout from "../layouts/main";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <SEO
        title="Home page"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
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
