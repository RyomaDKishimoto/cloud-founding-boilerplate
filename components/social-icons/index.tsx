import Facebook from "./facebook.svg";
import Instagram from "./instagram.svg";
import Mail from "./mail.svg";
import Twitter from "./twitter.svg";
import Youtube from "./youtube.svg";

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
  instagram: Instagram,
};

type IconType = keyof typeof components;

const SocialIcon = ({
  kind,
  href,
  size = 8,
}: {
  kind: IconType;
  href: string;
  size: number;
}) => {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-400 h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
