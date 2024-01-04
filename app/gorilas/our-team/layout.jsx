
import '../../../styles/globals.css'



export const metadata = {
  
  description: 'our-team',
  icons: {
    icon: '/images/logo.svg'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
       
        </body>
    </html>
  )
}
