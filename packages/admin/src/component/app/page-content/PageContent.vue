<template>
    <RouterView>
        <template #default="{ Component, route }">
            <!-- <keep-alive v-if="false">
						<component :is="Component" :key="route.fullPath" />
					</keep-alive> -->
            <div>
                <!-- {{ route }} -->
                <component :is="Component" />
            </div>
        </template>
    </RouterView>
</template>
<script setup lang="ts">

defineOptions({
    name: 'vu-page-content'
})
</script>

<style scoped lang="scss"></style>
