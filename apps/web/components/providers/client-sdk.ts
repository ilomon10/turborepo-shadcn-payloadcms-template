"use client";

import { PayloadSDK } from "@payloadcms/sdk";
import { SERVER_URL } from "../constants";
import type { Config } from "./payload-types";

export const clientSDK = () => {
  const origin =
    typeof window !== "undefined"
      ? `${window.location.origin}/api`
      : SERVER_URL;
  return new PayloadSDK<Config>({
    baseURL: origin,
  });
};
