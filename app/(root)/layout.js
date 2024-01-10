import "../../styles/globals.css";

export const metadata = {
  title: "gorillasproduction",
  description: "home page",
  icons: {
    icon: "/images/black-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="XaVrDV0GoR7Pzjdl_2cyPfcCszKRnb-K4zSiOejky4k"
        />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
