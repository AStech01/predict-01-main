// // components/TopBanner.tsx
// 'use client';

// import { useState } from 'react';
// import { X } from 'lucide-react';
// import Image from 'next/image';

// const TopBanner = () => {
//   const [visible, setVisible] = useState(true);

//   if (!visible) return null;

//   return (
//     <div className="flex items-center justify-between bg-white rounded-lg px-4 py-4 shadow-sm w-full max-w-5xl mx-auto mt-4">
//       <div className="flex items-center space-x-4">
//         {/* Alien Logo and Text */}
//         <div className="flex items-center space-x-2">
//           <Image src="/alien.svg" alt="Alien" width={24} height={24} />
//           <div className="text-black text-sm leading-tight font-medium italic font-handwriting">
//             <p>predict</p>
//             <p>then</p>
//           </div>
//         </div>

//         {/* Divider */}
//         <span className="text-gray-400 text-xl "> \ </span>

//         {/* Slogan */}
//         <p className="italic font-handwriting text-black text-sm sm:text-xl">
//           Welcome to the hub where guesses turn into glory :)
//         </p>
//       </div>

//       {/* Close Icon */}
//       <button onClick={() => setVisible(false)} className="text-gray-500 hover:text-black">
//         <X size={16} />
//       </button>
//     </div>
//   );
// };

// export default TopBanner;

'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const TopBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-white rounded-lg px-4 py-4 shadow-sm w-full max-w-5xl mx-auto mt-4">
      {/* Close Icon - positioned top right */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-black"
      >
        {/* <X size={16} /> */}
         <Image src="/Group 459.png" alt="Alien" width={12} height={12} />
      </button>

      {/* Main Content */}
      <div className="flex items-center space-x-4">
        {/* Alien Logo and Text */}
        <div className="flex items-center space-x-2">
          <Image src="/Group.png" alt="Alien" width={24} height={24} />
          <div className="text-black sm:text-sm text-xs leading-tight font-medium italic font-handwriting">
            <p>predict</p>
            <p>then</p>
          </div>
        </div>

        {/* Divider */}
        <span className="text-gray-400 text-3xl  "> \ </span>

        {/* Slogan */}
        <p className="italic font-handwriting text-black text-xs sm:text-xl">
          Welcome to the hub where guesses turn into glory :)
        </p>
      </div>
    </div>
  );
};

export default TopBanner;
