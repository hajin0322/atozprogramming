<template>
    <div class="board">
        <div v-for="post in posts" :key="post.id" class="post-container">
            <!--Post.vue 사용-->
            <PostComponent :post="post" />
        </div>
    </div>
</template>

<script>
import PostComponent from './Post.vue';

export default {
    name: 'BoardComponent',
    components: {
        PostComponent
    },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    author: '배근우',
                    title: '개념과 실체에 관하여',
                    content: '해봐야 안단다.',
                    likes: 22,
                    comments: 5,
                    date: '2024/12/23 17:33'
                },
                {
                    id: 2,
                    author: '김상진',
                    title: 'AtoZProgramming',
                    content: '해봐야 안단다잉.',
                    likes: 15,
                    comments: 10,
                    date: '2024/12/30 14:59'
                },
                {
                    id: 3,
                    author: '김선교',
                    title: '데이터베이스 해봄',
                    content: '해봐야 알겠드라.',
                    likes: 17,
                    comments: 9,
                    date: '2025/01/07 16:33'
                },
                {
                    id: 4,
                    author: '김세진',
                    title: '디자인 어떰',
                    content: '해봐야 아는군.',
                    likes: 20,
                    comments: 8,
                    date: '2025/01/07 17:00'
                }
            ]
        }
    }
}
</script>

<style scoped>
.board {
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center; /*아이템 가운데 정렬*/
  gap: 20px;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 20px;
  width: 500px;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */ 
}
</style>