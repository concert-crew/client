import React from "react";
import Status404 from "../../errorHandling/Status404";
import { useUser } from "../../hooks/useUser";
import EventsContainer from "../EventsContainer/EventsContainer";
import { ProgressSpinner } from "../SpinLogo/SpinLogo";
import "./FriendsDashboard.css";



const FriendsDashboard = ({  currentUser, setHasError404 }) => {




    // currentUser.friends.forEach((friend) => {
    //   // useUser(friend.name)

    // })
let {data, error, loading} = useUser("Chantal")
if (loading) return <ProgressSpinner />;
  if (error) return <Status404 setHasError404={setHasError404} />;
console.log(`line15data`, data, error, loading)

  return (
    <div className="friends-dash">
      {/* <div className="friends-shows-title-wrapper">
        <h2 className="friends-shows-title">FRIENDS UPCOMING SHOWS</h2>
      </div>
      <EventsContainer currentUser={currentUser} /> */}
    </div>
  );
};

export default FriendsDashboard;
