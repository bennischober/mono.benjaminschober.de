import type { MetaFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import { ErrorBoundaryComponent } from "@remix-run/node";
import GlobalStyle from "./styles/GlobalStyle";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Benjamin Schober - Portfolio",
    viewport: "width=device-width,initial-scale=1",
});

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
    console.error(error);
    return (
        <html>
            <head>
                <title>Oh no!</title>
                <Meta />
                <Links />
            </head>
            <body>
                {/* add the UI you want your users to see */}
                <Scripts />
            </body>
        </html>
    );
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <GlobalStyle />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
