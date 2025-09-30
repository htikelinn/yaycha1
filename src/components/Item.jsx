import { AccountCircle, Alarm, Delete , Alarm as TimerIcon} from "@mui/icons-material";
import { Box, Card, IconButton, Typography, CardContent } from "@mui/material";
import { green } from "@mui/material/colors";
// import TimerIcon from '@mui/icons-material/Timer';

export default function Item({ item, remove }) {
    return (
        // <li style={{ padding: 10, borderBottom: "1px solid #ddd", display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        //     <span>
        //         {item.content} - <b>{item.name}</b>
        //     </span>
        //     <button onClick={() => remove(item.id)}>DELETE</button>
        // </li>
        <Card sx={{mb: 2}}>
            <CardContent>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,}}>
                        <Alarm fontSize="10" color="success" />
                        <Typography variant="caption" sx={{ color: green[500]}}>A few second ago</Typography>
                    </Box>
                    <IconButton size="small" onClick={() => remove(item.id)}>
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