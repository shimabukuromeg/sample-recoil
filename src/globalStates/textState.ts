import React from 'react';
import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
  } from 'recoil';

const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
  });

  export const useTextState = () => {
    return useRecoilValue(textState)
  }

  export const useTextMutators = () => {
    const setState = useSetRecoilState(textState)
  
    const setText = React.useCallback(
      (text: string) => setState(text),
      [setState],
    )
  
    return { setText }
  }

  export const useCharCountState = () => {
    return useRecoilValue(charCountState);
  }
