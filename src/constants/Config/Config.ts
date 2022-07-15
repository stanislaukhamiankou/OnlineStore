import { dataProductСhart as data } from "src/constants"

export const configProductСhart = {
  appendPadding: 10,
  data,
  angleField: 'value',
  colorField: 'type',
  radius: 0.8,
  label: {
    type: 'outer',
  },
  interactions: [
    {
      type: 'element-active',
    },
  ], 
}

export const configPercentageChart = {
  height: 200,
  width: 200,
  autoFit: false,
  percent: 0.7,
  color: ['#5B8FF9', '#E8EDF3'],
}