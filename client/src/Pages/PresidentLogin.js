import { Link, Navbar, Text } from "@nextui-org/react";
import React from "react";
import { UniClubLogo } from "../components/UniClubLogo";
import { PresidentLoginBody } from "../components/PresidentLoginBody";

const PresidentLogin = ({ callback }) => {
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
      {/* <Navbar.Content hideIn="xs">
        <Navbar.Link isActive href="https://mohali.ptu.ac.in/">
          I.K. GUJRAL PUNJAB TECHNICAL UNIVERSITY MOHALI CAMPUS-1
        </Navbar.Link>
      </Navbar.Content> */}
    </Navbar>

    <PresidentLoginBody callback={callback}/>
    </>
  );
};

export default PresidentLogin;
