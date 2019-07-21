import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({ profile: { education } }) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>
      {education.length > 0 ? (
        education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.school}</h3>
            <p>
              <Moment format="DD MMM YYYY">{edu.from}</Moment> -{" "}
              {edu.current ? (
                "Present"
              ) : (
                <Moment format="DD MMM YYYY">{edu.to}</Moment>
              )}
            </p>
            <p>
              <strong>Degree: </strong>
              {edu.degree}
            </p>
            {edu.fieldofstudy && (
              <p>
                <strong>Field Of Study: </strong>
                {edu.fieldofstudy}
              </p>
            )}
            {edu.description && (
              <p>
                <strong>Description: </strong>
                {edu.description}
              </p>
            )}
          </div>
        ))
      ) : (
        <p>No education credentials.</p>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileEducation;
