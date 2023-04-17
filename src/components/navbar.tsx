import { AppBar, Button, MenuItem, Toolbar } from "@mui/material";
import React from "react";
import { IMenu, mainMenuItems } from "../constants/appBarConstants";
import "../index.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const drawerWith = 240;

const AppBarMenu = () => {
    const navigate = useNavigate();
    return (
        <AppBar sx={{ backgroundColor: "white" }}>
            <Toolbar id="toolBarMainMenu" sx={{ gap: 2, justifyContent: "center" }} >
                {mainMenuItems.map((item) => (
                    <Link key={item.id} to={item.route.path}
                        onClick={() => navigate(item.route.path)}>
                        {item.label}</Link>

                ))}
            </Toolbar>
        </AppBar>
    )
}

export default AppBarMenu;