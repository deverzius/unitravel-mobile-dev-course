import { Scan } from "./Scan";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

export const ScanContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Scan data={data} isLoading={isLoading} />;
};
