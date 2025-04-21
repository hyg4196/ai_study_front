<script setup>
  import { useRouter } from 'vue-router'

  defineProps({
    msg: {
      type: String,
      required: true,
    },
  })

  const router = useRouter()

  function goToLogin() {
    router.push('/login')
  }

  function goToSignup() {
    router.push('/signup')
  }
</script>

<template>
  <div class="greetings">
    <h1 class="blue">{{ msg }}</h1>

    <h4>AI OCR 기능을 제공합니다. 간단한 회원 가입 후 이용해보세요.<br></h4>
    <h3>
<!--      <button @click="goToLogin">로그인</button>-->

      <a href="#" @click.prevent="goToLogin" target="_blank" rel="noopener" style="margin-right: 10px">로그인</a>
      <a href="#" @click.prevent="goToSignup" target="_blank" rel="noopener">회원가입</a>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
