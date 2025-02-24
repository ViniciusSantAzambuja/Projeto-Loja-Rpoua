<template>
<div class="search-bar-container">
    <input 
        class="search-input"
        type="text" 
        name="search-area" 
        id="search-area" 
        :placeholder="placeholder"
        @keydown.enter="search()"
        v-model="searchParameter"
    >
    <fontAwesome 
        icon="magnifying-glass" 
        class="icon" 
        @click="search()"
    />
</div>
</template>

<script> 
export default {
    name: "VSearchBar",
    props: {
        placeholder: {
            type: String,
            default: ""
        }
    },
    data: () => ({
        searchParameter: '',
    }),

    methods: {
        search(){
            console.log(`Busca algo no banco de dados: ${this.searchParameter}`)
        }
    },
}
</script>

<style scoped>
.icon {
    text-decoration: none;    
    color: #4169E1;
    font-size: 1rem;
    padding: 0.5rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    position: relative;
    cursor: pointer;
}

.icon:hover{
    color: #121212;
    background-color: #4169E1;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
}

.search-bar-container{
    display: flex;
    top: -0.16rem;
    align-items: center;
    justify-content: center;
    margin-left: 20rem;
}

.search-bar-container input{
    padding-left: 0.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border: none;
    outline: none;
}

.search-bar-container input:focus{
    outline: none;
    border: 1px solid #4169E1;
    transition: ease-in-out ;
}

.search-bar-container input::placeholder{
    padding: 0.25rem;
    color: #121212;
    font-weight: 600;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
}

</style>