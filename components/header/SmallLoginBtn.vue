<template lang="pug">
.color-white.fs-15(v-if="!$auth.user")
    i.far.fa-user
//- AvatarViewer( v-else :img="link + $auth.user.avatar.link" :size="'2rem'")
</template>

<script>
import AvatarViewer from '~/components/imageComponents/AvatarViewer'
export default {
    data: () => ({
        // link: process.env.BASE_URL + "/"
    }),
    components: {
        AvatarViewer
    }
}
</script>
