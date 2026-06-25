// import "./globals.css"
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"

// export const metadata = {
//   title: "Eric AI",
//   description: "Clinical and data solutions platform",
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
        
//         {children}
      
        
//       </body>
//     </html>
//   )
// }



import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "eRIC AI",
  description: "Clinical and data solutions platform",
  
   icons: {
    icon: "/browser/eric.png",
  },
};

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        {children}

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}