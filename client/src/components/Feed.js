import React, {useContext, useEffect, useState} from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { getAllClubEvents } from "../api";
import "./Feed.css";
import UserContext from "../UserContext";

const Feed = ({ clubId }) => {
  const { user } = useContext(UserContext);

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isPresident = user.isAuth && user.type === "president" && user.club === clubId;

  const fetchAllEvents = () => {
    setIsLoading(true);
    getAllClubEvents(clubId)
      .then(({data}) => {
        setEvents(data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchAllEvents();
  }, [clubId]);

  const posts = events.map(({ _id, title, imageURL, date, addedBy }) => (
    <Post
      profilePic="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
      title={title} timestamp={new Date(date).getTime()} imageURL={imageURL} username={addedBy}
      isPresident={isPresident} id={_id} callback={fetchAllEvents}
    />
  ));

  return (
    <div className="feed">
      {isPresident && <CreatePost clubId={clubId} className="create-post" callback={fetchAllEvents}/>}
      {isLoading ? (<div>Events are getting loaded!</div>) : (<div className="posts">{posts}</div>)}
    </div>
  );
};

export default Feed;
