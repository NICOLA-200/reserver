import { SafeUser } from "@/app/types";
                                      
import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";          
import Search from "./Search";   
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return ( 
    <div className="fixed w-full shadow-slate-400 bg-neutral-800 text-white z-10 shadow-sm">
      <div
        className="
          py-3 
          border-b-[1px]
          border-b-neutral-700
        "
      >
      <Container>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
    </div>
    <Categories />
  </div>
  );
}


export default Navbar;