<template>
  <div class="fav-recipes">
    <section class="recipe-collection">
      <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
        <div id="saved" v-if="recipe.saved">
          <h1>{{recipe.title}}</h1>
          <p>Uploaded by {{recipe.uploadedBy}}</p>
          <img :src="recipe.path" />
          <h1>Ingredients:</h1>
          <p>{{recipe.ingredients}}</p>
          <h1>Directions:</h1>
          <p>{{recipe.directions}}</p>
          <button id="unsave" @click="unfavoriteRecipe(recipe)">Unfavorite Recipe</button>
        </div>
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
        //console.log(error);
      }
    },
    async unfavoriteRecipe(recipe) {
      try {
        await axios.put("/api/recipes/" + recipe._id, {
          saved: false
        });
        this.getRecipes();
        alert("Unfavorited " + recipe.title);
        return true;
      } catch (error) {
        //console.log(error);
      }
    }
  }
};
</script>

<style scoped>
p {
  white-space: pre-line;
}

img {
  width: 200px;
  margin: 10px;
}

.recipe {
  margin: 10px;
  padding: 15px;
  border-radius: 15px;
  background-color: rgb(238, 238, 238);
}
</style>