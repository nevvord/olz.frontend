<template lang="pug">
.color-white.fs-15(v-if="!$auth.user")
    i.far.fa-user
AvatarViewer( v-else :img="$auth.user.avatar" :size="'2rem'")
</template>

<script>
import AvatarViewer from '~/components/imageComponents/AvatarViewer'
export default {
    components: {
        AvatarViewer
    }
}
</script>
