import Head from "next/head";
import Script from "next/script";

interface Props {
  noIndex?: boolean;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SiteHead = (props: Props) => {
  const { noIndex, title, description, image, url } = props;

  const GoogleAnalytics = () => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      return null;
    }

    return (
      <>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="afterInteractive"
        />
      </>
    );
  }

  const AdditionalMetaData = () => (
    <>
      <meta name="description" content={description} />

      <link rel="canonical" href={`https://bhxtravel.com${url}`} />

      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://bhxtravel.com${url}`} />
      <meta property="og:site_name" content="BHXTravel" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {noIndex && <meta name="robots" content="noindex" />}
      <meta name="title" />

      <title>{title}</title>

      {!noIndex && <AdditionalMetaData />}

      <meta
        name="google-site-verification"
        content="qpAazrU6bYVylorkqbpYBnqHJEOa91US4OiGddiN3dE"
      />

      <GoogleAnalytics />
    </Head>
  );
};

export default SiteHead;
