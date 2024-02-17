import axios from "axios";
import { useState, useEffect } from "react";
import "./page.css";
export default function Home() {
  const [profileData, setProfileData] = useState({
    image: "",
    fName: "",
    lName: "",
    gender: "",
    phone: "",
  });

  const getUserDetails = () => {
    axios({
      method: "GET",
      url: "https://randomuser.me/api/?page=1&results=1&seed=abc",
    })
      .then((response) => {
        let data = response.data.results[0];
        setProfileData({
          image: data.picture.large,
          title: data.name.title,
          fName: data.name.first,
          lName: data.name.last,
          gender: data.gender,
          phone: data.phone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getUserDetails, []);
  return (
    <div className="user-card-outer">
      <div className="user-card-inner">
        <div className="imageCard">
          <img src={profileData.image} alt="userImage" className="userImage" />
        </div>
        <div className="user-details-container">
          <div className="name">
            <p className="textElements person">{profileData.title}&nbsp;</p>
            <p className="textElements person">{profileData.fName}&nbsp;</p>
            <p className="textElements person">{profileData.lName}</p>
          </div>
          <p className="textElements">
            <span className="sectionTitle">Gender: </span>
            {profileData.gender}
          </p>
          <p className="textElements">
            <span className="sectionTitle">Phone: </span>
            {profileData.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
