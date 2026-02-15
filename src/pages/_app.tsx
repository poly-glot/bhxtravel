import "../styles/global.scss";

import type { AppProps } from "next/app";
import { builder } from "@builder.io/react";

import "../components/Navigation/register";
import "../components/Icon/register";
import "../components/SiteContact/register";
import "../components/Social/register";
import "../components/Heading/register";
import "../components/List/register";
import "../components/Cta/register";
import "../components/QuoteForm/register";

// Initialize builder with your apiKey
builder.init(process.env.NEXT_PUBLIC_BUILDER_ID!);

export default function BhxTravel({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
