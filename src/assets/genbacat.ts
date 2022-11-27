export const getGenbacat = (text: string) => {
       return hukidashi(text || '･･･ヨシ！') + genbacat
}

const hukidashi = (text: string) => {
       return `
＿人人人人人人＿
＞  ${text}  ＜
￣Y^Y^Y^Y^Y￣
`
}

const genbacat = `
       ∧    /ヽ
      /／￣￣＼|
     ∠＿╋＿＿＿〉
    / ① 八 ① ヽ ＿
   工ﾆf(_人_)ｴ二|′)ヽ
    ＼ヽヽノノ ノ ヘ |
⊂⌒)_＞―――′イ (＿)
  \`ー､_ノ/￣ヽ  ｜
     ＿|｜   |  ｜
    (   人＿ノ  Λ
     ＼ス￣￣ﾚ-Λ ＼
    (￣  )  / /  ＼ﾉ＼
     ￣￣  (  ヽ   ＼_)
            ＼ノ`
