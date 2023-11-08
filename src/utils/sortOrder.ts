import { CheckBoxState } from '../hooks/useCheckBoxState';

// This sorts out the order in which the checkboxes are checked
export const getSortedActiveCheckboxes = (checkboxStates: CheckBoxState[]) => {
  return checkboxStates
    .map((state, index) => ({ ...state, index }))
    .filter((state) => state.checked)
    .sort((a, b) =>
      a.order !== null && b.order !== null ? a.order - b.order : 0,
    );
};
