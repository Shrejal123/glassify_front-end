// import { Box, Button, Grid, TextField } from "@mui/material";
// import React from "react";
// import AddressCard from "../AddressCard/AddressCard";
// import { useDispatch, useSelector } from "react-redux";
// import { createOrder } from "../../../State/Order/Action";
// import { useNavigate } from "react-router-dom";

// const DeliveryAddress = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const {auth} =useSelector(store=>store)
//   console.log("auth",auth);

//     const handleSubmit=(e)=>{
//             e.preventDefault();
        
//             const data=new FormData(e.currentTarget);

//             const address={
//                 firstName:data.get("firstName"),
//                 lastName:data.get("lastName"),
//                 streetAddress:data.get("Address"),
//                 city:data.get("city"),
//                 state:data.get("state"),
//                 ZipCode:data.get("zip"),
//                 mobile:data.get("phoneNumber")


//             }
//           //   const orderData={address,navigate}
//           // dispatch(createOrder(orderData))
//             console.log("address",address)
//           const orderData = { address, navigate };

//           console.log("Submitting Address:", orderData);
//           dispatch(createOrder(orderData))
//           // dispatch(createOrder(orderData)).then((res) => {
//           console.log("address",orderData)
        
// };

//   return (
//     <div>
//       <Grid container spacing={4}>
//         <Grid 
//         xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
//           <div className="p-5 py-7 border-b cursor-pointer ">
//             {auth.user?.address.map((item)=><AddressCard address={item} />) }
//             <Button
//               sx={{ mt: 2, bgcolor: "RGB(145 85 253)", color: "white" }}
//               size="large"
//               variant="contained"
//             >
//               Deliver Here{" "}
//             </Button>
//           </div>
//         </Grid>

        

//         <Grid item xs={12} lg={7} >
//             <Box className="border rounded-s-md shadow-md p-5 mb-6  ">
//                <form onSubmit={handleSubmit}>
//                 <Grid container spacing = {3}>
//                     <Grid item xs={12} sm={6}>
//                        <TextField
//                        required
//                        id="firstName"
//                        name="firstName"
//                        label="First Name"
//                        fullWidth
//                        autoComplete="given-name"
//                        />
                      
//                     </Grid>

//                     <Grid item xs={12} sm={6}>
//                        <TextField
//                        required
//                        id="lastName"
//                        name="lastName"
//                        label="Last Name"
//                        fullWidth
//                        autoComplete="given-name"
//                        />
//                   </Grid>    
//                     {/* </Grid> */}

//                     <Grid item xs={12} >
//                        <TextField
//                        required
//                        id="Address"
//                        name="Address"
//                        label="Address"
//                        fullWidth
//                        autoComplete="given-name"
//                        multiline
//                        rows={4}
//                        />
                      
//                     </Grid>
                

//                     <Grid item xs={12} sm={6}>
//                        <TextField
//                        required
//                        id="city"
//                        name="city"
//                        label="city"
//                        fullWidth
//                        autoComplete="given-name"
//                        />
//                   </Grid>  
                  
//                   <Grid item xs={12} sm={6}>
//                        <TextField
//                        required
//                        id="zip"
//                        name="zip"
//                        label="zip/Postal code"
//                        fullWidth
//                        autoComplete="given-name"
//                        />
//                   </Grid>  
                
                
//                   <Grid item xs={12} sm={6}>
//                        <TextField
//                        required
//                        id="state"
//                        name="state"
//                        label="State/Province/Region"
//                        fullWidth
//                        autoComplete="given-name"
//                        />
//                   </Grid>  

//                   <Grid item xs={12} sm={6}>
//                        <TextField
//                        required
//                        id="phoneNumber"
//                        name="phoneNumber"
//                        label="Phone Number"
//                        fullWidth
//                        autoComplete="given-name"
//                        />
//                   </Grid>  
        
//            <Grid item xs={12} sm={6}>
//             <Button
//               sx={{ mt: 2, bgcolor: "RGB(145 85 253)", color: "white" }}
//               size="large"
//               variant="contained"
//               type="submitted"
//               // onClick={() => navigate("/delivery?step=3")} 
//             >
//               Deliver Here
//             </Button>
//             </Grid>
//                     </Grid>
//                </form>
//             </Box>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default DeliveryAddress;
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);

  console.log("auth", auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("Address"),
      city: data.get("city"),
      state: data.get("state"),
      ZipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    const orderData = { address, navigate };

    console.log("Submitting Address:", orderData);
    dispatch(createOrder(orderData));
  };

  return (
    <div className="flex justify-center lg:flex-row gap-6 mb-10">
      {/* Address Selection Section */}
      {/* <div className="w-full lg:w-2/5 border rounded-md shadow-md p-5 max-h-[30.5rem] overflow-y-scroll">
        {auth.user?.address.map((item, index) => (
          <AddressCard key={index} address={item} />
        ))}
        <Button
          sx={{ mt: 2, bgcolor: "RGB(145 85 253)", color: "white" }}
          size="large"
          variant="contained"
        >
          Deliver Here
        </Button>
      </div> */}

      {/* Address Form Section */}
      <div className="w-full lg:w-3/5 border rounded-md shadow-md flex justify-center p-5">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField required id="firstName" name="firstName" label="First Name" fullWidth />
            <TextField required id="lastName" name="lastName" label="Last Name" fullWidth />
          </div>

          <div className="mt-4">
            <TextField
              required
              id="Address"
              name="Address"
              label="Address"
              fullWidth
              multiline
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <TextField required id="city" name="city" label="City" fullWidth />
            <TextField required id="zip" name="zip" label="Zip/Postal Code" fullWidth />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <TextField required id="state" name="state" label="State/Province/Region" fullWidth />
            <TextField required id="phoneNumber" name="phoneNumber" label="Phone Number" fullWidth />
          </div>

          <div className="mt-6">
            <Button
              sx={{ bgcolor: "RGB(145 85 253)", color: "white" }}
              size="large"
              variant="contained"
              type="submit"
            >
              Submit Address
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddress;
