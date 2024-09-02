<script setup>
const props = defineProps({
    width: Number,
    height: Number
})

</script>

<template>
    <div class="card-layout" :style="{ width: width + 'px', height: height + 'px' }">
        <div class="card-body">
            <slot name="header"></slot>
            <slot name="default"></slot>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style scoped>
.body {
    margin: 0;
}

.card-layout {
    background-color: #b63a3a;
}

.top {
    background-color: #DCDCDC;
    width: 100%;
    height: 30px;
    margin: 0;
    font-size: 10px;
}

.top_left {
    float: left;
    background-color: rgb(191, 163, 40);
    height: 100%;
    width: 30%;
}

.top_right {
    float: right;
    background-color: rgb(21, 139, 169);
    height: 100%;
    width: 70%;
}

.top_item {
    background-color: rgb(28, 158, 62);
    width: 100px;
}
</style>
