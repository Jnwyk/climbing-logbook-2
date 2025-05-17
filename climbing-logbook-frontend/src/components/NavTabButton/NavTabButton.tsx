import styles from "./NavTabButton.module.scss";

interface NavTabButtonProps {
    label: string,
}

function NavTabButton(props: NavTabButtonProps){
    return <button className={styles.button}>{props.label}</button>
}

export default NavTabButton;