<script setup>
</script>

<template>
  <div class="login-wrapper">
    <img @click="home" alt="Vue logo" class="logo" src="../../assets/free-icon.png" width="125" height="125" />

    <div class="form-area">
      <input v-model="userId" type="text" placeholder="아이디" class="input" />
      <input v-model="password" type="password" placeholder="비밀번호" class="input" />
      <input v-model="uname" type="text" placeholder="이름" class="input" />
      <input v-model="birthday" type="text" placeholder="생년월일" class="input" />
      <input v-model="nickname" type="text" placeholder="닉네임" class="input" />
      <button class="signup-button" @click="signup">회원가입</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      userId: '',
      password: '',
      uname: '',
      birthday: '',
      nickname: '',
    }
  },
  methods: {
    signup() {
      alert("회원가입 시도")
    },
    goToSignup() {
      this.$router.push('/signup')
    },

    home() {
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>
.login-wrapper {
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  margin-bottom: 1.5rem;
}

.form-area {
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
}

.input {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 16px;
  border: none;
  border-radius: 6px;
  background-color: #3a3a3a;
  color: #fff;
  font-size: 14px;
}

.input::placeholder {
  color: #aaa;
}

.signup-button {
  width: 100%;
  padding: 12px 16px;
  background-color: #00cfff;
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 8px;
}

.signup-button:hover {
  background-color: #00b0d6;
}

.signup-text {
  color: #ccc;
  margin-top: 16px;
  font-size: 14px;
}

.signup-link {
  color: #00cfff;
  margin-left: 6px;
  cursor: pointer;
  text-decoration: underline;
}

.signup-link:hover {
  color: #00e0ff;
}

html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
