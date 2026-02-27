import React from 'react';

const SectionDescription = ({
  title,
  subtitle,
  date,
  location,
  className = '',
  dateClassName = '',
  locationClassName = '',
}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p className={dateClassName}>{date}</p>
      <p className={locationClassName}>{location}</p>
    </div>
  );
};

export default SectionDescription;