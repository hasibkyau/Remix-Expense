import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

import styleSheet from "~/tailwind.css?url";
import { LinksFunction } from "@remix-run/node";

import sharedStyles from "~/styles/shared.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => {
  return [
    // { rel: "stylesheet", href: styleSheet },
    { rel: "stylesheet", href: sharedStyles },
  ];
};

export default function App() {
  return <Outlet />;
}
