import { SignedIn, SignedInOrRedirect, SignedOut, SignedOutOrRedirect, useSignOut } from "@gadgetinc/react";
import React, { Suspense, useEffect } from "react";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./App.css";
import Icon from "./assets/google.svg";
import Index from "./routes/index";
import SignedInPage from "./routes/signed-in";

const App = () => {
  useEffect(() => {
    document.title = `Home - ${process.env.GADGET_PUBLIC_APP_SLUG} - Gadget`;
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <SignedOutOrRedirect path="/signed-in">
              <Index />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="signed-in"
          element={
            <SignedInOrRedirect>
              <SignedInPage />
            </SignedInOrRedirect>
          }
        />
      </Route>
    )
  );

  return (
    <div>
      <Suspense fallback={<></>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <Header />
      <div className="app">
        <div className="app-content">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const signOut = useSignOut();

  return (
    <div className="header">
      <div className="logo">{process.env.GADGET_PUBLIC_APP_SLUG}</div>
      <div className="header-content">
        <SignedIn>
          <>
            This is {process.env.GADGET_PUBLIC_APP_SLUG}&apos;s user sign out:
            <button className="signout-button" onClick={signOut}>
              Sign Out
            </button>
          </>
        </SignedIn>
        <SignedOut>
          <>
            This is {process.env.GADGET_PUBLIC_APP_SLUG}&apos;s user sign in:
            <a className="signin-button" href="/auth/google/start?redirectTo=/signed-in">
              <img src={Icon} width={22} height={22} />
              Sign In with Google
            </a>
          </>
        </SignedOut>
      </div>
    </div>
  );
};

export default App;
