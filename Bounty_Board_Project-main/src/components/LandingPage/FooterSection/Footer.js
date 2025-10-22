// /** @format */
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0F141B] text-white/90">
//       <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand + address */}
//           <div>
//             <div className="flex items-center gap-2">
//               <img src="/logo192.png" alt="" className="h-6 w-6" />
//               <span className="font-semibold text-white">Bounty Board</span>
//             </div>
//             <p className="mt-4 text-sm text-white/60">
//               Build together. Ship faster. Get paid fairly.
//             </p>
//             <p className="mt-3 text-sm text-white/60">
//               Email: <a href="mailto:support@bountyboard.com" className="text-white/80 hover:underline">support@bountyboard.com</a>
//             </p>
//           </div>

//           {/* Product */}
//           <div>
//             <h4 className="font-semibold text-white mb-3">Product</h4>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/" className="hover:underline">Explore Bounties</Link></li>
//               <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
//               <li><Link to="/dashboard/post-bounty" className="hover:underline">Post a Bounty</Link></li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="font-semibold text-white mb-3">Company</h4>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/about" className="hover:underline">About</Link></li>
//               <li><Link to="/contact" className="hover:underline">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h4 className="font-semibold text-white mb-3">Support</h4>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
//               <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
//               <li><Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link></li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/50">
//           © {new Date().getFullYear()} Bounty Board — All rights reserved
//         </div>
//       </div>
//     </footer>
//   );
// }


/** @format */
import { Link } from "react-router-dom";
import { Mail, Heart, Search, LayoutDashboard, Plus, Info, MessageCircle, HelpCircle, Shield, FileText } from "lucide-react";
import BountyBoardLogo from "../../../assets/logos/BountyBoard.svg";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f172a] text-white py-16 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Info */}
        <div className="animate-slide-in-left">
          <Link to="/" className="inline-block mb-4">
            <img
              src={BountyBoardLogo}
              alt="Bounty Board"
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed">
            Build together. Ship faster. Get paid fairly.
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-300 hover:text-white transition-colors group cursor-pointer">
            <Mail size={16} className="group-hover:text-purple-400 transition-colors" />
            <a href="mailto:support@bountyboard.com" className="hover:text-gradient transition-all">
              support@bountyboard.com
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
          <h4 className="font-bold text-lg mb-4 text-gradient">Product</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-flex items-center gap-2 group">
                <Search size={16} className="group-hover:text-blue-400 transition-colors" />
                Explore Bounties
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-flex items-center gap-2 group">
                <LayoutDashboard size={16} className="group-hover:text-blue-400 transition-colors" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/post-bounty" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-flex items-center gap-2 group">
                <Plus size={16} className="group-hover:text-blue-400 transition-colors" />
                Post a Bounty
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
          <h4 className="font-bold text-lg mb-4 text-gradient">Company</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-flex items-center gap-2 group">
                <Info size={16} className="group-hover:text-green-400 transition-colors" />
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-flex items-center gap-2 group">
                <MessageCircle size={16} className="group-hover:text-green-400 transition-colors" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="animate-slide-in-right" style={{animationDelay: '0.3s'}}>
          <h4 className="font-bold text-lg mb-4 text-gradient">Support</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/faqs" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-flex items-center gap-2 group">
                <HelpCircle size={16} className="group-hover:text-yellow-400 transition-colors" />
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-flex items-center gap-2 group">
                <Shield size={16} className="group-hover:text-yellow-400 transition-colors" />
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-flex items-center gap-2 group">
                <FileText size={16} className="group-hover:text-yellow-400 transition-colors" />
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative mt-12 pt-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 flex items-center gap-2 animate-fade-in">
              © 2025 <span className="font-semibold text-white">Bounty Board</span> — All rights reserved
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-2 animate-fade-in">
              Crafted with <Heart size={16} className="text-red-500 animate-pulse" /> by creative minds
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient circles */}
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{animationDelay: '1s'}} />
    </footer>
  );
}
