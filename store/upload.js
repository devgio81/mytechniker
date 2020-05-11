export const state = () => ({
  files: [],
  error: false
})

export const mutations = {
  updateFiles (state, files) {
    state.files = files
  },
  fail (state) {
    state.error = true
  }
}

export const getters = {
  files: state => state.files,
  error: state => state.error
}

export const actions = {
  async upload ({ commit }, files) {
    const uploadedFiles = []
    const config = {}
    try {
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData()
        const file = files[i]
        formData.append('file', file.file)
        const { data } = await this.$axios.$post('/file', formData, config)
        uploadedFiles.push(data)
      }
      commit('updateFiles', uploadedFiles)
    } catch (error) {
      commit('fail')
    }
  }
}
