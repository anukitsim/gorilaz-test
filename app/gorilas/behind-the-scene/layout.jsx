
import '../../../styles/globals.css'



export const metadata = {
  
  description: 'behind the scenes page',
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
