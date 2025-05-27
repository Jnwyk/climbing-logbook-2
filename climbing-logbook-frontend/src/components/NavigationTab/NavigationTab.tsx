import NavTabButton from "../NavTabButton/NavTabButton";

const navigationButtons = ["User", "Routes", "Ascents"];

const printButtons = (navButtons: Array<string>) => navButtons.map((button) => <NavTabButton key={button} label={button}/>);

function NavigationTab(){
    return <div style={{flexGrow: 1}}>
        {printButtons(navigationButtons)}
    </div>
}

export default NavigationTab;