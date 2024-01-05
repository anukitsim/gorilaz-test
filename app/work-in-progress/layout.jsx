
import '../../styles/globals.css'
import Header from '@app/components/Header'


export const metadata = {
 
  description: 'production',
  icons: {
    icon: '/images/black-logo.png'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
   <Header />
        {children}
     
      
        </body>
    </html>
  )
}
