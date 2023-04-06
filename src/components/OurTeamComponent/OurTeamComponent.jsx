import React, { useEffect } from "react";
import { getInfo } from "../../store/info/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

/* IMPORT STYLES */
import "./OurTeamComponent.scss";

const OurTeamComponent = () => {
  const dispatch = useDispatch();

  const { info, loadingInfo } = useSelector((state) => state.InfoReducer);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  console.log(info);

  if (loadingInfo) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section className="section__ourteam container">
      <h2>Our Team</h2>
      <ul className="ourteam__ul ul">
        {info && info.admins && info.admins.map((member) => {
          return (
            <li className="ourteam__li li" key={member.id}>
              <img src={member.image} alt={member.alt} />
              <div className="card__details">
                <h4>Name: {member.name}</h4>
                <h4>Artist: {member.username}</h4>
                <h4>Description: {member.model}</h4>
                <hr />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default OurTeamComponent;
