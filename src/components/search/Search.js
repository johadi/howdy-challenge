import {setSearchedGroups, setSearchTerm} from "../../state/actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {MIN_SEARCH_LENGTH} from "../../constants";

export const Search = () => {
    const dispatch = useDispatch();
    const selectedGroupList = useSelector(state => state.groups.groupList);
    const selectedSearchTerm = useSelector(state => state.groups.searchTerm);

    useEffect(() => {
        if(selectedSearchTerm.length >= MIN_SEARCH_LENGTH) {
            const filteredGroups = selectedGroupList.filter(group => {
                return group.title.toLowerCase().includes(selectedSearchTerm.toLowerCase());
            });

            dispatch(setSearchedGroups(filteredGroups));
        }
    }, [selectedSearchTerm]);

    const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value));
    }

    return (
        <div className="search-control-wrapper">
            <input placeholder="Search the groups" type="text" value={selectedSearchTerm} onChange={handleSearch}/>
        </div>
    )
}
