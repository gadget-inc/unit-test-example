import { SignUpComponent } from "@/components/auth/sign-up";
import { Link, useLocation, useNavigate, useOutletContext } from "react-router";
import type { RootOutletContext } from "../root";

export default function () {
  const { gadgetConfig } = useOutletContext<RootOutletContext>();

  const { search } = useLocation();
  const navigate = useNavigate();

  return <SignUpComponent />;
}