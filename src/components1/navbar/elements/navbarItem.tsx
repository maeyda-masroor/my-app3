import { useGlobalState } from "@/contexts/GlobalStateContext";

function MenuItem ({title}:{title:string}){
    
    const { exitMenu } = useGlobalState();

    return <a className="hover:text-black" href={"/#"+title} onClick={exitMenu}>{title}</a>;
}

export default MenuItem;