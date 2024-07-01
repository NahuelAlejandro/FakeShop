import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#802C6E] gap-4 flex flex-col justify-center py-4 md:flex-row'>
      <section className='flex flex-col gap-2 items-center md:w-[70%] lg:items-start' >
        <h3 className="font-semibold text-2xl text-white px-4">Fake<span className="text-yellow-400 font-bold">Shop</span></h3>
        <h4 className='text-white font-semibold text-xl text-pretty px-4'>Disclaimer: Educational Use of Resources</h4>
        <p className='text-white text-pretty px-4'>The content displayed on this platform is solely for educational purposes. The product information, including images and icons, is sourced from various platforms to simulate a real-world environment. The images are obtained from <Link className='font-semibold text-lg hover:text-yellow-400' to={"https://pixabay.com"}>pixabay</Link>, a repository of free-to-use images, while the icons are sourced from <Link className='font-semibold text-lg hover:text-yellow-400' to={"https://flowbite.com"}>flowbite</Link>. Please note that this platform utilizes the <Link className='font-semibold text-lg hover:text-yellow-400' to={"https://fakestoreapi.com"}>Fake Store API</Link> to provide a simulated shopping experience for learning and demonstration purposes only. No real transactions are processed, and the information presented is not intended for commercial use.</p>
      </section>
     <div className='flex flex-col items-center md:items-start gap-4 px-4 justify-between md:flex-row md:px-0 md:pt-10'>
     <article className='flex flex-col items-center lg:items-start gap-2'>
        <h4 className='font-semibold text-xl text-white'>Social Media</h4>
        <ul className='flex md:flex-col gap-2 '>
          <li className='flex items-center text-white hover:text-yellow-400 gap-1 cursor-pointer'>
            <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
            </svg>Twitter
          </li>
          <li className='flex items-center text-white hover:text-yellow-400 gap-1 cursor-pointer'>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
            </svg>Facebook
          </li>
          <li className='flex items-center text-white hover:text-yellow-400 gap-1 cursor-pointer'>
            <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
            </svg>Instagram
          </li>
        </ul>
      </article>
      <article className='flex flex-col gap-2'>
        <h4 className='font-semibold text-xl text-white'>Customer Service</h4>
        <ul className='text-white flex flex-col gap-1 '>
          <li className='hover:text-yellow-400 cursor-pointer'>Contact Us</li>
          <li className='hover:text-yellow-400 cursor-pointer'>Order Status</li>
          <li className='hover:text-yellow-400 cursor-pointer'>Shipping</li>
          <li className='hover:text-yellow-400 cursor-pointer'>Return Policy & Exchanges</li>
          <li className='hover:text-yellow-400 cursor-pointer'>Gift Cards</li>
          <li className='hover:text-yellow-400 cursor-pointer'>FAQ</li>
          <li className='hover:text-yellow-400 cursor-pointer'>Product Recalls</li>
          <li className='hover:text-yellow-400 cursor-pointer'>Price Adjustments</li>
        </ul>
      </article>
     </div>
    </footer>
  )
}

export default Footer