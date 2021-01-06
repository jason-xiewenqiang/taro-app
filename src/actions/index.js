import { TAB_CURRENT }  from '../constants/index'

export const changeTab = (data) => {
  return {
    type: TAB_CURRENT,
    data
  }
}

