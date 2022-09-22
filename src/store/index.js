import { createStore } from 'vuex'

export default createStore({
  state: {
    title: "memes v2",
    memes: []
  },
  getters: {
  },
  mutations: {
    setMemes(state, payloaded) {
      state.memes = payloaded;
    }
  },
  actions: {
    async getMemes ({commit}, params) {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const result = await response.json();

        // console.log(params);
        if(!params?.total) {
          commit( 'setMemes', result.data.memes);
        } else {
            // console.log( `cargando ${params.total} memes`)
            const resultM = [];
            result.data.memes.forEach((meme, index) => {
              if(index < params.total) resultM.push(meme);
            });
            commit('setMemes', resultM);
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
