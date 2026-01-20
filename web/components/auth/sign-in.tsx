import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionForm } from "@gadgetinc/react";
import { Link, useLocation } from "react-router";
import { api } from "../../api";

export const SignInComponent = (props: {
  options?: Parameters<typeof useActionForm>[1];
  searchParamsOverride?: string;
  overrideOnSignUp?: () => void;
}) => {
  const location = useLocation();
  const search = props.searchParamsOverride ?? location.search;

  const {
    submit,
    register,
    formState: { errors, isSubmitting },
  } = useActionForm(api.user.signIn, props.options);

  return (
    <div className="w-full max-w-4xl px-8">
      <Card className="overflow-hidden p-0">
        <div className="flex flex-col sm:flex-row">
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-between bg-muted/80 p-8">
            <div className="flex flex-col gap-7">
              <div className="w-12 h-12 overflow-hidden">
                <img src="/api/assets/autologo?background=dark" alt="App name" className="h-12 max-w-none!" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">
                Sign in to
                <br />
                {process.env.GADGET_PUBLIC_APP_SLUG || "Gadget app"}
              </h1>
            </div>
            <p className="text-sm text-muted-foreground sm:pt-4">
              Don't have an account?{" "}
              <Link
                className="hover:underline font-medium text-foreground"
                to={`/sign-up${search}`}
                onClick={
                  props.overrideOnSignUp
                    ? (e) => {
                        e.preventDefault();
                        props.overrideOnSignUp?.();
                      }
                    : undefined
                }
              >
                Sign up →
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex-1 p-8">
            <form onSubmit={submit}>
              <div className="flex flex-col gap-7">
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href={`/auth/google/start${search}`}>
                    <img
                      className="mr-2 h-4 w-4"
                      src="https://assets.gadget.dev/assets/default-app-assets/google.svg"
                      alt="Google logo"
                    />
                    Sign in with Google
                  </a>
                </Button>
                <div className="flex flex-col gap-5">
                  <div className="grid w-full max-w-sm items-center gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      autoComplete="off"
                      {...register("email")}
                      className={errors?.user?.email?.message ? "border-destructive" : ""}
                    />
                    {errors?.user?.email?.message && (
                      <p className="text-sm text-destructive">{errors.user.email.message}</p>
                    )}
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="off"
                      {...register("password")}
                      className={errors?.user?.password?.message ? "border-red-500" : ""}
                    />
                    {errors?.user?.password?.message && (
                      <p className="text-sm text-destructive">{errors.user.password.message}</p>
                    )}
                  </div>

                  <Button className="w-full" size="lg" disabled={isSubmitting} type="submit">
                    Sign in with email
                  </Button>
                  {errors?.root?.message && <p className="text-sm text-destructive">{errors.root.message}</p>}

                  <p className="text-sm text-muted-foreground text-center">
                    Forgot your password?{" "}
                    <Link to={`/forgot-password${search}`} className="text-primary hover:underline font-medium">
                      Reset password
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};