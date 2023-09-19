import './globals.css'
import { Poppins } from 'next/font/google'

const robo = Poppins({
  weight: ['100', '300', '400', '500', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robo.className} mx-auto my-0 p-0 w-screen   flex flex-col  items-center align-middle   `}>
        <main className='w-full min-h-screen max-h-fit max-w-7xl   flex flex-col  items-center align-middle mx-auto my-0 '>
          {children}
        </main>
      </body>
    </html>
  )
}
