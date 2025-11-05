"use server";
import { LoginForm } from "@/components/organisms/LoginForm";
import { SignupForm} from "@/components/organisms/SignupForm";

export default async function Home() {
  return <SignupForm />;
}
