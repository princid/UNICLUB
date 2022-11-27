import { Link, Navbar, Text} from "@nextui-org/react";
import React, {useContext} from "react";
import { UniClubLogo } from "../components/UniClubLogo";
import Administration from "../components/Administration";
import NavbarAvatar from "../components/NavbarAvatar";
import UserContext from "../UserContext";

const CodingClub = ({ callback }) => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar isBordered variant={"floating"}>
        <Navbar.Brand>
          <UniClubLogo />
          {/* <Text b color="inherit" hideIn="xs">
            UNICLUB
          </Text> */}
          <Link href="/">
            <Text
              h1
              size={20}
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
              weight="bold"
            >
              UNICLUB
            </Text>
          </Link>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>
            {/* If not Logged In then it will show the Login Button which will redirect to the Login Page */}

            {/* <Link href="/presidentlogin">
                <Button auto bordered color="success">
                  Login
                </Button>
              </Link> */}
            <NavbarAvatar name={user.name} type={user.type} callback={callback}/>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Administration />
    </>
  );
};

export default CodingClub;
