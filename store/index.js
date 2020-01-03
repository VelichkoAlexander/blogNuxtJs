import axios from 'axios';

export const state = () => ({
  postLoaded: []
});


export const mutations = {
  setPosts(state, posts) {
    console.log(posts);
    state.postLoaded = posts;
  },
  addPost(state, post) {
    state.postLoaded.push(post);
  }
};

export const actions = {
  async nuxtServerInit({commit}, contex) {
    try {
      const response = await axios.get('https://blog-nuxt-8cbbf.firebaseio.com/posts.json');
      const postArray = [];
      for (let key in response.data) {
        postArray.push({...response.data[key], id: key})
      }
      commit('setPosts', postArray);
    } catch (e) {
      console.log(e);
    }
  },
  async addPost({commit}, post) {
    // console.log(post);
    try {
      const response = await axios.post('https://blog-nuxt-8cbbf.firebaseio.com/posts.json', post);
      commit('addPost', {...post, id: response.data.name});
    } catch (e) {
      console.log(e);
    }
  }
};

export const getters = {
  getPostLoaded(state) {
    return state.postLoaded;
  }
};

