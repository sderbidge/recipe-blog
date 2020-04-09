<template>
  <div class="share">
    <h1>Share your recipe!</h1>
    <div class="heading">
      <h2>Add a recipe</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Title" />
        <p></p>
        <input v-model="uploadedBy" placeholder="Uploaded by" />
        <p></p>
        <textarea rows="8" cols="15" v-model="ingredients" placeholder="Ingredients" />
        <p></p>
        <textarea rows="10" cols="50" v-model="directions" placeholder="Directions" />
        <p></p>
        <input type="file" name="photo" @change="fileChanged" />
        <button @click="upload">Share</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>"{{addItem.title}}" shared successfully!</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Admin",
  data() {
    return {
      title: "",
      uploadedBy: "",
      ingredients: "",
      directions: "",
      file: null,
      addItem: null,
      recipes: []
    };
  },
  created() {
    this.getRecipes();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async getRecipes() {
      try {
        let response = await axios.get("/api/recipes");
        this.recipes = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append("photo", this.file, this.file.name);
        let r1 = await axios.post("/api/photos", formData);
        let r2 = await axios.post("/api/recipes", {
          title: this.title,
          uploadedBy: this.uploadedBy,
          ingredients: this.ingredients,
          directions: this.directions,
          path: r1.data.path,
          saved: false
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>