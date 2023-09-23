import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { BottomNavigationAction } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import * as React from 'react';

const Navigation = () => {
    const [value, setValue] = React.useState(0);
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
        >
            <BottomNavigationAction href='#/homepage' label='Homepage' icon={<HomeIcon />}/>
            <BottomNavigationAction href='#/ingredients' label='Ingredients' icon={<FastfoodIcon />}/>
            <BottomNavigationAction href='#/instructions' label='Instructions' icon={<RestaurantIcon />}/>
        </BottomNavigation>
    )
}

export default Navigation