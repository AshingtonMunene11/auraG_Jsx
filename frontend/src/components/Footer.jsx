// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Leaf,
//   Mail,
//   Phone,
//   TwitterIcon,
//   MapPin,
//   FacebookIcon,
//   Instagram,
// } from "lucide-react";

// export function Footer() {
//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   return (
//     <footer className="bg-gray-50 border-t border-gray-100">
//       <div className="container mx-auto px-4 lg:px-8 py-16">
//         {/* Desktop Grid */}
//         <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-2">
//               <div className="bg-emerald-100 p-2 rounded-lg">
//                 <Leaf className="w-5 h-5 text-emerald-600" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-serif text-lg text-gray-900">Aura Gardens</span>
//                 <span className="text-xs text-emerald-600">Natural Beauty</span>
//               </div>
//             </div>
//             <p className="text-sm text-gray-600 leading-relaxed">
//               An oasis of tranquility and natural splendor. Experience the perfect blend of
//               manicured landscapes and serene environments.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
//             <ul className="space-y-3">
//               <li><Link href="/about" className="text-sm text-gray-600 hover:text-emerald-600">About Us</Link></li>
//               <li><Link href="/gallery" className="text-sm text-gray-600 hover:text-emerald-600">Gallery</Link></li>
//               <li><Link href="/events" className="text-sm text-gray-600 hover:text-emerald-600">Events</Link></li>
//               <li><Link href="/visit" className="text-sm text-gray-600 hover:text-emerald-600">Plan Your Visit</Link></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="font-medium text-gray-900 mb-4">Contact</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-emerald-600 mt-0.5" /><span className="text-sm text-gray-600">+1 (234) 567-8900</span></li>
//               <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-emerald-600 mt-0.5" /><span className="text-sm text-gray-600">info@auragardens.com</span></li>
//               <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-emerald-600 mt-0.5" /><span className="text-sm text-gray-600">123 Garden Lane<br/>Nairobi, Kenya</span></li>
//             </ul>
//           </div>

//           {/* Social & Hours */}
//           <div>
//             <h3 className="font-medium text-gray-900 mb-4">Connect With Us</h3>
//             <div className="flex gap-3 mb-6">
//               <a href="#" className="bg-white p-2 rounded-lg hover:bg-emerald-50" aria-label="Instagram"><Instagram className="w-5 h-5 text-gray-600" /></a>
//               <a href="#" className="bg-white p-2 rounded-lg hover:bg-emerald-50" aria-label="Facebook"><FacebookIcon className="w-5 h-5 text-gray-600" /></a>
//               <a href="#" className="bg-white p-2 rounded-lg hover:bg-emerald-50" aria-label="Twitter"><TwitterIcon className="w-5 h-5 text-gray-600" /></a>
//             </div>
//             <div className="text-sm text-gray-600">
//               <p className="font-medium mb-2">Hours</p>
//               <p>Mon - Fri: 8am - 6pm</p>
//               <p>Sat - Sun: 9am - 7pm</p>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Accordion */}
//         <div className="lg:hidden space-y-6">
//           {["Quick Links", "Contact", "Connect With Us"].map((section) => (
//             <div key={section}>
//               <button
//                 onClick={() => toggleSection(section)}
//                 className="w-full flex justify-between items-center py-3 border-b border-gray-200 text-gray-900 font-medium"
//               >
//                 {section}
//                 <span>{openSection === section ? "-" : "+"}</span>
//               </button>
//               <AnimatePresence>
//                 {openSection === section && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="mt-3 space-y-3 text-sm text-gray-600"
//                   >
//                     {section === "Quick Links" && (
//                       <>
//                         <Link href="/about" className="block">About Us</Link>
//                         <Link href="/gallery" className="block">Gallery</Link>
//                         <Link href="/events" className="block">Events</Link>
//                         <Link href="/visit" className="block">Plan Your Visit</Link>
//                       </>
//                     )}
//                     {section === "Contact" && (
//                       <>
//                         <div className="flex items-start gap-3"><Phone className="w-4 h-4 text-emerald-600 mt-0.5" /><span>+1 (234) 567-8900</span></div>
//                         <div className="flex items-start gap-3"><Mail className="w-4 h-4 text-emerald-600 mt-0.5" /><span>info@auragardens.com</span></div>
//                         <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-emerald-600 mt-0.5" /><span>123 Garden Lane, Nairobi</span></div>
//                       </>
//                     )}
//                     {section === "Connect With Us" && (
//                       <>
//                         <div className="flex gap-3">
//                           <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5 text-gray-600" /></a>
//                           <a href="#" aria-label="Facebook"><FacebookIcon className="w-5 h-5 text-gray-600" /></a>
//                           <a href="#" aria-label="Twitter"><TwitterIcon className="w-5 h-5 text-gray-600" /></a>
//                         </div>
//                         <p className="mt-2">Mon - Fri: 8am - 6pm</p>
//                         <p>Sat - Sun: 9am - 7pm</p>
//                       </>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-gray-500">
//             © {new Date().getFullYear()} Aura Gardens. All rights reserved.
//           </p>
//           <div className="flex gap-6">
//             <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</Link>
//             <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// import {
//   Leaf,
//   Mail,
//   Phone,
//   MapPin,
//   Instagram,
// } from "lucide-react";

const FacebookIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* <div className="bg-emerald-100 p-2 rounded-lg">
                <Leaf className="w-5 h-5 text-emerald-600" />
              </div> */}
              <div className="flex flex-col">
                <span className="font-serif text-lg text-gray-900">Aura Gardens</span>
                <span className="text-xs text-emerald-600">Natural Beauty</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              An oasis of tranquility and natural splendor. Experience the perfect blend of
              manicured landscapes and serene environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-emerald-600">About Us</Link></li>
              <li><Link href="/gallery" className="text-sm text-gray-600 hover:text-emerald-600">Gallery</Link></li>
              <li><Link href="/events" className="text-sm text-gray-600 hover:text-emerald-600">Events</Link></li>
              <li><Link href="/visit" className="text-sm text-gray-600 hover:text-emerald-600">Plan Your Visit</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              {/* <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-emerald-600 mt-0.5" /><span className="text-sm text-gray-600">+1 (234) 567-8900</span></li> */}
              {/* <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-emerald-600 mt-0.5" /><span className="text-sm text-gray-600">info@auragardens.com</span></li> */}
              {/* <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-emerald-600 mt-0.5" /><span className="text-sm text-gray-600">123 Garden Lane<br/>Nairobi, Kenya</span></li> */}
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Connect With Us</h3>
            {/* <div className="flex gap-3 mb-6">
              <a href="#" className="bg-white p-2 rounded-lg hover:bg-emerald-50" aria-label="Instagram"><Instagram className="w-5 h-5 text-gray-600" /></a>
              <a href="#" className="bg-white p-2 rounded-lg hover:bg-emerald-50" aria-label="Facebook"><FacebookIcon className="w-5 h-5 text-gray-600" /></a>
              <a href="#" className="bg-white p-2 rounded-lg hover:bg-emerald-50" aria-label="X (Twitter)"><XIcon className="w-5 h-5 text-gray-600" /></a>
            </div> */}
            <div className="text-sm text-gray-600">
              <p className="font-medium mb-2">Hours</p>
              <p>Mon - Fri: 8am - 6pm</p>
              <p>Sat - Sun: 9am - 7pm</p>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-6">
          {["Quick Links", "Contact", "Connect With Us"].map((section) => (
            <div key={section}>
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex justify-between items-center py-3 border-b border-gray-200 text-gray-900 font-medium"
              >
                {section}
                <span>{openSection === section ? "-" : "+"}</span>
              </button>
              <AnimatePresence>
                {openSection === section && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 space-y-3 text-sm text-gray-600"
                  >
                    {section === "Quick Links" && (
                      <>
                        <Link href="/about" className="block">About Us</Link>
                        <Link href="/gallery" className="block">Gallery</Link>
                        <Link href="/events" className="block">Events</Link>
                        <Link href="/visit" className="block">Plan Your Visit</Link>
                      </>
                    )}
                    {section === "Contact" && (
                      <>
                        {/* <div className="flex items-start gap-3"><Phone className="w-4 h-4 text-emerald-600 mt-0.5" /><span>+1 (234) 567-8900</span></div> */}
                        {/* <div className="flex items-start gap-3"><Mail className="w-4 h-4 text-emerald-600 mt-0.5" /><span>info@auragardens.com</span></div> */}
                        {/* <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-emerald-600 mt-0.5" /><span>123 Garden Lane, Nairobi</span></div> */}
                      </>
                    )}
                    {section === "Connect With Us" && (
                      <>
                        <div className="flex gap-3">
                          {/* <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5 text-gray-600" /></a> */}
                          {/* <a href="#" aria-label="Facebook"><FacebookIcon className="w-5 h-5 text-gray-600" /></a> */}
                          {/* <a href="#" aria-label="X (Twitter)"><XIcon className="w-5 h-5 text-gray-600" /></a> */}
                        </div>
                        <p className="mt-2">Mon - Fri: 8am - 6pm</p>
                        <p>Sat - Sun: 9am - 7pm</p>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Aura Gardens. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}