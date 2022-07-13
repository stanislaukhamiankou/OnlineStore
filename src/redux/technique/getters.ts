import { ITechniqueState } from "./type";

export const getTechniqueInfo = (state: { technique: ITechniqueState }) => state.technique.technique

export const getFiltered = (state: {technique: ITechniqueState}) => state.technique.filteredTechnique