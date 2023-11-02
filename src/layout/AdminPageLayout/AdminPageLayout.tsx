import { Outlet } from 'react-router-dom';
import SearchInput from '../../widgets/Forms/SearchInput';
import SidebarAdmin from '../../widgets/Sidebar/SidebarAdmin/SidebarAdmin';
import styles from './AdminPageLayout.module.scss'

const AdminPageLayout = () => {
    const {wrapper, admin_sidebar, container, searchpanel, main} = styles;
    return <div className={wrapper}>
        <div className={admin_sidebar}>
            <SidebarAdmin />
        </div>
        <div className={container}>
            <div className={searchpanel}><SearchInput /></div>
            <div className={main}><Outlet /></div>
        </div>
    </div>
}

export default AdminPageLayout