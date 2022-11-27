import { Link, Navbar, Text } from "@nextui-org/react";
import React, { useContext } from "react";
import StudentMailPage from "../components/StudentMailPage";
import { UniClubLogo } from "../components/UniClubLogo";
import NavbarAvatar from "../components/NavbarAvatar";
import UserContext from "../UserContext";

const StudentMail = ({ callback }) => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar isBordered variant={"floating"}>
        <Navbar.Brand>
          <UniClubLogo />
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

            {/* If Logged In then the Avatar of the President will be shown in the Navbar, Otherwise it will show the Login Button */}
            <NavbarAvatar name={user.name} type={user.type} callback={callback}/>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <StudentMailPage />
    </>
  );
};

export default StudentMail;