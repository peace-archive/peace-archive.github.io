// 평화자료실 웹툰 (세로 스크롤 + 공유)
const siteTitle = '한국의 핵잠수함 도입, 무엇을 위한 걸까요?';
const siteDescription = '아빠와 딸의 대화로 풀어보는 핵추진잠수함 이야기 · 비용부터 명분과 용도까지';

function getShareUrl() {
  return window.location.origin + window.location.pathname;
}

function getShareMessage({ includePageUrl = true } = {}) {
  const pageUrl = getShareUrl();
  const pageUrlBlock = includePageUrl ? `${pageUrl}\n` : '';

  return `${pageUrlBlock}[웹툰으로 만나는 핵잠수함 이야기]
한국의 핵잠수함 도입, 무엇을 위한 것일까요?`;
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
