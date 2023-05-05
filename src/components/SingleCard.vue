<script>
export default{
    name:"SingleCard",
    props:['propsCard']
}

</script>
<template>
    <div class="card">
        <img :src="propsCard.card_images[0].image_url" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ propsCard.name }}</h5>
            <p class="card-text">{{ propsCard.type }}</p>
            <p class="card-text"> {{ propsCard.desc }}</p>
        </div>
</div>
</template>
<style lang="scss" scoped>
.card{
    width: calc(100% / 5 - 5px);
    margin-top: 10px;
}
</style>