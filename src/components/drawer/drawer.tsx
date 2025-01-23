
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';
import { pages } from '../header/pages';
import { usePathname } from 'next/navigation';

type Props = {
    open: boolean;
    toggleDrawer: (state: boolean) => void;
}

export default function DrawerMobile({ open, toggleDrawer }: Props) {

    const pathName = usePathname();

    const handleClose = () => {
        toggleDrawer(false);
    };

    const DrawerList = (
        <Box sx={{width: '200px'}}>
            <List>
                {pages.map((page, index) => (
                    <ListItem key={index}>
                        <ListItemButton>
                            <Link
                                href={page.url}
                                key={index}
                                sx={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    transition: 'color 0.3s ease, border-color 0.3s ease',
                                    ...(page.url === pathName && {
                                        color: '#22c55e',
                                        borderBottom: '2px solid #22c55e',
                                    }),
                                    '&:hover': {
                                        color: '#22c55e',
                                    },
                                }}
                            >
                                {page.name}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <>
            <Drawer 
                anchor="right" 
                open={open} 
                onClose={handleClose} 
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#1c1c22',
                    }
                }}
                >
                {DrawerList}
            </Drawer>
        </>
    );
}
