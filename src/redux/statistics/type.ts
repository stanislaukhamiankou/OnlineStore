export interface IStatistics {
    name: string
    year: string
    gdp: number
}
  
export interface IStatisticsState {
    statistics: IStatistics[]
    isLoading: boolean
    isLoaded: boolean
    error: any | null
}
  