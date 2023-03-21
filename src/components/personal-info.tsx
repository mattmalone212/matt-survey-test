import * as React from "react";
import BioSection from "./bio-section";
import InfoSection from "./info-section";
import SocialLinks from "./social-links";

interface PersonalInfoProps {
  twitter?: string;
  github?: string;
  devTo?: string;
  introduction?: string;
  home?: string;
  skills?: string[];
  interests?: string[];
}

const PersonalInfo = ({
  twitter,
  github,
  devTo,
  introduction,
  home,
  skills,
  interests,
}: PersonalInfoProps) => {
  return (
    <div className="centered-container">
      <SocialLinks twitter={twitter} github={github} dev_to={devTo} />
      <InfoSection title="Introduction">
        <p className="text-lg">{introduction}</p>
      </InfoSection>
      <InfoSection title="Bio">
        <BioSection home={home} skills={skills} interests={interests} />
      </InfoSection>
    </div>
  );
};

export default PersonalInfo;
