export const ActionTypes = {
    UI_SEARCH_BAR_TOGGLE: 'ui/navbar/searchBar/TOGGLE',
  };
  
  export function toggleUiSearchBarAction() {
    return {
      type: ActionTypes.UI_SEARCH_BAR_TOGGLE,
    };
  }
  