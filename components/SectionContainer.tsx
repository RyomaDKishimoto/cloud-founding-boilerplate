import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className="px-4 mx-auto max-w-5xl sm:px-6 xl:px-0 xl:max-w-6xl">
      {children}
    </div>
  );
}
