import NavTabButton from "../NavTabButton/NavTabButton";
import styles from "./NavigationTab.module.scss";

const navigationButtons = ["User", "Routes", "Ascents"];

const printButtons = (navButtons: Array<string>) => navButtons.map((button) => <NavTabButton label={button}/>);

function NavigationTab(){
    return <div>
        {printButtons(navigationButtons)}
    </div>
}

export default NavigationTab;