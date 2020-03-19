<template>
    <div>
        <div v-html="getPhrase()" class="py-1 px-2 text-center color-blue font-cursive ts"></div>
        
    </div>
</template>

<script>
    export default {
        data() {return{
            phrases: [
                {
                    icon: '<i class="fas fa-mug-hot"></i>',
                    phrase: 'Чувствуйте себя как дома'
                },
                {
                    icon: '<i class="fas fa-broom"></i>',
                    phrase: 'Мы не волшебники, мы только учимся. Но кое-что мы уже наколдовали для тебя'
                },
                {
                    icon: '<i class="fas fa-stopwatch"></i>',
                    phrase: 'Делу время, потехе час, а OLZ ждёт вас прямо сейчас'
                },
                {
                    icon: '<i class="fas fa-theater-masks"></i>',
                    phrase: 'Внимание! Зайдя на OLZ, уходить нужно только с улыбкой на лице. Таков закон)'
                },
                {
                    icon: '<i class="fas fa-bone"></i>',
                    phrase: 'Хатико не дождался, а мы вас обязательно дождёмся'
                },
                {
                    icon: '<i class="fas fa-infinity"></i>',
                    phrase: 'Осторожно! После того, как вы воспользуетесь OLZ, вы захотите остаться тут навсегда)'
                },
                {
                    icon: '<i class="fab fa-napster"></i>',
                    phrase: 'До встречи с вами, наша жизнь не была так прекрасна, как сейчас'
                },
                {
                    icon: '<i class="fab fa-angellist"></i>',
                    phrase: 'Везде хорошо, но на OLZ лучше'
                },
            ]
        }},
        methods: {
            getPhrase() {
                function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max))
                }                
                const rundomNum = getRandomInt(this.phrases.length)
                const phrase = `${this.phrases[rundomNum].icon} ${this.phrases[rundomNum].phrase}`
                return phrase
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>