import { Link, MetaFunction, json, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="m-3 flex flex-col border">
      <div className="border border-red-100">Home Page</div>
    </div>
  );
}
