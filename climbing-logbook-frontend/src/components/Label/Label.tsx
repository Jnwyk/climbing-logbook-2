interface LabelInterface{
    name: string,
    value: string | number, 
}

function Label(props: LabelInterface) {
    return (
        <div>
            <span>{props.name}:</span>
            <span>{props.value}</span>
        </div>
    );
}

export default Label;