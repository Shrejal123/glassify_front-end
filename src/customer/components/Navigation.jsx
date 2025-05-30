import { Fragment, useEffect, useState } from 'react'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { deepPurple } from '@mui/material/colors'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthModel from '../Auth/AuthModel'

import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getUser,logout } from '../../State/Auth/Action'
const navigation = {
  categories: [
    {
      id: 'Categories',
      name: 'Categories',
      featured: [
        {
          name: 'Ocassions',
          href: '#',
          imageSrc: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/307466a9-1315-4062-9c97-6f9d8e70dc4f._CR0,0,1200,628_SX920_QL70_.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          
          href: '#',
          imageSrc: 'https://media.istockphoto.com/id/1097275804/photo/choice-of-reusable-coffee-mug-mockups.jpg?s=612x612&w=0&k=20&c=u8RAQo51x00MJ6Hk4Zqd4003F7rxBke50IRk2TkSHSw=',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'disposable items',
          name: 'Disposable Items',
          items: [
            {id: 'products', name: 'Products', href: '#' },
            { name: 'Buffer Plates', href: '#' },
            { name: 'Aluminium Foil', href: '#' },
            { name: 'Tissue', href: '#' },
            { name: 'Straw', href: '#' },
            { name: 'Plastic Wrap', href: '#' },
            {name: 'Spoon & Fork', href: '#' }
          ],
        },
        {
          id: 'Material',
          name: 'Material',
          items: [
            { name: 'Paper', href: '#' },
            { name: 'Bagasse', href: '#' },
            { name: 'Siali Leaf', href: '#' },
            { name: 'Palm Leaf', href: '#'},
           
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'ECO SOUL', href: '#' },
            { name: 'PARICOTT', href: '#' },
            { name: 'BECO', href: '#' },
            { name: 'EATONS', href: '#' },
            { name: 'Just a leaf', href: '#' },
          ],
        },
      
      ],
    },

  ],
  pages: [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
  ],
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const navigate=useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openAuthModel,setOpenAuthModel]=useState(false);
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector((store)=>store)
  const dispatch =useDispatch();
  const location =useLocation();
  const openUserMenu = Boolean(anchorEl);

  
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () =>{
    setOpenAuthModel(true);
  }

  const handleClose = () =>{
    setOpenAuthModel(false);
  }

  const handleCategoryClick = (category,section,item,close) => {
         navigate(`/${category.id}/${section.id}/${item.id}`);       
         close();
  };
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      // dispatch(getCart(jwt));
    }
  }, [jwt,auth.jwt]);
    
  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate(-1);
    }
  }, [auth.user]);

  const handleLogout = () => { 
    dispatch(logout());
    handleCloseUserMenu();
  };

  // const handleMyOrderClick = () => {
  //   handleCloseUserMenu();
  //   auth.user?.role === "ROLE_ADMIN"
  //     ? navigate("/admin")
  //     : navigate("/account/order");
  // };


  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900
                       data-[selected]:border-indigo-600
                        data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            // <li key={item.name} className="flow-root">
                            //   <a href={item.href} className="-m-2 block p-2 text-gray-500">
                            //     {item.name}
                            //   </a>
                            // </li>
                            <li key={item.name} className="flow-root">
                          <button
                          onClick={() => handleCategoryClick(category, section, item, () => setOpen(false))}
                          className="-m-2 block p-2 text-gray-500 text-left w-full"
                          >
                          {item.name}
                        </button>
                        </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                {/* <Button onClick={handleOpen}  className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </Button> */}
                <Button onClick={() => setOpenAuthModel(true)} className="-m-2 block p-2 font-medium text-gray-900">
  Sign in
</Button>

              </div>
              
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                {/* <a href="#"> */}
                <Link to ="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="Preview.png"
                    className="h-12 w-auto"
                  />
                  </Link>
                {/* </a> */}
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch ">
                <div className="flex h-full space-x-8">
                {/* {navigation.pages.map((page) => ( */}
                    <a
                      href="/"
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                     Home
                    </a>
                  {/* ))} */}
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                         {({close }) => (<>
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 
                        border-transparent pt-px text-sm 
                        font-medium text-gray-700 
                        transition-colors duration-200 
                        ease-out hover:text-gray-800
                         data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-50 text-sm
                         text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div 
                                  key={item.name} 
                                  className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                   
                                  </div>
                                ))}
                                 <p aria-hidden="true" className="mt-1">
                                      Birthday Party, Wedding, Anniversary, New Year, Festivals, Party
                                    </p>
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <p onClick={()=>handleCategoryClick(
                                            category,
                                            section,
                                            item,
                                            close
                                          )} className="cursor-pointer hover:text-gray-800">
                                            {item.name}
                                            </p>
                                        </li>
                                        
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                      </>
        )}
                    </Popover>
                  ))}
                  <a
                      href="/about"
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                     About
                    </a>
                    <a
                      href="/contact"
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                     Contact
                    </a>

                  {/* {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))} */}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {auth.user?.firstName ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        <MenuItem onClick={()=>navigate("/account/order")}>My Orders</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Signin
                    </Button>
                  )}
                </div>
       
                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button
                    onClick={() => navigate("/cart")} 
                    className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {/* {cart.cart?.totalItem} */}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* {openAuthModel && <AuthModel open={openAuthModel} handleClose={handleClose} />} */}
      {openAuthModel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClose} // Close modal when clicking outside the modal
        >
          <div
            className="relative bg-white rounded-lg p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <AuthModel open={openAuthModel} handleClose={handleClose} />
          </div>
        </div>
      )}
      
    </div>
  )
}
