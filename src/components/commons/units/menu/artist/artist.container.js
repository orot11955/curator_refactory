import { useState } from "react" 
import ArtWorkView from "../../art/work/work.presenter"

export default function ArtWorkContainer() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
        <>
          <ArtWorkView
          open={openModal}
          close={closeModal}/>
        </>
    )
}

// react Modal 로 클릭시 창내려오기 