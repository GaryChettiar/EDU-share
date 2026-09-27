import type { RouteObject } from "react-router";
import LandingPage from "@/components/landing/LandingPage";
import LoginPage from "@/components/system/views/login-view";
import SignupPage from "@/components/system/views/signup-view";

export const routes: RouteObject[] = [
    { path: "/", element: <LandingPage /> },
    { path: "/styleguide", element: <></> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
];