<template>
    <div class="banner-capa view-main">
        <div class="slider-div">
            <CarouselIndicators
            v-if="indicators"
            :total="slides.length"
            :current-index="currentSlide"
            @switch="switchSlide($event)"
            ></CarouselIndicators>
            
            <CarouselItem 
            v-for="(slide, index) in slides" 
            :slide="slide" 
            :key="`item-${index}`" 
            :current-slide="currentSlide"
            :index="index"
            :direction="direction"
            @mouseenter="stopSlideTimer"
            @mouseout="startSlideTimer"
            ></CarouselItem>
            
            <CarouselControls
            v-if="controls"
            @prev="prev"
            @next="next"
            ></CarouselControls>
        </div>
    </div>        
</template>

<script>
import CarouselItem from './CarouselItemSingleItemVis.vue'
import CarouselIndicators from '../../carousel/CarouselIndicators.vue';
import CarouselControls from '../../carousel/CarouselControls.vue';

    export default{
        props: {
            slides: {
                type: Array,
                required: true,
            },
            controls: {
                type: Boolean,
                default: false,
            },
            indicators: {
                type: Boolean,
                default: false
            },
            interval: {
                type: Number,
                default: 5000,
            },
        },
        components: { CarouselItem, CarouselControls, CarouselIndicators },
        data: () => ({
            currentSlide: 0,
            slideInterval: null,
            direction: "right",
        }),
        methods: {
            setCurrentSlide(index){
                this.currentSlide = index;
            },
            prev(step = -1){
                const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length - 1;
                this.setCurrentSlide(index);
                this.direction = "left";
                this.startSlideTimer();
            },
            _next(step = 1){
                const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + step : 0;
                this.setCurrentSlide(index);
                this.direction = "right";
            },
            next(step = 1){
                this._next(step);
                this.startSlideTimer();
            },
            startSlideTimer(){
                this.stopSlideTimer();
                this.slideInterval = setInterval(() => {
                    this._next();
                }, this.interval);
            },
            stopSlideTimer(){
                clearInterval(this.slideInterval);
            },
            switchSlide(index){
                const step = index - this.currentSlide;
                if(step > 0){
                    this.next(step);
                }else{
                    this.prev(step);
                }
            },
        },
        mounted(){
            this.startSlideTimer();
        },
        beforeUnmount(){
            this.stopSlideTimer();
        },
    };
</script>

<style scoped>
.view-main{
    height: 500px;
    background-color: #d9d99b;
}

.banner-capa{
    display: flex;
    justify-content: center;
}

.slider-div{
    position: relative;
    width: 500px;
    height: 500px;
    overflow: hidden;
    top: 45px
}

.banner-capa .direita {
    margin-left: -1rem;
}

.banner-capa .esquerda{
    margin-right: -1rem;
}

.banner-capa .esquerda img{
    transform: rotate(180deg);
}

.banner-capa .button-banner img{
    height: 1.2rem;
    width: 1.2rem;
}

</style>