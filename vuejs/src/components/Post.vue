<template>
    <div class="post">
        <div class="post-header">
            <h3>{{ post.title }}</h3>
            <p class="author">{{ post.author }} • {{ post.date }}</p>
        </div>
        <p class="content">{{ post.content }}</p>
        <div class="post-footer">
            <button onclick="alert()" >좋아요!{{ post.likes }}</button>
            <button onclick="alert()">댓글!{{ post.comments }}</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PostComponent',
  props: {
    post: {
        type: Object,
        required: true
    }
  }
}
</script>

<style scoped>

</style>