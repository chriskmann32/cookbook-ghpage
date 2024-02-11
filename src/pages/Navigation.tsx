import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { BottomNavigationAction } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import * as React from 'react';
import './Navigation.css'

const Navigation = () => {
    const [value, setValue] = React.useState(0);
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
            sx={{
                backgroundColor: 'black',
            }}
        >
            <BottomNavigationAction style={{color: 'white' }}className='action' href='#/homepage' label='Homepage' icon={<HomeIcon className='icon'/>}/>
            <BottomNavigationAction style={{color: 'white' }} className='action' href='#/ingredients' label='Ingredients' icon={<FastfoodIcon className='icon'/>}/>
            <BottomNavigationAction style={{color: 'white' }} className='action' href='#/instructions' label='Instructions' icon={<RestaurantIcon className='icon'/>}/>
        </BottomNavigation>
    )
}

export default Navigation