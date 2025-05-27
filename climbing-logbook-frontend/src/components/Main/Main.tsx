import routeData from "../../../data/routes.json"
import UserContextProvider, { UserContext } from "../../contexts/UserContext";
import RouteCard from '../RouteCard/RouteCard';
import { useContext, type ReactNode } from 'react';

interface MainInterface{
    searchInputResults: string; 
}

function Main(props: MainInterface) {

    const userContext = useContext(UserContext);

    const filterRoutes = (filterData: string): ReactNode => {
        return routeData.map(route => route.routename.startsWith(filterData) && route.userId === userContext.userId && <RouteCard key={route.id} route={route}/>)
    }

    return (<main>
                {filterRoutes(props.searchInputResults)}
            </main>);
}

export default Main;