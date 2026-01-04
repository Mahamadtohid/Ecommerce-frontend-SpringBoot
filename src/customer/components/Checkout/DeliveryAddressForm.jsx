import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Box, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

function DeliveryAddressForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const formData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            address: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipcode: data.get("zipcode"),
            mobile: data.get("phoneNumber"),
        };

        console.log("Address:", formData);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3} alignItems="flex-start">

                {/* LEFT */}
                <Grid size={{ xs: 12, lg: 5 }} className="overflow-y-scroll">
                    <Box
                        sx={{
                            border: "1px solid #e0e0e0",
                            borderRadius: 2,
                            height: "75vh",
                            //   overflowY: "auto",

                        }}
                    >
                        <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
                            <AddressCard />
                            <Button
                                sx={{ mt: 2, bgcolor: 'rgb(145 85 253)' }}
                                size="large"
                                variant="contained"
                            >
                                Deliver Here
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                {/* RIGHT */}
                <Grid size={{ xs: 12, lg: 7 }}>
                    <Box
                        sx={{
                            border: "1px solid #e0e0e0",
                            borderRadius: 2,
                            p: 3,
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth required name="firstName" label="First Name" />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth required name="lastName" label="Last Name" />
                                </Grid>

                                <Grid size={12}>
                                    <TextField
                                        fullWidth
                                        required
                                        name="address"
                                        label="Address"
                                        multiline
                                        rows={3}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 4 }}>
                                    <TextField fullWidth required name="city" label="City" />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 4 }}>
                                    <TextField fullWidth required name="state" label="State" />
                                </Grid>

                                <Grid size={{ xs: 12, sm: 4 }}>
                                    <TextField fullWidth required name="zipcode" label="Zip Code" />
                                </Grid>

                                <Grid size={12}>
                                    <TextField fullWidth required name="phoneNumber" label="Phone Number" />
                                </Grid>

                                <Grid size={12}>
                                    <Button
                                        sx={{ mt: 2, bgcolor: 'rgb(145 85 253)' }}
                                        size="large"
                                        variant="contained"
                                    >
                                        Deliver Here
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}

export default DeliveryAddressForm;
