
// 实现 Replace<S, From, To> 在给定字符串 S 中将字符串 From 替换为 To 一次
// https://github.com/type-challenges/type-challenges/blob/master/questions/116-medium-replace/README.md

type Replace<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : S

// 模版字面量
type Email = "qq" | "gmail";

type Animals = "cat" | "dog";

type test = string | number

type test2 = `${test}_id`

type Res1 = `${Email | Animals}_id`

type Res2 = `${Email | Animals}_id`;

type Lang = "en" | "ja" | "pt";

type LocaleMessageIDs = `${Lang}_${Res2}`;


