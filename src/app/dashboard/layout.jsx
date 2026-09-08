import Link from "next/link";

const layout = ({children}) => {
    return (
        <div className="grid grid-cols-12 gap-5 min-h-screen">
            <div className="col-span-3 border-r-2 p-2">
                <h3 className="mb-10">Navigation</h3>
                <div className="flex flex-col gap-5">
                    <Link className="bg-sky-500 text-center rounded" href={'/dashboard/add-story'}>Add story</Link>
                    <Link className="bg-sky-500 text-center rounded" href={'/dashboard/my-profile'}>My Profile</Link>
                    <Link className="bg-sky-500 text-center rounded" href={'/dashboard/settings'}>Settings</Link>
                </div>
            </div>
            <div className="col-span-9">{children}</div>
        </div>
    );
};

export default layout;