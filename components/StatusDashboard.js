// StatusDashboard.js
import React, { useState, useMemo } from 'react';
import FilterControl from './FilterControl';
import UserProgressBar from './UserProgressBar';

// Simulated fetched data
const tasks = [
  { id: 1, title: 'Set up repo', completed: true, assignee: 'Alice' },
  { id: 2, title: 'Implement login', completed: false, assignee: 'Bob' },
  { id: 3, title: 'Create UI mockups', completed: true, assignee: 'Carol' },
  { id: 4, title: 'Backend API', completed: true, assignee: 'Dave' },
  { id: 5, title: 'Integrate frontend', completed: false, assignee: 'Alice' },
  { id: 6, title: 'Write tests', completed: false, assignee: 'Carol' },
  { id: 7, title: 'Deploy to staging', completed: false, assignee: 'Bob' },
  { id: 8, title: 'Polish UI', completed: true, assignee: 'Carol' },
  { id: 9, title: 'Monitoring & Alerts', completed: true, assignee: 'Dave' },
  { id: 10, title: 'User onboarding docs', completed: false, assignee: 'Alice' },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'Incomplete', value: 'incomplete' },
];

const StatusDashboard = () => {
  const [filter, setFilter] = useState('all');

  // Get unique user names
  const users = useMemo(
    () => Array.from(new Set(tasks.map((t) => t.assignee))),
    []
  );

  // Compute filtered tasks by filter
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter((t) => t.completed);
      case 'incomplete':
        return tasks.filter((t) => !t.completed);
      default:
        return tasks;
    }
  }, [filter]);

  // Compute progress per user
  const progressByUser = useMemo(() => {
    // Result: { [user]: { total: number, completed: number } }
    const progress = {};
    users.forEach((user) => {
      const userTasks = filteredTasks.filter((t) => t.assignee === user);
      const completedTasks = userTasks.filter((t) => t.completed);
      progress[user] = {
        total: userTasks.length,
        completed: completedTasks.length,
      };
    });
    return progress;
  }, [users, filteredTasks]);

  return (
    <section aria-labelledby="team-status-heading" className="dashboard-section">
      <h2 id="team-status-heading">Team Status Dashboard</h2>
      <FilterControl
        filters={filters}
        selected={filter}
        onChange={setFilter}
      />
      <div className="progress-list">
        {users.map((user) => {
          const { total, completed } = progressByUser[user];
          return (
            <UserProgressBar
              key={user}
              user={user}
              completed={completed}
              total={total}
            />
          );
        })}
      </div>
    </section>
  );
};

export default StatusDashboard;
