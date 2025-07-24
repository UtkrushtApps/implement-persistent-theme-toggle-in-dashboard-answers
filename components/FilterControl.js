// FilterControl.js
import React from 'react';

const FilterControl = ({ filters, selected, onChange }) => {
  return (
    <fieldset aria-label="Task status filter" className="filter-control">
      <legend>Show:</legend>
      {filters.map((f) => (
        <label key={f.value} style={{ marginRight: '1em' }}>
          <input
            type="radio"
            name="task-filter"
            value={f.value}
            checked={selected === f.value}
            onChange={() => onChange(f.value)}
          />{' '}
          {f.label}
        </label>
      ))}
    </fieldset>
  );
};

export default React.memo(FilterControl);