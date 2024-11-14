import ContactBtn from './ContactBtn';
import MenuItem from './navbarItem';

function Menu (){

    return (<>
        <MenuItem title={"About"}/>
        <MenuItem title={"Projects"}/>
        <MenuItem title={"Services"}/>
        <ContactBtn/>
        </>);
}

export default Menu;