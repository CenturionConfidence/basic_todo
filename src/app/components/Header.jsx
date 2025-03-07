import Image from 'next/image'

function Header() {
  return (
    <header className="bg-black flex justify-center items-center h-[20vh] ">
        <Image
          className=""
          src="/Logo.svg"
          alt="Vercel Logo"
          width={200}
          height={200}
        />
      </header>
  )
}

export default Header