const state = {
  imgSlickSliderList: []
}

const mutations = {
  setImgSlickSliderList: (state, imgSlickSliderList) => {
    state.imgSlickSliderList = imgSlickSliderList
  }
}

const action = {
  setImgSlickSliderList: (commit) => {
    const fs = require('fs')
    // const path = require('path')
    fs.readdir(__dirname, (err, files) => {
      if (err) {
        console.log(err)
      } else {
        console.log('\nCurrent directory filenames:')
        files.forEach(file => {
          console.log(file)
        })
      }
    })
  }
}

const getters = {
  getImgSlickSliderList: state => {
    return state.imgSlickSliderList
  }
}

export default {
  state,
  mutations,
  action,
  getters
}
