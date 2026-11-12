// 평화자료실 카드뉴스 (세로 스크롤 + 공유)
const siteTitle = '81년 만에 한국원폭 피해자들이 미국에 책임을 묻습니다';
const siteDescription = '서울 원폭국제민중법정(11/13~15, 한신대 신학대학원) — 카드뉴스 11장으로 미리 보기';
const joinUrl = 'https://www.spark946.org/about/join';

function getShareUrl() {
  return window.location.origin + window.location.pathname;
}

function getShareMessage({ includePageUrl = true } = {}) {
  const pageUrl = getShareUrl();
  const pageUrlBlock = includePageUrl ? `\n\n👆 웹에서 자세히 보기: ${pageUrl}` : '';

  return `🕊️ 81년 만에 한국원폭 피해자들이 미국에 책임을 묻습니다

서울 원폭국제민중법정
- 2026년 11월 13일(금)~15일(일), 한신대 신학대학원 채플홀(서울 수유리)
- 한국·일본·콩고·마셜제도 등 핵 피해자 증언과 국제법 심리
- 마지막 날 예비판결과 권고 발표${pageUrlBlock}

핵 없는 세계와 한반도 평화의 길에
평화와통일을여는사람들과 함께해 주세요.

🤝 회원가입: ${joinUrl}

#원폭국제민중법정 #원폭피해자 #핵무기금지조약 #한반도평화 #평통사`;
}

function openPopup(url, width = 640, height = 640) {
  window.open(url, '_blank', `noopener,noreferrer,width=${width},height=${height}`);
}

function shareTelegram() {
  const url = `https://t.me/share/url?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(getShareMessage({ includePageUrl: false }))}`;
  openPopup(url, 640, 520);
}

async function nativeShare() {
  const shareData = {
    title: siteTitle,
    text: getShareMessage()
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error && error.name === 'AbortError') return;
    }
  }

  copyShareMessage('카톡/문자 공유가 지원되지 않아 공유문구를 복사했습니다.');
}

function copyShareMessage(customMessage) {
  const text = getShareMessage();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => showToast(customMessage || '공유문구가 복사되었습니다.'))
      .catch(() => fallbackCopy(text, customMessage || '공유문구가 복사되었습니다.'));
  } else {
    fallbackCopy(text, customMessage || '공유문구가 복사되었습니다.');
  }
}

function fallbackCopy(text, customMessage) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(customMessage || '링크가 복사되었습니다.');
  } catch (error) {
    showToast('복사에 실패했습니다. 주소창의 링크를 복사해 주세요.');
  }
  document.body.removeChild(textarea);
}

function showToast(message) {
  const oldToast = document.querySelector('.toast');
  if (oldToast) oldToast.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2400);
}
