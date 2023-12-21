import { Noti } from "./Noti";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

export const NotiContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Noti data={data} isLoading={isLoading} />;
};
