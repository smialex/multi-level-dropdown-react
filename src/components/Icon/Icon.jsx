import React from 'react';
import './Icon.css';

export const Icon = ({icon, transparent}) => {

  const styles = `icon ${transparent ? 'icon_transparent' : ''}`;

  return (
    <div className={styles}>{icon}</div>
  );
}

