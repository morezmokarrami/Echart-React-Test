
export interface FirstRace {
     name: string,
     date: string,
     location: string
}

export interface MainSliceInterface {
     hamburgerMenuState: boolean,
     firstRace: FirstRace,
     dashboardLoading: boolean 
}

