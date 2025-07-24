Step 1: Create a static array to simulate fetched task data in your dashboard component (e.g., `StatusDashboard.js`).

Step 2: Create the `StatusDashboard` component:
- Use `useState` for the current filter (all/completed/incomplete).
- Use `useMemo` to extract unique users from the task data.
- Use `useMemo` to filter tasks and compute the progress (completed vs total) for each user efficiently based on the selected filter.
- Render the filter control and a user progress bar for each user.

Step 3: Create a `FilterControl` component:
- Accepts list of filters, selected filter, and an `onChange` callback as props.
- Renders a fieldset of radio buttons. When a filter is selected, it triggers `onChange`.
- Make the fieldset accessible with proper ARIA labels.

Step 4: Create a `UserProgressBar` component:
- Takes props: user name, completed, total task count.
- Renders a labeled progress bar showing completion percent.
- Use ARIA attributes to make the progress information accessible (including `aria-label`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-valuetext`).
- Memoize the component with `React.memo()` to prevent unnecessary re-renders.

Step 5: Compose the components:
- In `StatusDashboard`, render the filter controller and a progress bar for each user, passing computed props.
- Style the output for basic usability and clarity.

Step 6: Test:
- Change filter selections. The progress bars and numbers should update instantly and accurately according to visible tasks for each user.
- Confirm that keyboard focus and screen readers are given appropriate cues for accessibility.