🎯 2. Core Functional Requirements


C. Real-Time Search & Filtering:
A search input that filters tasks in real-time by Title (case-insensitive).
A filter dropdown to view tasks by Priority ("All", "High", "Medium", "Low").


D. Status Toggle / Update (PUT):
Each task item has a "Cycle Status" button that rotates the task status: "Pending" 
→
→ "In Progress" 
→
→ "Completed" 
→
→ "Pending"
Update the server using taskService.update(id, updatedTask).
Update React state using the .map() ternary pattern.


E. Task Deletion (DELETE):
Each task item has a "Delete" button.
Trigger a window.confirm("Delete task?") dialog.
Delete on the server via taskService.remove(id).
Remove from React state using .filter(t => t.id !== id).


F. Notification System (Method B):
A <Notification notification={notification} /> component.
Display timed notifications (2-3 seconds) on:
Task created (Green/Success)
Task updated / status cycled (Green/Success)
Task deleted (Red/Deleted)
Network error / 404 in .catch() (Red/Error)


G. Defensive Error Handling:
Wrap update and remove calls with .catch() blocks.
If a task is modified that was already deleted from db.json, display an error notification and filter out the stale item from React state!


🏗️ 3. Architectural Constraints (Strict Code Review Criteria):
Separation of Concerns: All Axios calls must live in src/services/tasks.js.
Modular Components: Split your UI into clean files inside src/components/:
TaskForm.jsx
TaskList.jsx
TaskItem.jsx
Filter.jsx
Notification.jsx
Guard Clauses: Use early returns in App.jsx and components to keep code flat and readable.
