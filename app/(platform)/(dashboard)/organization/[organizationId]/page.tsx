import { OrganizationSwitcher, auth } from "@clerk/nextjs";
import React from "react";

const page = () => {
  const { userId, orgId } = auth();
  return <div>Organization</div>;
};

export default page;
