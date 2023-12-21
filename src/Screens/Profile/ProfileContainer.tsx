import { Profile } from "./Profile";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

export const ProfileContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <Profile data={data} isLoading={isLoading} />;
};
