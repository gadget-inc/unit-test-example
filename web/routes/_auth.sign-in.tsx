import { SignInComponent } from "@/components/auth/sign-in";
import { useNavigate, useOutletContext } from "react-router";
import type { RootOutletContext } from "../root";

export default function () {
  const { gadgetConfig } = useOutletContext<RootOutletContext>();

  const navigate = useNavigate();
  const options = {
    onSuccess: () => navigate(gadgetConfig.authentication!.redirectOnSuccessfulSignInPath!),
  };

  return <SignInComponent options={options} />;
}