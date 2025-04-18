<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const runOCR = () => {
  // 실제 실행 로직은 emit 또는 router 이동 등으로 연결하세요.
  alert('OCR 기능 실행됨 (실제 기능은 구현 필요)')
}
</script>

<template>
  <!-- OCR 소개 -->
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>OCR 기능 소개</template>

    OCR(광학 문자 인식)은 이미지에서 텍스트를 추출하는 기술입니다.
    <br />
    스캔 문서, 사진 속 글자, 스크린샷 등을 텍스트 데이터로 변환할 수 있습니다.
  </WelcomeItem>

  <!-- 활용 예시 -->
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>활용 예시</template>

    📄 문서 디지털화<br />
    🧾 영수증/명세서 자동 처리<br />
    📸 이미지 속 텍스트 추출 (간판, 표지 등)<br />
    💬 챗봇 전처리용 입력 데이터 수집 등
  </WelcomeItem>

  <!-- 실행 버튼 -->
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>OCR 실행</template>
    OCR 기능을 직접 실행해보세요.<br />
    <button @click="runOCR" style="padding: 0.5rem 1rem; border-radius: 6px; border: none; background-color: #444; color: white; cursor: pointer;">
      OCR 시작
    </button>
  </WelcomeItem>
</template>
