import { CustomProvider } from "@/store/customProvider";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter, Outfit, Rethink_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/globals.css";
import WebsiteHeader from "@/components/organisms/WebsiteHeader";
import localFont from "next/font/local";
import Footer from "@/components/molecules/Footer";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const reThink = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Local Georgia font
const georgia = localFont({
  src: "./fonts/georgia/georgia.ttf",
  variable: "--font-georgia",       
  weight: "400",                     
  style: "normal",
});

// const georgia = Georgia({
//   variable: "--font-georgia",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Landlord Logic Website",
  description: ` Landlord Logic`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${reThink.variable}  ${outfit.variable} ${georgia.variable}`}
        suppressHydrationWarning
      >
        <ToastContainer />
        <CustomProvider>
          <WebsiteHeader />
          {/* <SocketProvider> */}
          {children}
          {/* </SocketProvider> */}
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
