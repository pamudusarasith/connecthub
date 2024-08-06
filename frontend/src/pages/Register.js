import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import FilledInput from "@mui/material";
import FilledInputAdornment from "@mui/material";
import FilledInputIconButton from "@mui/material";
import Visibility from "@mui/icons-material";
import VisibilityOff from "@mui/icons-material";

function RegisterPage() {
    return (
        <Stack maxWidth={"300px"} justifyContent={"center"} spacing={2}>
            <h1>Register</h1>
            <FilledInput id="username" label="Username" required/>
            <FilledInput id="email" label="Email" required/>
            <FilledInput id="password" label="Password" required />
        </Stack>
    );
}

export default RegisterPage;