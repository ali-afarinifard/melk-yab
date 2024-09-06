import React from 'react';

// ** Mantine
import { Menu, Avatar } from '@mantine/core'

// ** React Router
import { useNavigate } from 'react-router-dom';

const ProfileMenu = ({ user, logout }) => {

    const navigate = useNavigate()

    return (
        <Menu>

            <Menu.Target>
                <Avatar src={user?.picture} alt='user image' radius={"xl"} style={{ cursor: "pointer" }} />
            </Menu.Target>

            <Menu.Dropdown style={{ padding: '0.8rem' }}>

                <Menu.Item onClick={() => navigate("/favourites", { replace: true })}>
                    نشان ها
                </Menu.Item>

                <Menu.Item onClick={() => navigate("/bookings", { replace: true })}>
                    رزرو ها
                </Menu.Item>

                <Menu.Item onClick={() => {
                    localStorage.clear();
                    logout();
                }}>
                    خروج
                </Menu.Item>

            </Menu.Dropdown>

        </Menu>
    );
};

export default ProfileMenu;