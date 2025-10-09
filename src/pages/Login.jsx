import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";


export default function Login() {
    const navigate = useNavigate();
    const { setAuth } = useApp();
  return (
    <Box>
        <Typography variant = "h3"> Login </Typography>
        <Alert security="warning" sx={{mt: 2}} >All Fields are required</Alert>

        <form onSubmit={ e => {
          e.preventDefault();
          setAuth(true);
          navigate("/");  
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2}}>
                <TextField type="text" placeholder="Username" fullWidth />
                <TextField type="password" placeholder="Password" fullWidth />
                <Button variant="contained" type="submit" fullWidth >Login</Button>
            </Box>
        </form>
    </Box>
  )
}
