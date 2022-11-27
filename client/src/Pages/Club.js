import React from "react";
import Feed from "../components/Feed";
import ClubNavbar from "../components/ClubNavbar";

const Club = ({ id, displayName, callback }) => {
  return (
    <>
      <ClubNavbar clubId={id} displayName={displayName} callback={callback}/>
      <Feed clubId={id} />
    </>
  );
};

export default Club;
