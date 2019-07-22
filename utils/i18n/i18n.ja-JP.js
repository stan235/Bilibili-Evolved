const not = true;
export const map = new Map([
  [`主站`, `ホーム`],
  [`画友`, `アルバム`],
  [`音频`, `音楽`],
  [`游戏中心`, `ゲーム`],
  [`会员购`, `会員購`],
  [`下载APP`, `アプリ`],
  [`会员`, `会員`],
  [`大会员`, `大会員`],
  [`小会员`, `小会員`],
  [`未登录`, `未登録`],
  [`注册会员`, `登録会員`],
  [`正式会员`, `正式会員`],
  [`年度大会员`, `年度大会員`],
  [`年度小会员`, `年度小会員`],
  [`消息`, `通知`],
  [`动态`, `情報`],
  [`动态首页`, `情報ホーム`],
  [`发布动态`, `情報発表`],
  [`稍后再看`, `後で見る`],
  [`收藏`, `お気に入り`],
  [`更多`, `もっと`],
  [`排行`, `ランキング`],
  [`图片`, `画像`],
  [`视频`, `動画`],
  [`番剧`, `番組`],
  [`音乐`, `音楽`],
  [`时尚`, `潮流`],
  [`电影`, `劇場`],
  [`影视`, `映画`],
  [`特摄`, `特撮`],
  [`学习`, `勉強`],
  [`放映厅`, `映画館`],
  [`广告`, `広告`],
  [`广场`, `広場`],
  [`发布`, `発表`],
  [`举报`, `報告`],
  [`首页`, `ホーム`],
  [`热门`, `人気`],
  [`周一`, `月`],
  [`周二`, `火`],
  [`周三`, `水`],
  [`周四`, `木`],
  [`周五`, `金`],
  [`周六`, `土`],
  [`周日`, `日`],
  [`今天`, `今日`],
  [`昨天`, `昨日`],
  [`近1周`, `1週間`],
  [`1周前`, `1週前`],
  [`发送`, `送信`],
  [`取消`, `キャンセル`],
  [`关闭`, `閉じる`],
  [`表情`, `スタンプ`],
  [`小视频`, `ミニ動画`],
  [`短视频`, `ミニ動画`],
  [`查看更多`, `もっと見る`],
  [`显示更多`, `もっと見る`],
  [`浏览更多`, `もっと見る`],
  [`了解更多`, `もっと詳しく`],
  [`查看全部`, `すべて見る`],
  [`所有关注`, `すべでのフォロー`],
  [`进入专栏区`, `コラム区に入る`],
  [`暂时没有新动态了哦！`, `暫く新しい情報がないよ`],
  [`播放历史`, `再生履歴`],
  [`暂停记录历史`, `再生履歴機能を一時停止`],
  [`啊叻？你要暂停历史记录功能吗？`, `あれー？再生履歴機能を一時停止しますか？`],
  [`确定暂停`, `一時停止`],
  [`清空历史`, `すべての再生履歴を削除`],
  [`已看完`, `読み終えた`],
  [`一键清空`, `すべてを削除`],
  [`移除已观看视频`, `視聴済み動画を削除`],
  [`已观看`, `視聴済み`],
  [`删除`, `削除`],
  [`确认`, `確認`],
  [`添加`, `追加`],
  [`编辑`, `変更`],
  [`取消关注`, `フォロー解除`],
  [`全部`, `すべて`],
  [`投稿视频`, `投稿動画`],
  [`合作视频`, `協力動画`],
  [`公告栏`, `掲示板`],
  [`新闻公告`, `ニュース`],
  [`正在直播`, `配信中`],
  [`虚拟主播`, `Vtuber`],
  [`设置`, `設定`],
  [`频道`, `チャンネル`],
  [`标签`, `タグ`],
  [`关注`, `フォロー`],
  [`关注数`, `フォロー数`],
  [`粉丝`, `ファン`],
  [`粉丝数`, `ファン数`],
  [`阅读数`, `閲覧数`],
  [`阅读量`, `閲覧数`],
  [`相簿`, `アルバム`],
  [`我的频道`, `私のチャンネル`],
  [`我的视频`, `私の動画`],
  [`我的音频`, `私の音楽`],
  [`我的音乐`, `私の音楽`],
  [`我的专栏`, `私のコラム`],
  [`我的相簿`, `私のアルバム`],
  [`我的粉丝`, `私のファン`],
  [`我的消息`, `DM`],
  [`我的收藏`, `私のお気に入り`],
  [`我的订阅`, `私の購読`],
  [`系统通知`, `システム`],
  [`全部直播`, `すべで`],
  [`游戏直播`, `オンライン`],
  [`网游直播`, `オンライン`],
  [`网游`, `オンライン`],
  [`网络游戏`, `オンライン`],
  [`手游直播`, `モバイル`],
  [`手游`, `モバイル`],
  [`手机游戏`, `モバイルゲーム`],
  [`单机`, `ビデオゲーム`],
  [`单机游戏`, `ビデオゲーム`],
  [`娱乐直播`, `エンタメ`],
  [`电台直播`, `ラジオ`],
  [`电台`, `ラジオ`],
  [`绘画直播`, `絵画`],
  [`绘画`, `絵画`],
  [`哔考`, `勉強`],
  [`热门话题`, `人気話題`],
  [`人气排行`, `人気ランキング`],
  [`我关注的话题`, `注目した話題`],
  [`前往TA的直播间`, `配信ルームへ移動`],
  [`进入直播间`, `配信ルームに入る`],
  [`直播持续时间`, `配信の持続時間`],
  [`今天你想了解什么呢？(☆▽☆)`, `今日何を知りたいですか(☆▽☆)`],
  [`Ta还没有应援的友爱社喔 (ಥ_ಥ)`, `彼はまだ「応援社」にいないよ(ಥ_ಥ)`],
  [`请输入弹幕 DA☆ZE～`, `弾幕を入力してください( •̀ ω •́ )✧`],
  [`有什么想和大家分享的？`, `何をみんなと共有したいのですか`],
  [`有新动态，点击查看`, `新しい情報がある、クリックして見る`],
  [`以上为热门评论，`, `以上が人気コメント`],
  [`请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。`, `インターネット関連のポリシーや規制を意識的に遵守し、ポルノ・暴力・反動的な発言を厳禁してください。`],
  [`点击查看`, `クリックして見る`],
  [`刚刚`, `さっき`],
  [`转发动态`, `転載`],
  [`分享动态`, `シェア`],
  [`转发`, `転載`],
  [`赞`, `いいね`],
  [`好评`, `いいね`],
  [`支持一下`, `いいね`],
  [`重播`, `再放送`],
  [`投币`, `コインを投げる`],
  [`同时点赞内容`, `同時に好評`],
  [`添加到收藏夹`, `お気に入りに追加`],
  [`投稿了`, `投稿した`],
  [`参与创作了`, `創作に参加した`],
  [`动态首页`, `情報ホーム`],
  [`历史动态`, `情報履歴`],
  [`活动作品`, `活動作品`],
  [`未经作者授权，禁止转载`, `作者の許可を得ずに転載を禁ずる`],
  [`未经作者授权 禁止转载`, `作者の許可を得ずに転載を禁ずる`],
  [`上一帧`, `前のフレーム`],
  [`下一帧`, `次のフレーム`],
  [`人正在看`, `人が見ている`],
  [`条实时弹幕`, `条の弾幕`],
  [`开启弹幕`, `弾幕を開ける`],
  [`显示弹幕`, `弾幕を表示する`],
  [`关闭弹幕`, `弾幕を閉じる`],
  [`隐藏弹幕`, `弾幕を隠す`],
  [`发个友善的弹幕见证当下`, `友好的な弾幕を送ってみよう(ง •_•)ง`],
  [`发个弹幕见证当下`, `弾幕を送ってみよう`],
  [`弹幕礼仪`, `弾幕エチケット`],
  [`追番`, `番組を購読`],
  [`已追番`, `購読中`],
  [`标记为 想看`, `「見たい」としてマーク`],
  [`想看`, `見たい`],
  [`标记为 在看`, `「見ている」としてマーク`],
  [`在看`, `見ている`],
  [`标记为 已看`, `「見た」としてマーク`],
  [`标记为 看过`, `「見た」としてマーク`],
  [`看过`, `見た`],
  [`取消追番`, `購読を取り消し`],
  [`追剧`, `ドラマを購読`],
  [`已追剧`, `購読中`],
  [`取消追剧`, `購読を取り消し`],
  [`取消订阅`, `購読を解除`],
  [`用手机观看`, `携帯で見る`],
  [`用手机看`, `携帯で見る`],
  [`稿件投诉`, `作品報告`],
  [`充电`, `充電`],
  [`为TA`, `彼に`],
  [`为TA充电`, `彼に充電`],
  [`充电设置`, `充電設定`],
  [`弹幕列表`, `弾幕リスト`],
  [`移动`, `移動`],
  [`保护`, `保護`],
  [`忽略`, `無視`],
  [`左舷弹幕太薄了，大家快来吐槽吧~`, `左舷、弾幕薄いぞ.皆さん、弾幕を送ってください!`],
  [`该视频弹幕为空`, `この動画には弾幕がありません`],
  [`屏蔽设定`, `ブロック設定`],
  [`屏蔽设置`, `ブロック設定`],
  [`屏蔽列表`, `ブロックリスト`],
  [`高级弹幕`, `高級弾幕`],
  [`时间`, `時刻`],
  [`弹幕内容 (`, `弾幕内容 ( `],
  [`发送时间`, `送信時刻`],
  [`屏蔽用户`, `ブロック`],
  [`屏蔽该弹幕的发送者`, `この弾幕の送信者をブロックする`],
  [`已屏蔽`, `ブロック`],
  [`查看历史弹幕`, `弾幕履歴を見る`],
  [`相关视频推荐`, `関連動画推薦`],
  [`相关推荐`, `関連推薦`],
  [`点评`, `採点`],
  [`评论`, `コメント`],
  [`设为置顶`, `トップに設定`],
  [`取消置顶`, `トップを取り消し`],
  [`没有更多信息`, `情報はもうありません`],
  [`新番时间表`, `番組時間表`],
  [`小黑屋`, `公開処刑`],
  [`摄影`, `撮影`],
  [`插画`, `イラスト`],
  [`其他`, `他の`],
  [`下载`, `ダウンロード`],
  [`更新了`, `更新した`],
  [`排行榜`, `ランキング`],
  [`推荐`, `推薦`],
  [`播放`, `再生`],
  [`播放数量`, `再生数`],
  [`自动`, `自動`],
  [`暂停`, `一時停止`],
  [`静音`, `消音`],
  [`取消静音`, `消音を解除`],
  [`弹幕`, `弾幕`],
  [`硬币`, `コイン`],
  [`宽屏模式`, `ワイドモード`],
  [`退出宽屏`, `ワイドモードを終了`],
  [`退出网页全屏`, `ウェブの全画面を終了`],
  [`退出全屏`, `全画面を終了`],
  [`进入全屏`, `全画面に入る`],
  [`全屏模式`, `全画面モード`],
  [`打开洗脑循环`, `サイクルを開く`],
  [`观看人数`, `観覧人数`],
  [`转载`, `転載`],
  [`展开`, `表示`],
  [`收起`, `非表示`],
  [`展开全部`, `フルテキスト`],
  [`展开全文`, `フルテキスト`],
  [`展开更多`, `フルテキスト`],
  [`收起全文`, `一部を表示`],
  [`已结束`, `終わり`],
  [`电视剧`, `ドラマ`],
  [`上一页`, `前へ`],
  [`下一页`, `次へ`],
  [`搜索`, `検索`],
  [`搜索视频`, `動画検索`],
  [`搜索音频`, `音楽検索`],
  [`搜索稿件`, `作品検索`],
  [`直播中`, `配信中`],
  [`等级`, `レベル`],
  [`个人中心`, `個人センター`],
  [`创作中心`, `創作センター`],
  [`直播中心`, `配信センター`],
  [`订单中心`, `受注センター`],
  [`B币钱包`, `ビリ财布`],
  [`B币`, `ビリコイン`],
  [`主页`, `ホーム`],
  [`排序`, `序列`],
  [`移除`, `削除`],
  [`复制`, `コピー`],
  [`换一换`, `更新`],
  [`特别推荐`, `特別推薦`],
  [`热门榜单`, `人気ランキング`],
  [`播放全部`, `すべて再生`],
  [`立即播放`, `すぐに再生`],
  [`自动播放`, `自動再生`],
  [`观看历史`, `視聴履歴`],
  [`个人收益`, `個人収益`],
  [`同时转发到我的动态`, `同時に転載する`],
  [`人气值`, `人気値`],
  [`友爱社`, `応援社`],
  [`我的友爱社`, `私の応援社`],
  [`话题`, `話題`],
  [`活动`, `活動`],
  [`活动中心`, `活動中心`],
  [`新闻`, `ニュース`],
  [`消息中心`, `ニュースセンター`],
  [`专栏投稿`, `コラム投稿`],
  [`音频投稿`, `音楽投稿`],
  [`视频投稿`, `動画投稿`],
  [`相簿投稿`, `アルバム投稿`],
  [`上传视频`, `アップロード`],
  [`退出登录`, `ログアウト`],
  [`回复我的`, `返信`],
  [`TA 的直播间`, `彼の配信ルーム`],
  [`TA 的小视频`, `彼のミニ動画`],
  [`TA的视频`, `彼の動画`],
  [`TA的音频`, `彼の音楽`],
  [`TA的专栏`, `彼のコラム`],
  [`TA的频道`, `彼のチャンネル`],
  [`TA的订阅`, `彼の購読`],
  [`TA的收藏夹`, `彼のお気に入り`],
  [`邮箱验证`, `メールアドレスの確認`],
  [`手机验证`, `電話番号の確認`],
  [`领取`, `受け取り`],
  [`确定`, `確定`],
  [`公开`, `表示`],
  [`隐藏`, `非表示`],
  [`搜索设置项`, `検索設定項目`],
  [`样式`, `スタイル`],
  [`工具`, `道具`],
  [`触摸`, `タッチスクリーン`],
  [`指定播放器布局`, `プレーヤーのレイアウト`],
  [`视频区布局`, `動画`],
  [`番剧区布局`, `番組`],
  [`使用默认播放器模式`, `プレーヤ・モード`],
  [`默认播放器模式`, `デフォルト・モード`],
  [`常规`, `標準`],
  [`宽屏`, `シアターモード`],
  [`网页全屏`, `ウェブの全画面`],
  [`全屏`, `全画面`],
  [`播放时应用模式`, `再生時に使う`],
  [`播放时自动关灯`, `再生時はライトを消す`],
  [`使用默认视频画质`, `映像画質`],
  [`画质设定`, `画質設定`],
  [`使用默认弹幕设置`, `弾幕設定`],
  [`记住弹幕设置`, `弾幕設定を覚える`],
  [`自动展开弹幕列表`, `弾幕リストを表示`],
  [`自动展开视频简介`, `動画概要欄を表示`],
  [`自动从历史记录点播放`, `視聴履歴から自動再生`],
  [`允许跨集跳转`, `クロスセットジャンプ`],
  [`自动播放视频`, `動画を自動再生`],
  [`跳过充电鸣谢`, `エンディングをスキップ`],
  [`启用逐帧调整`, `フレーム毎に調整`],
  [`启用视频截图`, `スクリーンショット`],
  [`视频截图`, `スクリーンショット`],
  [`截图`, `スクリーンショット`],
  [`自动定位到播放器`, `プレーヤー自動定位`],
  [`定位偏移量`, `位置オフセット`],
  [`外置稍后再看`, `外付け「後で見る」`],
  [`主题颜色`, `テーマカラー`],
  [`使用自定义顶栏`, `カスタム頂欄を使用する`],
  [`主题色填充`, `テーマ色で埋める`],
  [`填充其他顶栏`, `他の頂欄を埋める`],
  [`紧凑布局`, `コンパクトなレイアウト`],
  [`背景模糊`, `背景がぼやける`],
  [`模糊层不透明度`, `ぼかしの不透明度`],
  [`夜间模式`, `ダークテーマ`],
  [`夜间模式计划时段`, `ダークテーマ计画タイム`],
  [`起始时间`, `開始時刻`],
  [`结束时间`, `終了時刻`],
  [`首页使用紧凑布局`, `ホームページにコンパクトなレイアウトを使う`],
  [`简化评论区`, `コメントエリアの簡潔化`],
  [`简化直播间`, `配信ルームの簡潔化`],
  [`老爷图标`, `「老爷」アイコン`],
  [`粉丝勋章`, `ファン勲章`],
  [`活动头衔`, `活動肩書き`],
  [`用户等级`, `User Lv.`],
  [`舰长图标`, `「艦長」アイコン`],
  [`全区广播`, `全域放送`],
  [`欢迎信息`, `ウェルカムメッセージ`],
  [`礼物弹幕`, `ギフト弾幕`],
  [`上舰提示`, `艦長購入のヒント`],
  [`抽奖提示`, `抽選のヒント`],
  [`房间皮肤`, `特殊な背景`],
  [`隐藏顶部横幅`, `トップの横断幕を非表示`],
  [`播放器投影`, `プレーヤー投影`],
  [`强制保留弹幕栏`, `弾幕欄を強制保留する`],
  [`模糊视频控制栏背景`, `動画制御欄の背景がぼやける`],
  [`控制栏着色`, `制御欄に黒を付ける`],
  [`不透明度`, `不透過度`],
  [`缩放直播看板娘`, `配信ルームの看板娘をズーム`],
  [`删除直播水印`, `生放送透かしを削除`],
  [`删除视频标题层`, `動画・タイトル層を削除`],
  [`隐藏返回旧版`, `「返回旧版」を非表示`],
  [`隐藏番剧点评`, `番組の採点を隠す`],
  [`隐藏分区栏`, `エリア欄を隠す`],
  [`删除广告`, `広告を削除`],
  [`稍后再看重定向`, `後で見るの動画をリダイレクト`],
  [`收藏夹视频重定向`, `お気に入りの動画をリダイレクト`],
  [`隐藏搜索推荐`, `検索欄の推薦語を非表示`],
  [`展开动态标题`, `情報のタイトルを表示`],
  [`展开选集标题`, `エピソードのタイトルを表示`],
  [`显示失效视频信息`, `失効動画の情報を表示`],
  [`失效视频重定向`, `失効動画をリダイレクト`],
  [`信息来源`, `情報源`],
  [`BiliPlus跳转支持`, `BiliPlusをジャンプする`],
  [`高分辨率图片`, `高解像度画像`],
  [`旧版动态跳转支持`, `旧版の情報をジャンプする`],
  [`界面翻译`, `UI 翻訳`],
  [`语言`, `言語`],
  [`禁止直播首页自动播放`, `生放送のホームページの自動再生を禁止`],
  [`隐藏首页推荐直播`, `ホームページの推薦を隠した`],
  [`快速收起动态评论区`, `すぐにコメントを閉じる`],
  [`收起评论`, `コメントを閉じる`],
  [`顶栏触摸优化`, `頂欄にタッチ最適化を行う`],
  [`素质三连触摸支持`, `素質三連タッチサポート`],
  [`播放器触摸支持`, `プレーヤータッチサポート`],
  [`启用实验性动画效果`, `実験的動画効果`],
  [`启用双击控制`, `ダブルクリック制御`],
  [`显示消息`, `メッセージを表示`],
  [`显示内部错误消息`, `エラーメッセージを表示`],
  [`文件命名格式`, `ファイル命名形式`],
  [`侧栏垂直偏移量`, `設定ボタンの垂直オフセット`],
  [`新版本`, `新しいバージョン`],
  [`已发布.`, `がリリースされました.`],
  [`安装`, `インストール`],
  [`查看`, `見る`],
  [`检查更新`, `更新を確認する`],
  [`安装更新`, `更新をインストール`],
  [`查看更新`, `更新を見る`],
  [`启用缓存`, `キャッシュを有効にする`],
  [`附加功能`, `追加機能`],
  [`清除缓存`, `キャッシュを消去する`],
  [`转到BiliPlus`, `BiliPlusをジャンプ`],
  [`顶栏布局`, `頂欄のレイアウト`],
  [`搜索框`, `検索欄`],
  [`用户信息`, `個人情報`],
  [`投稿入口`, `投稿ページ入り口`],
  [`转到新版`, `新版レイアウトの情報`],
  [`回到旧版`, `旧版レイアウトの情報`],
  [`查看封面`, `サムネイルを見る`],
  [`复制原链接`, `リンクをコピーする`],
  [`复制链接`, `リンクをコピー`],
  [`在新标签页打开`, `新しいページで開く`],
  [`下载弹幕`, `弾幕をダウンロード`],
  [`下载视频`, `動画をダウンロード`],
  [`单个视频`, `シングル動画`],
  [`获取大小中`, `サイズを取得中`],
  [`获取大小失败`, `サイズを取得に失敗`],
  [`预计大小:`, `推定サイズ:`],
  [`警告: 过大的视频大小会在直接下载时占用大量内存, 并可能导致浏览器标签页崩溃. 请考虑降低清晰度或使用导出选项.`, `警告：動画サイズが大きすぎると、直接ダウンロードしたときに大量のメモリを占有する、ブラウザのタブがクラッシュする可能性があります.解像度を下げて、あるいはデータをエクスポートことを考えてください.`],
  [`清晰度`, `解像度`],
  [`直接下载`, `直接ダウンロード`],
  [`开始`, `開始`],
  [`导出`, `エクスポート`],
  [`导出aria2`, `aria2`],
  [`复制vld数据`, `vldをコピー`],
  [`导出vld数据`, `vld`],
  [`导出aria2 RPC`, `aria2 RPC`],
  [`批量导出`, `バッチエクスポート`],
  [`请至少选择1集或以上的数量!`, `少なくとも1つ以上のセットを選択してください!`],
  [`选集`, `エピソード`],
  [`全选`, `すべて選択`],
  [`全不选`, `すべて選択しない`],
  [`反选`, `逆選択`],
  [`下载音频`, `音楽をダウンロード`],
  [`更换勋章`, `勲章を入れ換える`],
  [`更换头衔`, `肩書きを入れ換える`],
  [`关于`, `About`],
  [`加载中...`, `ローディング中`],
  [`错误`, `エラー`],
  [`请求遭到拒绝,请检查您的密钥相关设置`, `要求は拒否されました、キーの関連設定を確認してください`],
  [`动画`, {
    selector: `.elevator-module .nav-list .item`,
    not,
    text: `アニメ`,
  }],
  [`舞蹈`, {
    selector: `.elevator-module .nav-list .item`,
    not,
    text: `ダンス`,
  }],
  [`专栏`, {
    selector: `.elevator-module .nav-list .item`,
    not,
    text: `コラム`,
  }],
  [`游戏`, {
    selector: `.elevator-module .nav-list .item`,
    not,
    text: `ゲーム`,
  }],
  [`直播`, {
    selector: `.elevator-module .nav-list .item`,
    not,
    text: `生放送`,
  }],
  [`数码`, {
    selector: `.elevator-module .nav-list .item`,
    not,
    text: `デジタル`,
  }],
  [`纪录片`, {
    selector: `.elevator-module .nav-list .item`,
    not,
    text: `ドキュメンタリー`,
  }],
  [`娱乐`, {
    selector: `.elevator-module .nav-list .item`,
    not,
    text: `エンタメ`,
  }],
  [`历史`, [
    `歴史`,
    {
      text: `履歴`,
      selector: `.nav-con.fr .nav-item .t, .custom-navbar li[data-name='historyList'] .main-content, .custom-navbar-settings .orders li`
    },
  ]],
  [`我的关注`, [
    `私のフォロー`,
    {
      text: `フォロー`,
      selector: `#page-follows .follow-sidenav .text`
    },
  ]],
  [`登录`, `ログイン`],
  [`注册`, `登録`],
  [`我的直播间`, `私の配信ルーム`],
  [`直播间`, `配信ルーム`],
  [`订阅`, `購読`],
  [`主站空间`, `個人センター`],
  [`播放数`, `再生数`],
  [`综合`, `総合`],
  [`用户`, `ユーザー`],
  [`投稿管理`, `投稿センター`],
  [`个人信息`, `個人情報`],
  [`开播设置`, `放送設定`],
  [`我的直播间地址`, `私の配信ルーム`],
  [`直播分类：`, `配信分類：`],
  [`选择分类`, `エリアを選択`],
  [`必须选择分类才能开播`, `生放送を開始するにはエリアを選択する必要があります`],
  [`修改分区`, `エリアを変更`],
  [`房间标题：`, `生放送タイトル：`],
  [`开始直播`, `配信を開始`],
  [`关闭直播`, `配信を中止`],
  [`主播公告`, `チャンネル公告`],
  [`简介`, `概要`],
  [`直播封面`, `配信サムネイル`],
  [`我的个人标签`, `私のタグ`],
  [`个人简介`, `個人紹介`],
  [`直播间信息`, `配信ルーム情報`],
  [`我的船员`, `私の船員`],
  [`直播数据`, `配信データ`],
  [`数据总览`, `データ統計`],
  [`直播时长`, `総配信時間`],
  [`最高人气值`, `最大人気値`],
  [`直播收益(金仓鼠)`, `生放送収益(ゴールデンハムスター)`],
  [`直播收益`, `生放送収益`],
  [`新增关注数`, `新しい登録者`],
  [`人均观看时长`, `平均視聴時間`],
  [`礼物流水`, `ギフト記録`],
  [`礼物统计`, `ギフト一覧`],
  [`消费排行`, `投げ銭ランキング`],
  [`更多>>`, `もっと>>`],
  [`主播`, `配信者`],
  [`未开播`, `待機中`],
  [`金瓜子`, `金ヒマワリの種`],
  [`银瓜子`, `銀ヒマワリの種`],
  [`残忍取关`, `フォロー解除`],
  [`再考虑一下`, `考え直す`],
  [`已关注`, `フォロー中`],
  [`七日榜`, `週間rank`],
  [`舰队`, `艦隊`],
  [`粉丝榜`, `ファンrank`],
  [`房管`, `管理者`],
  [`分享`, `共有`],
  [`轮播`, `再放送`],
  [`闲置`, `待機中`],
  [`回复`, `返信`],
  [`查看更多评论`, `もっとコメントを表示`],
  [`英雄联盟`, `LOL`],
  [`APEX英雄`, `Apex Legends`],
  [`守望先锋`, `Overwatch`],
  [`绝地求生`, `PUBG`],
  [`王者荣耀`, `伝説対決`],
  [`第五人格`, `Identity V`],
  [`绝地求生:刺激战场`, `PUBG Mobile`],
  [`崩坏3`, `崩壊3rd`],
  [`主机游戏`, `ホストゲーム`],
  [`我的世界`, `マイクラ`],
  [`怪物猎人:世界`, `モンハンワールド`],
  [`只狼：影逝二度`, `SEKIRO/隻狼`],
  [`鬼泣5`, `デビルメイクライ5`],
  [`视频唱见`, `歌ってみた`],
  [`舞见`, `踊ってみた`],
  [`视频聊天`, `ビデオチャット`],
  [`才艺`, `タレントショー`],
  [`唱见电台`, `歌見ラジオ`],
  [`声优`, `声優`],
  [`聊天电台`, `チャットラジオ`],
  [`同人绘画`, `同人絵画`],
  [`原创绘画`, `オリジナル絵画`],
  [`临摹绘画`, `模写絵画`],
  [`其他绘画`, `他の絵`],
  [`扭蛋机`, `ガチャポン`],
  [`我关注的直播`, `フォローした配信`],
  [`我关注的动态`, `フォローした情報`],
  [`按热度排序`, `評価順`],
  [`按时间排序`, `時間順`],
  [`投稿时间排序`, `投稿時間順`],
  [`点击数排序`, `クリックの数順`],
  [`评论数排序`, `コメントの数順`],
  [`收藏数排序`, `お気に入りの数順`],
  [`弹幕数排序`, `弾幕の数順`],
  [`全部评论`, `すべてのコメント`],
  [`发消息`, `DMを送る`],
  [`点赞`, `いいね!`],
  [`发表评论`, `コメント`],
  [`你的rtmp地址：`, `サーバー：`],
  [`你的直播码：`, `ストリームキー：`],
  [`颜值领域专属封面`, `顔出し用サムネ`],
  [`私信存档`, `DMアーカイブ`],
  [`历史私信`, `昔のDM`],
  [`用户中心`, `個人センター`],
  [`我的信息`, `個人情報`],
  [`领取奖励`, `受け取り`],
  [`关注直播间`, `フォロー`],
  [`加入黑名单`, `ブロックする`],
  [`悄悄关注`, `非公開フォロー`],
  [`个人信息举报`, `通報する`],
  [`观众分析`, `視聴者分析`],
  [`游客分析`, `ゲスト分析`],
  [`粉丝分析`, `ファン分析`],
  [`游客基本属性`, `ゲスト基本属性`],
  [`性别占比`, `性別割合`],
  [`观众年龄`, `年齢割合`],
  [`观看途径`, `端末割合`],
  [`消息设置`, `通知設定`],
  [`消息提醒样式`, `通知様式`],
  [`（不含应援团）`, `（応援社は除外）`],
  [`红点`, `赤い点`],
  [`不提醒`, `通知しない`],
  [`推荐位申请`, `推薦枠申し込み`],
  [`直播看板娘`, `配信マスコート`],
  [`收到的赞`, `いいね！`],
  [`首页管理`, `ホーム`],
  [`内容管理`, `コンテンツ`],
  [`视频管理`, `動画管理`],
  [`专栏管理`, `コラム管理`],
  [`音频管理`, `音楽管理`],
  [`相簿管理`, `アルバム管理`],
  [`你还没有投过一个稿件("▔□▔)`, `あなたはまだ作品を投稿していません("▔□▔)`],
  [`数据`, `データ`],
  [`编辑稿件`, `作品を修正`],
  [`（单次最多允许上传100p视频，推荐采用mp4、flv格式，可有效缩短审核转码耗时）`, `（最大100pの動画を一度にアップロードできますが、監査やトランスコードにかかる時間を短縮するために、「MP4」や「FLV」形式を使用することをお勧めします）`],
  [`上传完成`, `アップロード完成`],
  [`添加视频`, `動画を追加`],
  [`视频封面设置`, `動画のサムネイルを設置`],
  [`（格式jpeg、png，文件大小≤5MB，建议尺寸≥1146*717，最低尺寸≥960*600）`, `（形式はjpeg/png、ファイルサイズ≤5MB、推奨サイズ≥1146*717、最小サイズ≥960*600）`],
  [`类型`, `タイプ`],
  [`分区`, `エリア`],
  [`全部分区`, `すべてのエリア`],
  [`热门分区`, `人気のエリア`],
  [`标题`, `タイトル`],
  [`更多选项`, `その他のオプション`],
  [`定时发布`, `定時発表`],
  [`立即投稿`, `すぐに投稿`],
  [`分享投稿`, `作品を共有`],
  [`编辑记录`, `修正記録`],
  [`删除稿件`, `作品を削除`],
  [`数据中心`, `データ管理`],
  [`粉丝管理`, `ファン管理`],
  [`互动管理`, `インタラクティブ`],
  [`评论管理`, `コメント管理`],
  [`弹幕管理`, `弾幕管理`],
  [`收益管理`, `収益管理`],
  [`创作激励`, `創作激励`],
  [`充电计划`, `充電プラン`],
  [`悬赏计划`, `報酬プラン`],
  [`创作学院`, `創作学院`],
  [`个人设置`, `個人設定`],
  [`申诉管理`, `アピール管理`],
  [`你的手机号/邮箱`, `あなたの携帯電話番号/メール`],
  [`密码`, `アカウントパスワード`],
  [`签到`, `ログボ`],
  [`使用默认播放速度`, `デフォルトの再生速度を使用する`],
  [`默认播放速度`, `デフォルトの再生速度`],
  [`*`, [
    {
      selector: `.gui-settings-widgets-box .widgets-container .empty-tip`,
      text: `何もないよ =￣ω￣=`,
    },
    {
      selector: `.custom-navbar-settings .paddings-desc`,
      text: `エッジの間隔：両側のエッジの間隔をパーセントで設定します.100％は頂欄全体の幅です.許容設定範囲は0％〜40％です.`,
    },
    {
      selector: `.custom-navbar-settings .orders-desc`,
      text: `順序と表示：左側の棒状アイコン上でドラッグすると順序が変更されるか、名前を押しながらドラッグすることで順序を変更することができます。右側の目のアイコンをクリックすると表示され、非表示になります.`,
    },
    /* CSS translation here */

  ]],
]);
export const regex = new Map([
  [/^浏览：([0-9\.a-z]+)$/, `閲覧：$1`],
  [/^收藏：([0-9\.a-z]+)$/, `お気に入り：$1`],
  [/^支持：([0-9\.a-z]+)$/, `いいね：$1`],
  [/^共([\d]+)页$/, `全部で $1 ページ`],
  [/^小视频 ([\d]+)$/, `ミニ動画 $1`],
  [/^相簿 ([\d]+)$/, `アルバム $1`],
  [/^在线人数：([\d]+)$/, `オンライン：$1`],
  [/^([\d]+)[ ]?分钟前$/, `$1 分前`],
  [/^([\d]+)[ ]?小时前$/, `$1 時間前`],
  [/^([\d\.万]+)播放/, `$1 視聴`],
  [/^([\d\.万]+)弹幕$/, `$1 弾幕`],
  [/^([\+]?[ ]?)关注([：]?[:]?[ ]?)([\d]+)?$/, `$1フォロー$2$3`],
  [/^关注([ ])([\d\.万]+)$/, `フォロー$1$2`],
  [/^上传时间：([\d])/, `アップロード時間：$1`],
  [/^粉丝([：]?[:]?[ ]?)$/, `ファン$1`],
  [/^@([ ]?)我的$/, `私に$1＠`],
  [/^TA([ ]?)的相簿$/, `彼の$1アルバム`],
  [/^([\d]+)硬币$/, `$1コイン`],
  [/^阅读([：]?[:]?[ ]?)$/, `閲覧$1`],
  [/^弹性空白([\d])/, `弾力空白$1`],
  [/^金仓鼠([ ]?[:]?)$/, `ゴールデンハムスター$1`],
  [/^贝壳([ ]?[:]?)$/, `貝殻$1`],
  [/^点赞数([\d]+)$/, `「いいね」の人数 $1`],
  [/^投硬币枚数([\d]+)$/, `「コイン」の数 $1`],
  [/^收藏人数([\d]+)$/, `「お気に入り」の人数 $1`],
  [/^热门直播([:]?)$/, `人気生放送$1`],
  [/^热门活动([:]?)$/, `人気活動$1`],
  [/^全部稿件 \(([\d]+)\)$/, `すべての作品 ($1)`],
  [/^进行中 \(([\d]+)\)$/, `進行中 ($1)`],
  [/^已通过 \(([\d]+)\)$/, `パスした ($1)`],
  [/^未通过 \(([\d]+)\)$/, `失敗した ($1)`],
  [/^创作团队（([\d]+)）$/, `創作チーム（$1）`],
  [/^共([\d]+)P$/, `合計$1P`],
  [/^高清 ([\d]+)P([60]?)([+])?$/, `HD $1P$2$3`],
  [/^清晰 ([\d]+)P$/, `クリア $1P`],
  [/^流畅 ([\d]+)P$/, `スムーズ $1P`],
  [/^无法连接到RPC主机,error=([\d]+)$/, `RPCホストに接続できません、error=$1`],
]);
export default {
  export: { map, regex },
};