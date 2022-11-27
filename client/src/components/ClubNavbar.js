import React, {useContext} from "react";
import {Button, Dropdown, Link, Navbar, Text} from "@nextui-org/react";
import {UniClubLogo} from "./UniClubLogo";
import UserContext from "../UserContext";
import NavbarAvatar from "./NavbarAvatar";

const ClubNavbar = ({ clubId, callback, displayName }) => {
  const { user } = useContext(UserContext);

  const clubs = [
    { id: "codingclub", displayName: "CODING CLUB" },
    { id: "sportsclub", displayName: "SPORTS CLUB" },
    { id: "culturalclub", displayName: "CULTURAL CLUB" },
    { id: "personalityclub", displayName: "PERSONALITY CLUB" },
    { id: "editorialclub", displayName: "EDITORIAL CLUB" },
    { id: "facultyclub", displayName: "FACULTY CLUB" },
    { id: "ecell", displayName: "E-CELL" },
    { id: "tpcell", displayName: "T & P CELL" },
  ];

  const ClubsDropDownMenu = () => {
    const dropDownItems = clubs
      .filter((club) => club.id !== clubId)
      .map((club) => (
        <Dropdown.Item key={club.id}>
          <Link href={`/${club.id}`}>{club.displayName}</Link>
        </Dropdown.Item>
      ));

    return (
      <Dropdown.Menu aria-label="Static Actions">{dropDownItems}</Dropdown.Menu>
    );
  };

  return (
    <Navbar isBordered variant={"floating"}>
      <Navbar.Brand>
        <UniClubLogo />
        <Link href="/">
          <Text h1 size={20} css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }} weight="bold">UNICLUB</Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Dropdown>
          <Dropdown.Button flat>{displayName}</Dropdown.Button>
          <ClubsDropDownMenu />
        </Dropdown>
      </Navbar.Content>

      <Navbar.Content>
        {user.isAuth ? (
          <Navbar.Item>
            <NavbarAvatar name={user.name} type={user.type} callback={callback}/>
          </Navbar.Item>
        ) : (
          <Navbar.Item>
            <Link href="/presidentlogin">
              <Button className="home__login" auto bordered color="success">Login</Button>
            </Link>
          </Navbar.Item>
        )}
      </Navbar.Content>
    </Navbar>
  );
};

export default ClubNavbar;