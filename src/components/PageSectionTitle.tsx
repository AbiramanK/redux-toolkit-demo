import { PropsWithChildren } from "react";

export interface PageSectionTitleProps {}

function PageSectionTitle(props: PropsWithChildren<PageSectionTitleProps>) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
      {props?.children}
    </h2>
  );
}

export default PageSectionTitle;
