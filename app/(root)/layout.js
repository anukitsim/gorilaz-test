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
      </head>
      <body>{children}</body>
    </html>
  );
}
