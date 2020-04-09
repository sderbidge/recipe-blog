<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <div class="logo">
          <img src="/logo.png" />
        </div>
      </router-link>
      <router-link to="/favorite-recipes">Favorite Recipes</router-link>
      <router-link to="/share">Share</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <a href="https://github.com/sderbidge/creative4">Git Repository</a>
    </div>
  </div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #6b4111;
  color: #cc711b;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>