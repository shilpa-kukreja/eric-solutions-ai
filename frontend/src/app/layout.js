import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export const metadata = {
  title: "Eric AI",
  description: "Clinical and data solutions platform",
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