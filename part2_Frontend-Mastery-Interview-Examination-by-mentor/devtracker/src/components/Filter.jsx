const Filter = ({ search, setSearch, priorityFilter, setPriorityFilter }) => {

    return (
        <div className="filterSearch">
            <p>
                Search by : <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
            </p>
            <select name="prioritySearch" id="priorityFilter" value={priorityFilter} onChange={(event) => setPriorityFilter(event.target.value)}>
                <option value="all">All</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
        </div>
    )
};

export default Filter;