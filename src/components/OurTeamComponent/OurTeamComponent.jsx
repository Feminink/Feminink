import React, { useEffect } from "react";
import { getInfo } from "../../store/info/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

// IMPORT STYLES
import "./OurTeamComponent.scss";

const OurTeamComponent = () => {
  const dispatch = useDispatch();
  const { info, loadingInfo } = useSelector((state) => state.InfoReducer);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  if (loadingInfo) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section className="section__ourteam container">
      <h2>Meet our tattoo artists</h2>
      <ul className="ourteam__ul ul">
        {info &&
          info.admins &&
          info.admins.map((member) => {
            return (
              <li className="ourteam__li li" key={member.id}>
                <div className="image-container">
                  <img src={member.image} alt={member.alt} />
                  <div className="overlay">
                    <div className="text">
                      <h3>
                        {member.name} / {member.aka}
                      </h3>
                      <p>
                        <b>Where: </b>
                        {member.place}
                      </p>
                      <p>
                        <b>Email: </b>
                        {member.email}
                      </p>
                      <p>
                        <b>About: </b>
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ourteam__details">
                  <h5>
                    I don't tattoo: {member.noway[0]}, {member.noway[1]}
                  </h5>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default OurTeamComponent;
