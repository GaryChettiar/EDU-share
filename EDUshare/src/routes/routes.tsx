import type { RouteObject } from "react-router";
import { StyleguidePage } from "@/components/styleguide/StyleguidePage";
import LoginPage from "@/components/system/views/login-view";
import SignupPage from "@/components/system/views/signup-view";

export const routes: RouteObject[] = [
    { path: "/", element: <StyleguidePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
];