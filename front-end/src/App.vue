<template>
  <div id="app">
    <div id="header">
      <div id="brand">
        <router-link to="/">
          <img src="/logo.png" />
        </router-link>
      </div>
      <div id="side">
        <router-link to="/favorite-recipes">
          <div class="menu-item fav-recipes">
            <img src="/fav-recipes.png" />
          </div>
        </router-link>
        <router-link to="/share">
          <div class="menu-item">
            <img src="/share.png" />
          </div>
        </router-link>
      </div>
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
#header {
  padding: 10px 100px 0px 100px;
  background-color: #72441a;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#header a:hover {
  color: #f08e4d;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 200px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.fav-recipes {
  margin-right: 50px;
}

.menu-item a {
  text-decoration: none;
  color: #cc711b;
  font-size: 15px;
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
  font-size: 15px;
  font: Arial;
  color: #000;
  text-decoration: none;
  font-weight: bold;
}

.footer a:hover {
  color: rgb(49, 49, 49);
  text-decoration: none;
  font-weight: bold;
}

.footer a:visited {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-weight: bold;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>