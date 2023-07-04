import { useState } from "react" 
import ArtistMenuUI from "../../art/work/work.presenter"

export default function ArtistMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    return (
        <>
          <ArtistMenuUI
          open={openModal}
          close={closeModal}/>
        </>
    )
}

// react Modal 로 클릭시 창내려오기 