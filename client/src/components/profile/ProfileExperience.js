import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({ profile: { experience } }) => {
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experience</h2>
      {experience.length > 0 ? (
        experience.map(exp => (
          <div>
            <h3>{exp.company}</h3>
            <p>
              <Moment format="DD MMM YYYY">{exp.from}</Moment> -{" "}
              {exp.current ? (
                "Present"
              ) : (
                <Moment format="DD MMM YYYY">{exp.to}</Moment>
              )}
            </p>
            <p>
              <strong>Position: </strong>
              {exp.title}
            </p>
            {exp.description && (
              <p>
                <strong>Description: </strong>
                {exp.description}
              </p>
            )}
          </div>
        ))
      ) : (
        <p>No experience credentials.</p>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileExperience;
