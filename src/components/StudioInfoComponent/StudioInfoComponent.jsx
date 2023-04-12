import React, { useEffect } from "react";
import { getInfo } from "../../store/info/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

// IMPORT STYLES
import "./StudioInfoComponent.scss";

const StudioInfoComponent = () => {

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
        <section className="section__studio-info">
            <ul className="studio-info__ul ul container">
                {info && info.studio && info.studio.map((data) => {
                    return (
                        <li className="studio-info__li li" key={data.id}>
                            {data.icon}
                            <h3 className="studio-info__h3 h3">{data.title}</h3>
                            <p className="studio-info__p p">{data.information}<br/></p>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

export default StudioInfoComponent