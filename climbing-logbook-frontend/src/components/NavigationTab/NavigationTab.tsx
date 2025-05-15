import NavTabButton from "../NavTabButton/NavTabButton";
import styles from "./NavigationTab.module.scss";

// const navigationButtons = ["User", "Routes", "Ascents"];

// const printButtons = (navButtons: Array<string>) => {
//     return navButtons.map((element: string) => {
//         return <NavigationTab className="button" />
//     })
// }

function NavigationTab(){
    return <div className={styles.navigationTab}>
        <NavTabButton/>
        <NavTabButton/>
        <NavTabButton/>
    </div>
}

export default NavigationTab;