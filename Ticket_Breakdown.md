# Ticket

Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

## Sub-Ticket 1

Create an api that fetches agents by facility_id.

### Acceptance Criteria

- Function should return agents by max quantity requested.

### Time/Effort Estimates

- 1 days, Story Points: 1

### Implementation Details

- Function should fetch agents by facility_id with max quantity provided from front end.
- Function should return a response in json format.
- Response fields should be agent_id, agent_name, agent_surname, agent_age, agent_assigned_project and custom_id field.
- The API should be accessible only for authorized clients.

## Sub-Ticket 2

Create a table which is showing facilities their related agents by using the api that is provided by the backend.

### Acceptance Criteria

- Users could see the list of their own agents with enough distinctive details.

### Time/Effort Estimates

- 1 days, Story Points: 1

### Implementation Details

- Table should be built with material-ui React library to avoid extra css work and to be user-friendly.
- Table should have current agent_id, agent_name, agent_surname, agent_age, agent_assigned_project and custom_id field.

## Sub-Ticket 3

- Add pagination to the table and max visible rows ability as [10, 30, 50].
- Add filtering to the table

### Acceptance Criteria

- Users could select the visible max rows quantity.
- Users could filter the table by project and custom_id.

### Time/Effort Estimates

- 2 days, Story Points: 2

### Implementation Details

- Add pagination feature to the table.
- According to the selected max rows max page count should be calculated.
- Add two filters as;
 1- By project
 2- By custom_id === null, custom_id !== null

## Sub-Ticket 4

Field custom_id should be writable if the value is null. Other than this all cells should be read-only.

### Acceptance Criteria

- Users could input their custom ids to the custom_id table field.

### Time/Effort Estimates

- 1 days, Story Points: 1

### Implementation Details

- When creating the table component check if the custom_id value is null.
- If custom_id value is null, please make it writable for user.

## Sub-Ticket 5

All newly added custom ids should be written to the database.

### Acceptance Criteria

- The newly added data should update the related agent data.
- After the update table should be refreshed.

### Time/Effort Estimates

- 1 days, Story Points: 1

### Implementation Details

- Send put request to the related API to update the agent data.
