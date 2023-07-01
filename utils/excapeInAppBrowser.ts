export function excapeInAppBrowser(targetUrl: string) {
  if (typeof window === "undefined") return;

  console.log("");
  console.log("[window ready] : [start]");
  console.log("");

  // [현재 접속된 url 정보 및 접속 브라우저 확인]
  // [카카오톡 인앱 브라우저 >> 안드로이드 모바일 기종 인 경우 >> 크롬 브라우저 이동 실시]
  const Url = window.location.href;
  const Agent = navigator.userAgent.toLowerCase();
  console.log("");
  console.log(`[window ready] : [접속 Url] : ${Url}`);
  console.log(`[window ready] : [접속 Agent] : ${Agent}`);
  console.log("");

  // if (Agent.includes("kakao")) { // 카카오, 인스타 인앱 브라우저로 실행 시킨 경우
  if (Agent.indexOf("instagram") > -1) {
    // 먼저, 카카오 인앱 브라우저 닫기
    // if (Agent.includes("kakao")) {
    //   window.location.href = "kakaotalk://inappbrowser/close";
    // }
    // // 인스타 인앱 브라우저 닫기
    if (Agent.includes("instagram")) {
      window.location.href = "instagram://inappbrowser/close";
    }
    if (navigator.userAgent.match(/iPhone|iPad/i)) {
      // 아이폰 접속 경우
      console.log("");
      // eslint-disable-next-line no-useless-concat
      console.log("[window ready] : [접속 모바일] : " + "[아이폰]");
      console.log("");
      const useragt = navigator.userAgent.toLowerCase();

      // if (useragt.match(/kakaotalk/i)) {
      //   window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(
      //     targetUrl
      //   )}`;
      // }
      if (useragt.match(/instagram/i)) {
        window.location.href = `googlechrome://${encodeURIComponent(
          targetUrl
        )}`;
        return;
      }
    } else {
      // 안드로이드 접속 경우
      console.log("");
      // eslint-disable-next-line no-useless-concat
      console.log("[window ready] : [접속 모바일] : " + "[안드로이드]");
      console.log("");
      // 크롬으로 새창 열기
      window.location.href = `intent://${window.location.href.replace(
        /https?:\/\//i,
        ""
      )}#Intent;scheme=http;package=com.android.chrome;end`;
    }
  }
}
