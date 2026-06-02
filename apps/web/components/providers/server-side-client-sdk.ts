import { PayloadSDK } from "@payloadcms/sdk";
import type { Config } from "./payload-types";
import { SERVER_URL } from "../constants";

export const serverSideClientSDK = () => {
  const origin =
    typeof window !== "undefined"
      ? `${window.location.origin}/api`
      : SERVER_URL;
  return new PayloadSDK<Config>({
    baseURL: origin,
  });
};
