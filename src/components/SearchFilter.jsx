const SearchFilter = ({ type, filters, onFilterChange }) => {
  return (
    <div className="p-8 bg-white dark:bg-black">
      <h2 className="text-3xl font-semibold gradient-text mb-6">Filter {type === 'jobs' ? 'Jobs' : 'Candidates'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        <input
          type="text"
          name="search"
          placeholder={type === 'jobs' ? 'Search by job title' : 'Search by name'}
          value={filters.search}
          onChange={onFilterChange}
          className="p-3 border-gradient rounded-lg bg-transparent text-black dark:text-pink-400 placeholder-black dark:placeholder-pink-400"
        />
        <input
          type="text"
          name="skills"
          placeholder="Filter by skills"
          value={filters.skills}
          onChange={onFilterChange}
          className="p-3 border-gradient rounded-lg bg-transparent text-black dark:text-pink-400 placeholder-black dark:placeholder-pink-400"
        />
        <input
          type="text"
          name="location"
          placeholder="Filter by location"
          value={filters.location}
          onChange={onFilterChange}
          className="p-3 border-gradient rounded-lg bg-transparent text-black dark:text-pink-400 placeholder-black dark:placeholder-pink-400"
        />
        {type === 'jobs' ? (
          <>
            <select
              name="match"
              value={filters.match}
              onChange={onFilterChange}
              className="p-3 border-gradient rounded-lg bg-transparent text-black dark:text-pink-400"
            >
              <option value={0}>All Matches</option>
              <option value={80}>80%+ Match</option>
              <option value={90}>90%+ Match</option>
            </select>
            <select
              name="type"
              value={filters.type}
              onChange={onFilterChange}
              className="p-3 border-gradient rounded-lg bg-transparent text-black dark:text-pink-400"
            >
              <option value="">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Internship">Internship</option>
            </select>
          </>
        ) : (
          <select
            name="rating"
            value={filters.rating}
            onChange={onFilterChange}
            className="p-3 border-gradient rounded-lg bg-transparent text-black dark:text-pink-400"
          >
            <option value={0}>All Ratings</option>
            <option value={4}>4+ Stars</option>
            <option value={4.5}>4.5+ Stars</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;