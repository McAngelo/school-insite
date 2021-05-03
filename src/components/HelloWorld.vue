<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> 
      For an indepth insight into your school, teachers, students, wards performance, use <b>School InSight</b>.
      <br />
      <br />
    </p>
    <p>
      <a href="#" class="nav-link" rel="noopener">Set Up a Free Account</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.nav-link {
 color: #42b983;
    /*position: relative;*/
    place-content: center;
    place-items: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    /*display: flex;*/
    border-radius: 9999px;
    letter-spacing: .05em;
    border: 1px solid #42b983;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
    padding: .5rem 1.5rem;
    white-space: nowrap;
    font-weight: 700;
}
</style>
