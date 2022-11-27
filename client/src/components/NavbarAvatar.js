import React from "react";
import { useNavigate } from "react-router";
import { Avatar, Dropdown, Text } from "@nextui-org/react";
import { message } from "antd";
import { logoutAdmin, logoutPresident } from "../api";

const NavbarAvatar = ({ name, type, callback }) => {
  const navigate = useNavigate();

  const logoutMapper = { admin: logoutAdmin, president: logoutPresident }
  const logOut = () => {
    logoutMapper[type]().then((res) => {
      if(res.status === 200) {
        callback()
        message.success(res.data.message)
        navigate('/')
      }
    }).catch((err) => {
      message.error(err?.response?.data?.message || 'Something went wrong!');
    });
  }

  const avatarActions = {
    logout: logOut
  }

  const avatarOnAction = (key) => {
    avatarActions[key]()
  }

  return (
    <Dropdown placement="bottom-left">
      <Dropdown.Trigger>
        <Avatar
          bordered size="lg" as="button" color="gradient"
          src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
        />
      </Dropdown.Trigger>
      <Dropdown.Menu color="secondary" aria-label="Avatar Actions" onAction={avatarOnAction} disabledKeys={['profile']}>
        <Dropdown.Item key="profile" css={{ height: "$18", color: "$black" }}>
          <Text b color="inherit" css={{ d: "flex" }}>Signed in as {name}</Text>
        </Dropdown.Item>
        <Dropdown.Item key="settings" withDivider>My Profile</Dropdown.Item>
        <Dropdown.Item key="logout" color="error" withDivider>Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
};

export default NavbarAvatar;