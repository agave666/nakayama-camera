export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface StageData {
  id: number;
  title: string;
  photoPath: string;
  questions: QuizQuestion[];
  shootingMemo: string;
}

export const stagesData: StageData[] = [
  {
    id: 1,
    title: 'Photo 1',
    photoPath: '/photos/photo1.jpg',
    questions: [
      {
        question: '人物を魅力的に撮る際、最も重要な視線の向きは?',
        options: [
          'カメラを直視',
          'やや斜め上を見る',
          '完全に横を向く'
        ],
        correctIndex: 1,
        explanation: 'やや斜め上を見ることで、自然な表情と目の輝きが生まれます。'
      },
      {
        question: '顎の角度で印象を変えるには?',
        options: [
          '顎を引いてシャープに',
          '顎を上げて堂々と',
          '真正面から撮る'
        ],
        correctIndex: 0,
        explanation: '顎を少し引くことで、顔のラインがシャープになり、より魅力的な印象になります。'
      },
      {
        question: '体のひねりを加える理由は?',
        options: [
          '立体感と動きを出す',
          'カメラに正対させる',
          '背景を隠す'
        ],
        correctIndex: 0,
        explanation: '体を少しひねることで、平面的な写真に立体感と躍動感が生まれます。'
      },
      {
        question: '逆光での撮影のメリットは?',
        options: [
          '顔が暗くなる',
          '輪郭が柔らかく光る',
          '影が強調される'
        ],
        correctIndex: 1,
        explanation: '逆光では被写体の輪郭が美しく光り、柔らかく幻想的な雰囲気を作れます。'
      },
      {
        question: '背景を整理する「引き算」の考え方とは?',
        options: [
          '余計なものを避ける',
          'できるだけ多くを写す',
          'ボケを全く使わない'
        ],
        correctIndex: 0,
        explanation: '不要な要素を排除し、被写体に視線を集中させるのが引き算の基本です。'
      }
    ],
    shootingMemo: '視線・顎・体のひねりで立体感を。逆光で柔らかい雰囲気を演出し、背景はシンプルに。'
  },
  {
    id: 2,
    title: 'Photo 2',
    photoPath: '/photos/photo2.jpg',
    questions: [
      {
        question: '被写体との距離感で印象はどう変わる?',
        options: [
          '近いほど親密感が増す',
          '遠いほど迫力が出る',
          '距離は関係ない'
        ],
        correctIndex: 0,
        explanation: '被写体に近づくほど、親密で感情的な印象を与えることができます。'
      },
      {
        question: '標準レンズ（50mm前後）の特徴は?',
        options: [
          '自然な距離感と歪みの少なさ',
          '広角で全体を写す',
          '望遠で圧縮効果'
        ],
        correctIndex: 0,
        explanation: '標準レンズは人間の視野に近く、自然で歪みの少ない写真が撮れます。'
      },
      {
        question: '光の向きで表情を変えるには?',
        options: [
          'サイドから当てる',
          '真上から当てる',
          '下から当てる'
        ],
        correctIndex: 0,
        explanation: 'サイド光は陰影を作り、立体的で印象的な表情を演出できます。'
      },
      {
        question: 'ポートレートで背景をぼかす理由は?',
        options: [
          '被写体を際立たせる',
          'カメラの性能を見せる',
          '撮影を簡単にする'
        ],
        correctIndex: 0,
        explanation: '背景をぼかすことで、被写体に視線が集中し、印象的な写真になります。'
      },
      {
        question: '構図で「三分割法」を使う意義は?',
        options: [
          'バランスの取れた配置',
          '被写体を中央に置く',
          'ランダムな配置'
        ],
        correctIndex: 0,
        explanation: '画面を三分割し、交点に被写体を配置することで、自然で美しい構図になります。'
      }
    ],
    shootingMemo: '適切な距離感と標準レンズで自然に。サイド光で立体感、背景ぼかしで主役を際立たせる。'
  },
  {
    id: 3,
    title: 'Photo 3',
    photoPath: '/photos/photo3.jpg',
    questions: [
      {
        question: '手の配置で印象を変えるには?',
        options: [
          '顔周りに添える',
          '完全に隠す',
          '体の後ろに回す'
        ],
        correctIndex: 0,
        explanation: '手を顔周りに自然に添えることで、優雅さと親しみやすさが生まれます。'
      },
      {
        question: '表情を引き出すコミュニケーションは?',
        options: [
          '会話しながら自然に',
          '完全に無言で',
          '命令口調で指示'
        ],
        correctIndex: 0,
        explanation: 'リラックスした会話の中で撮影することで、自然な表情が生まれます。'
      },
      {
        question: '目の輝きを出すには?',
        options: [
          'キャッチライトを入れる',
          '完全に影にする',
          'フラッシュを直射'
        ],
        correctIndex: 0,
        explanation: '瞳にキャッチライト（反射光）を入れることで、目が輝いて見えます。'
      },
      {
        question: '色温度の調整で雰囲気を変えるには?',
        options: [
          '暖色で温かく、寒色でクール',
          'すべて自動設定',
          '常にモノクロ'
        ],
        correctIndex: 0,
        explanation: '色温度を調整することで、暖かみやクールさを演出できます。'
      },
      {
        question: '連写とシャッタータイミングの使い分けは?',
        options: [
          '動きは連写、静止は1枚',
          'すべて連写',
          'すべて1枚撮り'
        ],
        correctIndex: 0,
        explanation: '動きのある場面は連写で、静止した表情は慎重に1枚ずつ撮ると良いです。'
      }
    ],
    shootingMemo: '手の配置と会話でリラックス。キャッチライトで目に輝きを、色温度で雰囲気をコントロール。'
  },
  {
    id: 4,
    title: 'Photo 4',
    photoPath: '/photos/photo4.jpg',
    questions: [
      {
        question: 'ローアングルで撮影する効果は?',
        options: [
          '脚が長く見える',
          '顔が大きく見える',
          '背景が消える'
        ],
        correctIndex: 0,
        explanation: 'ローアングルは脚を長く見せ、ダイナミックな印象を与えます。'
      },
      {
        question: '髪の流れを美しく撮るには?',
        options: [
          '風や動きを利用',
          '完全に固定する',
          '切り取る'
        ],
        correctIndex: 0,
        explanation: '風や動きで髪に流れを作ると、躍動感と美しさが生まれます。'
      },
      {
        question: '衣装の色選びで背景との関係は?',
        options: [
          '補色で目立たせる',
          '同色で馴染ませる',
          '色は無視する'
        ],
        correctIndex: 0,
        explanation: '背景と補色関係の衣装を選ぶと、被写体が際立ちます。'
      },
      {
        question: 'フレーミングで余白を作る意味は?',
        options: [
          '視線の抜けと余裕',
          '無駄なスペース',
          '画像のトリミング用'
        ],
        correctIndex: 0,
        explanation: '適度な余白は視線の抜けを作り、写真に余裕と品格を与えます。'
      },
      {
        question: 'シルエット撮影の魅力は?',
        options: [
          '想像力を掻き立てる',
          '顔がわからない',
          '失敗を隠せる'
        ],
        correctIndex: 0,
        explanation: 'シルエットは輪郭だけを見せ、見る人の想像力を刺激します。'
      }
    ],
    shootingMemo: 'ローアングルで脚長効果。風で髪に流れ、補色で際立たせ、余白で品格を。シルエットで想像力を。'
  },
  {
    id: 5,
    title: 'Photo 5',
    photoPath: '/photos/photo5.jpg',
    questions: [
      {
        question: '動画撮影で動きを捉えるコツは?',
        options: [
          'スムーズなカメラワーク',
          '完全に固定',
          '激しく揺らす'
        ],
        correctIndex: 0,
        explanation: 'スムーズなカメラワークで、被写体の動きを自然に追うことが重要です。'
      },
      {
        question: 'フレームレートの選択は?',
        options: [
          '24fps で映画的に',
          '5fps で静止画風',
          '120fps で常時スロー'
        ],
        correctIndex: 0,
        explanation: '24fpsは映画のような滑らかで映画的な動きを再現できます。'
      },
      {
        question: '動画での光の安定性は?',
        options: [
          '一定の光を保つ',
          'ランダムに変える',
          '完全に暗くする'
        ],
        correctIndex: 0,
        explanation: '動画では光が急激に変わると不自然なので、一定の光を保つことが大切です。'
      },
      {
        question: '音声収録の重要性は?',
        options: [
          '雰囲気を大きく左右',
          '不要',
          '後から追加すればいい'
        ],
        correctIndex: 0,
        explanation: '動画では音声が雰囲気を大きく左右するので、クリアな音声収録が重要です。'
      },
      {
        question: '動画編集でのリズムは?',
        options: [
          'カット割りで調整',
          '全て同じ長さ',
          'ランダムに切る'
        ],
        correctIndex: 0,
        explanation: 'カット割りのリズムを調整することで、動画全体の印象をコントロールできます。'
      }
    ],
    shootingMemo: 'スムーズなカメラワークと24fpsで映画的に。一定の光とクリアな音声、リズミカルなカット割り。'
  }
];
