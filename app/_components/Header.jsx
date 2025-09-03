// import { Button } from '@/components/ui/button'
// import Image from 'next/image'

// import React from 'react'
// function Header() {
//   return (
//     <div className='flex justify-between p-5 shadow-sm'>
//         <Image src={'/seedofocode_logo.png'} alt='Logo' width={150} height={100}/>
//         <Button><a href="/dashboard">Get Started</a></Button>
//     </div>
    
//   )
// }

// export default Header
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className="flex bg-amber-200 justify-between items-center p-4 shadow-sm h-20">
      <div className="flex items-center">
        <Image
          src="/seedofocode_logo.png" // make sure filename matches your uploaded logo
          alt="CourseGenie Logo"
          width={240}  // adjust as needed
          height={70}  // adjust as needed
          className="object-contain"
          priority
        />
      </div>
      <Button>
        <a href="/dashboard">Get Started</a>
      </Button>
    </div>
  )
}

export default Header
