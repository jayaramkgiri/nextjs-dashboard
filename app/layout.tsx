import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from '@/app/ui/overview/sidenav';
import Cards from '@/app/ui/overview/cards';
import { headers } from 'next/headers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = headers();
  const pathname = header.get('next-url');
  console.log(pathname);
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen w-full flex-col md:flex-row md:overflow-hidden ">
          <div className="w-full flex-none md:w-1/6">
            <SideNav />
          </div>
          <div className="relative hidden h-screen w-0.5 bg-whitesmoke-100 md:block" />
          <div className="relative hidden h-screen w-0.5 bg-whitesmoke-200 md:block" />
          <div className="flex h-auto w-full shrink-0 flex-row items-center justify-start overflow-hidden md:hidden">
            <Cards cardType="bid" />
            <Cards cardType="ask" />
          </div>
          <div className="h-[92%] grow md:ml-10 md:overflow-auto">
            {children}
          </div>
        </div>
        <footer className="sticky bottom-0 m-4 rounded-lg">
          <div className="text-sm  mx-auto w-full max-w-screen-xl flex-row p-4 text-gray-500 sm:text-center md:flex md:items-center md:justify-center dark:text-gray-400">
            © 2024{' FirstDigit LLP'}. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
