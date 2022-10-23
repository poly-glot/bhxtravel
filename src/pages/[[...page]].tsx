import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { Builder, builder, BuilderComponent } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import { GetServerSidePropsContext } from "next/types";
import SiteHead from "../components/SiteHead";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { removeTracking } from "../utils/utils";

export async function getStaticProps({
  params,
  resolvedUrl,
}: GetServerSidePropsContext<{ page: string[] }>) {
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  const header = await builder.get("header", { url: resolvedUrl }).promise();
  const footer = await builder.get("footer", { url: resolvedUrl }).promise();

  return removeTracking({
    props: {
      page: page || null,
      header: header || null,
      footer: footer || null,
    },
    revalidate: 15,
  });
}

export async function getStaticPaths() {
  const pages = await builder.getAll("page", {
    options: { noTargeting: true },
    omit: "data.blocks",
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({
  page,
  header,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const isLive = !Builder.isEditing && !Builder.isPreviewing;
  if (!page && isLive) {
    return (
      <>
        <SiteHead title="Page Not found" noIndex={true} />
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  // @ts-ignore
  const { title, description, image, url } = page.data;

  return (
    <>
      <SiteHead
        title={title}
        description={description}
        image={image}
        url={url}
      />
      <SiteHeader content={header} />
      <BuilderComponent model="page" content={page} />
      <SiteFooter content={footer} />
    </>
  );
}
