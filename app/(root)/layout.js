import "../../styles/globals.css";

export const metadata = {
  title: "gorillasproduction",
  description: 'home page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
