/*
 * iframe 화면과 앱 셸을 연결하는 작은 이벤트 브리지입니다.
 * postMessage를 사용하므로 file:// 미리보기에서도 부모가 화면 전환을 받을 수 있습니다.
 */
const korean = new Map([
  ['Any skin concerns today?', '오늘 피부 고민이 있나요?'], ['Select all that apply.', '해당하는 항목을 모두 선택하세요.'],
  ['Dryness', '건조함'], ['Tightness', '당김'], ['Sensitivity', '민감함'], ['Redness', '붉어짐'], ['Acne', '트러블'], ['Dullness', '칙칙함'], ['Continue', '계속하기'],
  ['Allow water detection', '물소리 감지를 허용해 주세요'], ['Allow Microphone Access', '마이크 접근 허용'], ['Not now', '나중에 하기'],
  ['Shower Care listens to water sounds to track your duration. Audio is processed locally and is never recorded or stored.', '샤워 시간을 기록하기 위해 물소리만 감지합니다. 소리는 기기에서만 처리되며 녹음하거나 저장하지 않습니다.'],
  ['Automatic tracking is paused', '자동 기록이 일시 중지되었어요'], ['Shower Care needs microphone access to listen for water sounds and track your ritual. You can enable this anytime in your device settings.', '물소리를 감지하고 샤워 루틴을 기록하려면 마이크 권한이 필요합니다. 기기 설정에서 언제든 허용할 수 있어요.'], ['Open Settings', '설정 열기'], ['Try Again', '다시 시도'],
  ['Recommended: 8 min', '권장 시간 · 8분'], ['Start Shower', '샤워 시작'], ['Start Simulation', '시뮬레이션 시작'], ['Demo mode · tap to simulate', '데모 모드 · 탭하여 시뮬레이션'], ['Home', '홈'], ['History', '기록'], ['Settings', '설정'],
  ['Listening to water...', '물소리를 감지하고 있어요...'], ['End Shower', '샤워 마치기'], ['Ritual Complete', '샤워 루틴 완료'], ['A longer ritual today—perfect for a deep reset.', '오늘은 조금 길게 샤워했어요. 깊은 휴식에 딱 좋아요.'], ['Actual Session', '실제 샤워 시간'], ['Intended Ritual', '목표 샤워 시간'], ['Log how my skin feels', '샤워 후 피부 상태 기록하기'], ['Skip for now', '지금은 건너뛰기'],
  ['How does your skin feel right now?', '지금 피부 상태는 어떤가요?'], ['Save', '저장하기'], ['Skip', '건너뛰기'], ['Tight', '당김'], ['Dry', '건조함'], ['Sensitive', '민감함'], ['Itchy', '가려움'], ['Normal', '보통'], ['Great', '매우 좋아요']
]);

function translatePage() {
  document.documentElement.lang = 'ko';
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const source = node.nodeValue.trim();
    if (korean.has(source)) node.nodeValue = node.nodeValue.replace(source, korean.get(source));
  });
  document.querySelectorAll('[aria-label="Go back"]').forEach(element => element.setAttribute('aria-label', '뒤로 가기'));
}

translatePage();

document.addEventListener('click', (event) => {
  const control = event.target.closest('button, a, [role="button"], .cursor-pointer');
  if (!control) return;

  const buttons = [...document.querySelectorAll('button')];
  window.parent.postMessage({
    type: 'shower-care:action',
    control: {
      id: control.id || '',
      className: typeof control.className === 'string' ? control.className : '',
      text: (control.innerText || '').trim(),
      buttonIndex: buttons.indexOf(control)
    }
  }, '*');
});
