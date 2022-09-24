import Head from "next/head";

interface Props {
  noIndex?: boolean;
  title?: string;
}

const SiteHead = (props: Props) => {
  const { noIndex, title } = props;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {noIndex && <meta name="robots" content="noindex" />}
      <meta name="title" />
      <title>{title}</title>
    </Head>
  );
};

export default SiteHead;
