import { Button, Link, Navbar, Text } from "@nextui-org/react";
import React, { useContext } from "react";
import { UniClubLogo } from "../components/UniClubLogo";
import { Layout } from "../components/Layout";
import UserContext from "../UserContext";
import NavbarAvatar from "../components/NavbarAvatar";

const Home = ({ callback }) => {
  const { user } = useContext(UserContext);

  const isAdmin = user.isAuth && user.type === "admin";

  return (
    <Layout>
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
          <Navbar.Link
            isActive
            href="https://mohali.ptu.ac.in/"
            css={{
              textGradient: "45deg, $red600 -20%, $blue600 100%",
            }}
            weight="bold"
          >
            I.K. GUJRAL PUNJAB TECHNICAL UNIVERSITY MOHALI CAMPUS-1
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          {isAdmin && (
            <Navbar.Item>
              <Link href="/adminpanel">
                <Button auto bordered color="success">
                  Admin Panel
                </Button>
              </Link>
            </Navbar.Item>
          )}
          {user.isAuth ? (
            <Navbar.Item>
              <NavbarAvatar name={user.name} type={user.type} callback={callback}/>
            </Navbar.Item>
          ) : (
            <Navbar.Item>
              <Link href="/presidentlogin">
                <Button className="home__login" auto bordered color="success">
                  Login
                </Button>
              </Link>
            </Navbar.Item>
          )}
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
};

export default Home;
