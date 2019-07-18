<template>
    <layout>
        <div>
            <h2>Welcome</h2>
        </div>
    </layout>
</template>

<script>
    import Layout from '@/Shared/Layout'

    export default {
        components: {
            Layout,
        },
        props: {
            foo:'',
        }
    }
</script>
