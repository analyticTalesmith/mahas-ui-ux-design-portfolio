import Image from "next/image";
import WebsiteHeading from "@/components/layout/page-core/website-heading";
import { HomeTwoColumnHero } from "@/components/layout/sections/hero";
import { GradientBGWrapper } from "@/components/layout/sections/gradient-bg";
import { StackedSVG } from "@/components/svgs/stacked-svg";
import { Heart } from "@/components/svgs/heart";
import { LargePillButton } from "@/components/ui/button";
import InlineIconHeading from "@/components/layout/headings/inline-icon-heading";
import CenteredContainer from "@/components/layout/sections/centered-container";
import {
  ProjectCard,
  FeaturedImage,
  ProjectCategory,
  ProjectTitle,
  ProjectSummary,
  ProjectPageLink,
  ProjectPageLinkPlaceholder,
} from "@/components/layout/sections/project-summary-card";

export default function Home() {
  return (
    <>
      <GradientBGWrapper>
        <WebsiteHeading on="background" />
        <HomeTwoColumnHero className="text-primary-higher">
          <div className="flex-col text-lg sm:text-3xl font-josefin-slab font-bold">
            <StackedSVG front="tertiary-fixed">
              <Heart className="w-16 h-16" />
            </StackedSVG>
            <p className="text-2xl sm:text-5xl tracking-tighter font-semibold">
              Welcome!
            </p>
            <h1 className="font-black tracking-tightest text-4xl sm:text-7xl">
              I&apos;m Maha, a Product Designer
            </h1>
            <p className="mb-8 font-semibold">
              with an idealist mindset, a love for empathetic conversations, and
              a desire for equity through design.
            </p>
            <p className="font-semibold">
              Creating a better world starts by believing in one. Thank you for
              taking the time to visit my portfolio.
            </p>
            <LargePillButton color="secondary">View my work</LargePillButton>
          </div>

          <figure className="relative flex flex-col items-center">
            <div className="mx-auto justify-items-center w-full h-auto grow relative">
              <Image
                src="/static/images/homeinthehive.avif"
                alt="blog"
                width={360} // Set a width for the image
                height={520} // Set a height for the image
                className="w-full h-full object-contain object-center border-8 border-tertiary-mid rounded-lg shadow-primary"
                style={{ objectFit: "contain" }} // Ensures no cropping
              />
            </div>
            <figcaption className="mt-4 text-xs font-parkinsans font-normal tracking-3x-wide">
              Artwork Credit Instagram: @homeinthehive
            </figcaption>
          </figure>
        </HomeTwoColumnHero>
      </GradientBGWrapper>
      <CenteredContainer>
        <InlineIconHeading
          icon={<Heart className="h-14" />}
          heading="My Work"
        />
        <div className="space-y-16 pb-16">
        <ProjectCard>
          <FeaturedImage
            src="/static/images/projectFeatureImage/livaNova.avif"
            alt="desc"
          />
          <ProjectCategory>Design System</ProjectCategory>
          <ProjectTitle>LivaNova</ProjectTitle>
          <ProjectSummary>
            LivaNova has a suite of digital products that are patient and
            clinician facing. I contributed to the auditing and streamlining of
            an enterprise-wide design system and responsive design.
          </ProjectSummary>
          <ProjectPageLink src="/slug/to/page" />
        </ProjectCard>

        <ProjectCard>
          <FeaturedImage
            src="/static/images/projectFeatureImage/incentiveCertificates.avif"
            alt="desc"
          />
          <ProjectCategory>Mobile-Responsive User Interface</ProjectCategory>
          <ProjectTitle>Clean Incentive Certificates Dashboard</ProjectTitle>
          <ProjectSummary>
            I designed a dashboard user interface where ESG (environmental and
            social governance) investors could buy verified Clean Bitcoin along
            with the NFT certificates of verification. The MVP is being
            presented to potential investors for seed funding.
          </ProjectSummary>
          <ProjectPageLink src="/slug/to/page" />
        </ProjectCard>

        <ProjectCard>
          <FeaturedImage
            src="/static/images/projectFeatureImage/poleExperience.avif"
            alt="desc"
          />
          <ProjectCategory>Mobile-Responsive User Interface</ProjectCategory>
          <ProjectTitle>The Pole Experience</ProjectTitle>
          <ProjectSummary>
            I led the migration of the student portal app, website redesign, and
            studio price updates which allowed a $3400 increase in monthly
            revenue.
          </ProjectSummary>
          <ProjectPageLinkPlaceholder />
        </ProjectCard>
        
        <ProjectCard>
          <FeaturedImage
            src="/static/images/projectFeatureImage/lallianceFrancaise.avif"
            alt="desc"
          />
          <ProjectCategory>Mobile-Responsive User Interface</ProjectCategory>
          <ProjectTitle>L’Alliance Française</ProjectTitle>
          <ProjectSummary>
          I created a digital student and member experience for the Houston chapter of the Alliance utilizing AI.
          </ProjectSummary>
          <ProjectPageLink src="/slug/to/page" />
        </ProjectCard>
        
        </div>
      </CenteredContainer>
    </>
  );
}
