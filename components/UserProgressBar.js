// UserProgressBar.js
import React from 'react';

// Simple CSS in JS for demo accessibility
const barContainer = {
  background: '#eee',
  borderRadius: '8px',
  overflow: 'hidden',
  width: '240px',
  height: '24px',
  marginTop: '4px',
  marginBottom: '12px',
  border: '1px solid #bbb',
};
const bar = (percent) => ({
  width: percent + '%',
  height: '100%',
  background: percent === 100 ? '#4caf50' : '#2196f3',
  transition: 'width 0.4s',
});

const UserProgressBar = ({ user, completed, total }) => {
  let percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  let barLabel = `${user}: ${completed} of ${total} tasks completed (${percent}%)`;
  let ariaValueText = total === 0 ? `${user}: No tasks assigned` : barLabel;

  return (
    <div className="user-progress-bar" style={{ marginBottom: '10px' }}>
      <div style={{ fontWeight: 'bold' }}>{user}</div>
      <div
        style={barContainer}
        role="progressbar"
        aria-label={`Task completion progress for ${user}`}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={ariaValueText}
        tabIndex={0}
      >
        <div style={bar(percent)}></div>
      </div>
      <div style={{ fontSize: '0.95em', marginTop: '2px' }}>
        {barLabel}
      </div>
    </div>
  );
};

export default React.memo(UserProgressBar);
