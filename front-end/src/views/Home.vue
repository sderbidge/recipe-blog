<template>
  <div class="home">
    <section class="recipe-collection">
      <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
        <h2>{{recipe.title}}</h2>
        <p>Uploaded by {{recipe.uploadedBy}}</p>
        <img :src="recipe.path" />
        <p>{{recipe.ingredients}}</p>
        <p>{{recipe.description}}</p>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      recipes: []
    };
  },
  created() {
    this.getRecipes();
  },
  methods: {
    async getRecipes() {
      try {
        let response = await axios.get("/api/recipes");
        this.recipes = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.recipe {
  margin: 10px;
  padding: 15px;
  border-radius: 15px;
}
</style>
