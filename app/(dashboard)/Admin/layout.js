import AdminSidebar from '../../_Components/AdminComponents/AdminSidebar'

export default function AdminLayout({ children }) {
    return (
        <div className={`min-w-full max-w-7xl min-h-screen max-h-fit my-0 mx-auto   flex items-center `}>
            <AdminSidebar />
            {children}
        </div>
    )
}

