function doGet (e) {
  // パラメータを取得
  var param = e.parameter;
  
  // 「英語 -> 日本語」 へ設定
  var translatedText = LanguageApp.translate(param.text, 'en', 'ja');
  
  // テキストデータだけ返す
  return ContentService.createTextOutput(translatedText);
}