import { useState } from "react";

const useModal = () => {
  const [isShowing,setIsShowing] = useState(false);
  function toggle(){
    setIsShowing(prev => !prev)
  }

  return {
    isShowing,
    toggle
  }
}

export default useModal;