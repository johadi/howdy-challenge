import {useSelector} from "react-redux";
import {MIN_SEARCH_LENGTH} from "../../constants";

export const SearchResult = () => {
    const selectedFilteredGroups = useSelector(state => state.groups.filteredGroups);
    const selectedSearchTerm = useSelector(state => state.groups.searchTerm);

    if (selectedSearchTerm.length < MIN_SEARCH_LENGTH) {
        return <div className="text-type">Type at least 3 characters!</div>;
    }

    if(selectedSearchTerm.length >= MIN_SEARCH_LENGTH && selectedFilteredGroups.length === 0) {
        return <div className="text-no-result">No result matches this search term!</div>
    }

    const displayResult = (group) => {
        return `${group.title} - ${group.author.firstName} ${group.author.surname}`
    }

    return (
        <ul className="result-list">
            {
                selectedFilteredGroups.map((group) =>
                    <li key={group.title}>
                        {displayResult(group)}
                    </li>)
            }
        </ul>
    )
}
