// import React from 'react'
// import Image from 'next/image'

// interface HeaderProps  {
//     style?:React.CSSProperties
// }
// const Header:React.FC<HeaderProps> = ({style}) => {
//   return (
//        <div style={{ ...style, position: 'relative', minHeight: '100vh' }}>
//     <div className="flex justify-between items-center w-full p-4 absolute top-0 left-0">
//    <Image src="/logo.svg" alt="Logo" width={200} height={200} />
//    <div>
//      <button className="bg-white text-black px-4 py-2 rounded-full mr-2 border-2 border-red-500 transition-transform duration-300 hover:scale-105">
//        Login
//      </button>
//      <button className="bg-white text-black px-4 py-2 rounded-full border-2 border-red-500 transition-transform duration-300 hover:scale-105">
//        Signup
//      </button>
//    </div>
//  </div>
        
//     </div>
//   )
// }

// export default Header
import React from "react";
import Image from "next/image";

interface HeaderProps {
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ style }) => {
  return (
    <div style={style}>
      <div className="flex justify-between items-center w-full p-4 bg-black">
        <Image src="/logo.svg" alt="Logo" width={200} height={200} />
        <div>
            <button className="bg-black text-white px-4 py-2 rounded-md mr-2 border-2 border-red-500 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-black">
            Login
            </button>
          <button className="bg-black text-white px-4 py-2 rounded-md border-2 border-red-500 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-black">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;