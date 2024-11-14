function Tag({title}: {title: string}) {
    return (<div className="flex items-center rounded-full bg-green px-3 py-1 text-xs font-medium leading-5 text-white ">
        {title}
    </div>);
}
export default Tag;