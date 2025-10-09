import { AccountCircle, Alarm, Delete , Alarm as TimerIcon} from "@mui/icons-material";
import { Box, Card, IconButton, Typography, CardContent, CardMedia } from "@mui/material";
import { green } from "@mui/material/colors";
// import TimerIcon from '@mui/icons-material/Timer';
import { useNavigate } from "react-router-dom";

export default function Item({ item, remove, primary }) {
    const navigate = useNavigate();
    return (
        // <li style={{ padding: 10, borderBottom: "1px solid #ddd", display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        //     <span>
        //         {item.content} - <b>{item.name}</b>
        //     </span>
        //     <button onClick={() => remove(item.id)}>DELETE</button>
        // </li>
        <Card sx={{mb: 2}}>
            {primary && <Box sx={{ height: 50, bgcolor: green[500] }}/>}
            <CardContent onClick={() => navigate("/comments/1")}>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
                        <Alarm fontSize="10" color="success" />
                        <Typography variant="caption" sx={{ color: green[500]}}>A few second ago</Typography>
                    </Box>
                    <IconButton sx={{ color: "text.fade"}} size="small" onClick={e => {remove(item.id); e.stopPropagation(); }}>
                        <Delete fontSize="inherit" />
                    </IconButton>
                </Box>
                <Typography sx={{ my: 3}}> {item.content}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
                    <AccountCircle fontSize='12' color="info" />
                    <Typography variant="caption">{item.name}</Typography>
                </Box>

            </CardContent>
        </Card>
    )
}