
import '../../../styles/globals.css'



export const metadata = {
 
  description: 'portfolio',
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
