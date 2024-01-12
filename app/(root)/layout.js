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
        
        <meta property="og:image" content="https://i.imgur.com/rlqENB0.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </head>
      <body>{children}</body>
    </html>
  );
}
