import { useRef, useCallback } from "react";

type Timer = ReturnType<typeof setTimeout>;
// type SomeFunction = (...args: Timer[]) => void;


export const useDebounce = (delay = 300, notDelayFirstTime = true ) => {
 const debouncing = useRef<Timer>();
 const isFirstTime = useRef(notDelayFirstTime);

 const debounce = useCallback((func: () => void) => {
  if(isFirstTime.current){
   isFirstTime.current = false;
   func();
  }else{
   if (debouncing.current) {
    clearTimeout(debouncing.current)
   }
  }
  debouncing.current = setTimeout(() => func(), delay)
 }, [delay])

 return { debounce }
}