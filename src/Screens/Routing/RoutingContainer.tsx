import { Routing } from "./Routing";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

export const RoutingContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Routing data={data} isLoading={isLoading} />;
};
