import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET() {
  const imageData = await fetch(new URL('https://gorillasproduction.ge/images/main-logo.svg', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img width="256" height="256" src={imageData} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}