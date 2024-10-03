<template>
    <div class="info-container">
        <h1>{{ title }}</h1>
        <ul class="info-list">
            <li v-for="(info, index) in infos" :key="index">
                {{ info }}
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name: 'VFooterInfo',
    props:{
        title: {
            type: String,
            default: '',
        },
        infos: {
            type: Array,
            default: () => ['info 1', 'info2']
        }
    }
}
</script>

<style scoped>
.info-container{
    display: flex;
    flex-direction: column;
    

    h1{
        font-size: 24px;
        font-weight: bold;
        font-family: 'Open Sans', sans-serif;
    }

    .info-list{
        list-style: none;
        font-size: 16px;
        font-weight: 400;
        padding: 0;
        margin: 0;

        >li{
            margin-bottom: 0.5rem;
            cursor: pointer;
            font-family: 'Rubik', sans-serif;
            color: rgba(0, 0, 0, 0.6);
        }
    }
}
</style>