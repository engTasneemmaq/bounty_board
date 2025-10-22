import { Link } from "react-router-dom"; 
export const SocialMediaLinksWithIcons = ({url, icon}) =>  {
    return(
         <Link to={`${url}`} className="bg-[#E7F0FA] h-[48px] w-[48px] text-[#0A65CC] rounded-[4px] flex items-center justify-center hover:text-[#ffffff] hover:bg-[#0A65CC]"> {icon} </Link>
    )
}