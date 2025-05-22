import routeData from "../../../data/routes.json"
import RouteCard from '../RouteCard/RouteCard';
import type { ReactNode } from 'react';

interface MainInterface{
    searchInputResults: string; 
}

function Main(props: MainInterface) {

    const filterRoutes = (filterData: string): ReactNode => {
        return routeData.map(route => route.routename.startsWith(filterData) && <RouteCard key={route.id} route={route}/>)
    }

    return (
        <main style={{overflowY: "auto"}}>
            {filterRoutes(props.searchInputResults)}
        </main>
    );
}

export default Main;