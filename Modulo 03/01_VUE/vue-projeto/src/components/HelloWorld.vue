<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Eduardo F Motton</h2>
    <button @click="carregarClientes">Carregar</button>
    <div>
      <ul>
        <li v-for="cliente in clientes" :key="cliente.id">{{cliente.nome}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      clientes: []
    }
  },
  methods: {
    carregarClientes() {
      this.$http.get("http://localhost:3000/clientes").then((response) => {
        this.clientes = response.data;
      });
    },
  },
};
</script>

<style scoped>
</style>
