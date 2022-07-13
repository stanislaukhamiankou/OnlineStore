export interface IAdvanceOrder {
    id: number
    make: string
    name: string
    year: string
    cpu: string
    screen_diagonal: string
    storage: string
    oc: string
    img: string
    count: number
}

export interface IAdvanceOrderState {
    advanceOrder: IAdvanceOrder[]
    isLoading: boolean
    isLoaded: boolean
    error: any | null
}