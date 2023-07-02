import LayoutSideNavAdminUI from './side-nav-admin.presenter'
import { useRouter } from 'next/router';

export default function LayoutSideNavAdmin() {

    const router = useRouter();

    const onClickMember = () => {
      router.push('http://localhost:3000/info/admin')
    }
    
    const onClickArtist = () => {
      router.push('http://localhost:3000/info/admin/artist')
    }
  
    const onClickHelp = () => {
      router.push('http://localhost:3000/info/admin/help')
    }
    const onClickWork = () => {
      router.push('http://localhost:3000/info/admin/work')
    }
    const onClickExhibition = () => {
      router.push('http://localhost:3000/info/admin/exhibition')
    }
    const onClickCommission = () => {
      router.push('http://localhost:3000/info/admin/commission')
    }
  
    return (
        <LayoutSideNavAdminUI
        onClickArtist={onClickArtist}
        onClickCommission={onClickCommission}
        onClickExhibition={onClickExhibition}
        onClickHelp={onClickHelp}
        onClickMember={onClickMember}
        onClickWork={onClickWork}
        />
    )
}