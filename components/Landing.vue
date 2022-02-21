<template>
    <div class="bg-brand-navy overflow-hidden relative h-screen w-screen">
        <div class="font-body container mx-auto relative flex h-full justify-center items-start md:items-center">
            <div class="uppercase px-2 relative md:px-0 pt-40 md:pt-0">
                <div class="font-body relative text-brand-black">
                    <div class="landing__name z-10 font-heading text-3xl md:text-5xl lg:text-6xl xl:text-7xl xxl:text-8xl text-brand-pink">Amy Gooding</div>
                    <div class="landing__body--overlay pointer-events-none text-brand-blue font-heading absolute text-center">
                        <div>Packaging</div>
                        <div>Designer</div>
                    </div>
                    <div class="landing__body--mobile relative md:hidden">
                        <div>Packaging</div>
                        <div>Designer &</div>
                        <div>Art Director</div>
                    </div>
                    <div class="landing__body--desktop relative text-center hidden md:block">
                        <div>Packaging Designer</div>
                        <div>& Art Director</div>
                    </div>
                </div>
                <div class="leading-none font-heading text-brand-blue">
                    <div class="landing__caption--mobile text-5xl md:hidden">
                        <div>Website</div>
                        <div>coming soon</div>
                    </div>
                    <div class="landing__caption--desktop hidden md:block">
                        <div>Website coming soon</div>
                    </div>
                </div>
            </div>
            <a href="https://instagram.com/amygoodingdesign" target="_blank" class="text-brand-white landing__social absolute flex flex-row items-center">
                <div class="landing__social__icon">
                    <InstagramLogo />
                </div>
                <div class="landing__social__text uppercase text-base ml-2 font-body md:text-lg lg:text-xl">amygoodingdesign</div>
                
            </a>
        </div>
        
    </div>
</template>
<script>
import InstagramLogo from '~/assets/svg/instagram.svg'

export default {
    components: {
        InstagramLogo
    }
}
</script>
<style lang="scss" scoped>

.landing {
    &__name {
        position: absolute;
        transform: rotate(-2deg);
        top: -25px;
        left: 10px;

        @include min-bp($md) {
            top: -20px;
            left: 40px;
        }

        @include min-bp($xl) {
            top: -40px;
        }
    }

    &__social {
        bottom: 100px;
        right: 50%;
        transform: translateX(50%);

        @include min-bp($md) {
            bottom: 100px;
        }
        @include min-bp($lg) {
            bottom: 50px;
        }

        &__text {
            
            @include min-bp($md) {
                line-height: 0;
                margin-top: 1px;
            }
        }

        &__icon {
            svg {
                width: 16px;
                height: 16px;

                @include min-bp($md) {
                    width: 19px;
                    height: 19px;
                }
            }
        }
    }

    &__body {
        
        &--mobile {
            font-size: 56px;
            line-height: 0.95;

            @include min-bp($xxs) {
                font-size: 66px;
            }
            @include min-bp($sm) {
                font-size: 76px;
            }
        }
        &--desktop {
            font-size: 95px;
            line-height: 1.1;

            @include min-bp($lg) {
                font-size: 130px;
            }
            @include min-bp($xl) {
                font-size: 164px;
                // line-height: 1;
            }
            @include min-bp($xxl) {
                font-size: 196px;
            }
        }
        &--overlay {
            font-size: 300px;
            line-height: 1.1;
            top: 90%;
            left: 50%;
            transform: translate(-50%,-50%) rotate(-5deg);
            opacity: 0.05;

            @include min-bp($md) {
                top: 50%;
            }

            @include min-bp($lg) {
                font-size: 350px;
            }
            @include min-bp($xl) {
                font-size: 400px;
            }
            @include min-bp($xxl) {
                font-size: 500px;
            }
        }

    }
    &__caption {

        &--mobile {
            position: absolute;
            bottom: -80px;
            right: 20px;
            text-align: center;
            width: 280px;
            transform: rotate(-2deg);
        }
        &--desktop {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: rotate(-3deg) translate(-50%,-50%);
            font-size: 70px;
            width: 800px;
            text-align: center;

            @include min-bp($lg) {
                top: 42.5%;
                font-size: 85px;
                width: 1000px;
            }
            @include min-bp($xl) {
                font-size: 105px;
                width: 1200px;
            }
            @include min-bp($xxl) {
                font-size: 115px;
            }
        }
    }
}

</style>