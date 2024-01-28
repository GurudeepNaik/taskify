import React from "react";
import { OrgControl } from "./_components/orgControl";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <OrgControl />
      {children}
    </div>
  );
};

export default layout;
