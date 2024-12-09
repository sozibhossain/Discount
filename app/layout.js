import { Roboto } from 'next/font/google';
import "./globals.css";
import Navbar from '@/app/components/shared/navbar';
import Footer from '@/app/components/shared/footer';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
