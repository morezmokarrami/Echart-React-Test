import { ReactElement } from "react";

export interface DashboardOptions {
     title: string,
     url: string,
     icon: ReactElement
}

export interface FutureRacesInterface {
     id: number,
     name: string,
     event_date: string,
     location: string
}

export interface ChartInterface {
     atl: number,
     ctl: number,
     ifActual: number,
     ifPlanned: number,
     tsb: number,
     tssActual: number,
     tssPlanned: number,
     workoutDay: string
}