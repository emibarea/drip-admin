"use client";

import { UseOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import React from "react";
import { ApiAlert } from "./api-alert";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}
export const ApiList: React.FC<ApiListProps> = ({
  entityIdName,
  entityName,
}) => {
  const params = useParams();
  const origin = UseOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;
  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityIdName}/{${entityIdName}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityIdName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityIdName}/{${entityIdName}}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityIdName}/{${entityIdName}}`}
      />
    </>
  );
};
