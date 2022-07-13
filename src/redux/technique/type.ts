export interface ITechnique {
    id: number
    make: string
    name: string
    year: string
    cpu: string
    screen_diagonal: string
    storage: string
    oc: string
    img: string
}
  
export interface ITechniqueState {
    technique: ITechnique[]
    isLoading: boolean
    isLoaded: boolean
    error: any | null
    filteredTechnique: ITechnique[]
}
  