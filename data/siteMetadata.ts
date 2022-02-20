const siteMetadata = {
  title: "Next.js Starter Blog",
  author: "Ryoma Kishimoto",
  headerTitle: "Wataru Cloud Founding",
  email: "address@yoursite.com",
  theme: "system", // system, dark or light
  twitter: "https://twitter.com/Twitter",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  instagram: "https://www.linkedin.com",
  description: "A blog created with Next.js and Tailwind.",
};

export default siteMetadata;

export type GiftType = {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
  price: number;
  apiId: string;
  quantity: number;
  selected: boolean;
};

export const GiftData: GiftType[] = [
  {
    title: "A Search Engine",
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: "https://dummyimage.com/400x400",
    href: "https://www.google.com",
    price: 3500,
    apiId: "price_1KPQwsBo5n6BpyDY6xlDje8f",
    quantity: 1,
    selected: true,
  },
  {
    title: "The Time Machine",
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: "https://dummyimage.com/400x400",
    href: "/blog/the-time-machine",
    price: 5000,
    apiId: "price_1KPRSHBo5n6BpyDYn19hDMKZ",
    quantity: 1,
    selected: false,
  },
];
