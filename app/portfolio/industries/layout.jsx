
import '../../../styles/globals.css'



export const metadata = {
 
  description: 'portfolio',
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
