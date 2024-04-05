import React from 'react'

const Header = () => {
    const handlePrint =()=>{
        window.print()
    }
  return (
    <>
   <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
            Invoice
          </h1>
        </div>
      </header>
        </>
  )
}

export default Header