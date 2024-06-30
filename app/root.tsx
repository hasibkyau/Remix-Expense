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
        <header>
          <ul className="m-3 p-2 bg-slate-600 text-red-50 flex gap-3">
            <Link to={"/"}>Home</Link>
            <Link to={"/expenses"}>Expenses</Link>
            <Link to={"/auth"}>Auth</Link>
            <Link to={"/pricing"}>Pricing</Link>
          </ul>
        </header>

        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styleSheet }];
};

export default function App() {
  return <Outlet />;
}
