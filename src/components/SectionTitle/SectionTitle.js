import React from 'react';
import './SectionTitle.css';
import { theme } from '../../theme';

const SectionTitle = ({
  children,
  level = 1,
  className = '',
  color = theme.colors.white,
  bold = true,
  ...props
}) => {
  const Tag = `h${level}`;
  const titleClass = `ui-title ui-title-${level} ${bold ? 'ui-title-bold' : ''} ${className}`;

  return (
    <Tag
      className={titleClass}
      style={{ color }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default SectionTitle;