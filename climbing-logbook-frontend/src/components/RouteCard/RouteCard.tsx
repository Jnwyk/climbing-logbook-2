import styles from './RouteCard.module.scss'
import Card from '../Card/Card';
import Label from '../Label/Label';

type RouteModel = {
    id: number,
    routename: string,
    grade: string,
    rank: number,
    location: string,
}

interface RouteCard{
    route: RouteModel
}

function RouteCard(props: RouteCard) {
    return (
        <Card>
            <Label name="Route Name" value={props.route.routename}/>
            <Label name="Grade" value={props.route.grade}/>
            <Label name="Rank" value={props.route.rank}/>
            <Label name="Location" value={props.route.location}/>
        </Card>
    );
}

export default RouteCard;