import type { NextPage } from "next";
import siteMetadata from "../data/siteMetadata";
import SocialIcon from "./social-icons";

const CtaSection: NextPage = () => {
  return (
    <div className="container flex flex-col items-center py-24 px-5 mx-auto md:flex-row">
      <div className="flex flex-col pr-0 mb-6 w-full text-center md:pr-10 md:mb-0 md:w-auto md:text-left">
        <h2 className="mb-1 text-xs font-medium tracking-wider text-teal-500">
          ROOF PARTY POLAROID
        </h2>
        <h1 className="text-2xl font-medium tracking-wider text-gray-600 dark:text-white md:text-3xl">
          質問やご不明点などあればSNSでも受け付けてます！
        </h1>
      </div>
      <div className="flex shrink-0 items-center mx-auto space-x-4 md:mr-0 md:ml-auto">
        <img
          className="inline-flex object-cover w-16 h-16 rounded-full md:mr-2"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="Profile image"
        />
        <SocialIcon
          kind="mail"
          href={`mailto:${siteMetadata.email}`}
          size={6}
        />
        <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
        <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
      </div>
    </div>
  );
};

export default CtaSection;
