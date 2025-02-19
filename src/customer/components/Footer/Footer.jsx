// import React from "react";
// import { Grid2, Button, Typography } from "@mui/material";
// import { Link } from "react-alice-carousel";

// const Footer = () => {
//   return (
//     <div className="flex flex-col bg-black text-white">
//       <Grid2
//         className="bg-black text-white text-center justify-between mt-10 pl-3 pr-3 "
//         container
//         sx={{ bgcolor: "black", color: "white", py: 3 }}
//       >
//         <Grid2 item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Company
//           </Typography>
//           <div>
//             <Button className="pb-1" variant="h6" gutterBottom>
//               About
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-1" variant="h6" gutterBottom>
//               Blog
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-1" variant="h6" gutterBottom>
//               press
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-1" variant="h6" gutterBottom>
//               Jobs
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-1" variant="h6" gutterBottom>
//               Partners
//             </Button>
//           </div>
//         </Grid2>

//         <Grid2 item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Solutions
//           </Typography>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Marketing
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Analytics
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Commerce
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Insights
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Support
//             </Button>
//           </div>
//         </Grid2>

//         <Grid2 item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Documentation
//           </Typography>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Guides
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Blog
//             </Button>
//           </div>
//         </Grid2>

//         <Grid2 item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Legal
//           </Typography>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Claim
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Privacy
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterBottom>
//               Terms
//             </Button>
//           </div>
//         </Grid2>
//         </Grid2>
//         <Grid2 className='pt-5 pb-2' item xs={12}>
//             <Typography variant="body2" component="p" align="center">
//                 &copy; 2024 My Company. All rights reserved.
//             </Typography>
//             <Typography variant="body2" component="p" align="center">
//                 &copy; Made with love by me.
//             </Typography>
//             <Typography variant="body2" component="p" align="center">
//                 &copy; Icons made by .
        
//             <Link href="">
//             Freepik
//             </Link>
//             </Typography>
//         </Grid2>
//     </div>
//   );
// };

// export default Footer;

import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px--24'>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-xl font-semibold'>Glassify</h3>
          <p className='mt-4'>Your One step for all your needs. 
          Shop with use and experience the best online shopping experiences.</p>
        </div>
        <div className='flex flex-col md:items-center'>
         <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to="/" className='hover:underline'>Home</Link>
            </li>
            <li>
              {/* <Link to="/categories" className='hover:underline'>Shop</Link> */}
              <li>Shop</li>
            </li>
            <li>
              {/* <Link to="/contact" className='hover:underline'>Contact</Link> */}
              <li>Contact</li>
            </li>
            <li>
              {/* <Link to="/about" className='hover:underline'>About</Link> */}
              <li>About</li>
            </li>
            
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
           <a href="" className='hover:text-gray-400'><FaFacebook/></a>
           <a href="" className='hover:text-gray-400'><FaTwitter/></a>
           <a href="" className='hover:text-gray-400'><FaGithub/></a>
           <a href="" className='hover:text-gray-400'><FaLinkedin/></a>
          </div>
          <form className='flex items-center justify-center mt-8'>
            <input type="email" placeholder='Enter Email' className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600'/>
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600'>Subscribe</button>

          </form>
        </div>
    </div>
    <div className='mt-8 border-t border-gray-700 pt-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <p>&copy; 2024 Glassify All rights reserved</p>
        <div className='flex space-x-0 mt-4 md:mt-0'>
          <a href="" className='hover:underline'>Privacy policy</a>
          <a href="" className='hover:underline'>Terms & conditions</a>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer;
