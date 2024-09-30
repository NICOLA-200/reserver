'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    // <Image
    //   onClick={() => router.push('/')}
    //   className="hidden md:block cursor-pointer" 
    //   src="/images/logo.png" 
    //   height="100" 
    //   width="100" 
    //   alt="Logo" 
    // />
    <button onClick={() => router.push('/')} className="text-[#5cd1a6] font-extrabold text-xl">RESERVER</button>
   );
}
 
export default Logo;
