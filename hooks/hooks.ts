import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'

export const useTypedDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const useSelectors = () => {
  const { value } = useTypedSelector(state => state.counter);
  return {
    value,
  };
};

export { useSelectors };
