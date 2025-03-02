/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export const enum SupportedEncoding {
  Cl100k = 0
}
export const enum SpecialTokenAction {
  /** The special token is forbidden. If it is included in the string, an error will be returned. */
  Forbidden = 0,
  /** The special token is tokenized as normal text. */
  NormalText = 1,
  /** The special token is treated as the special token it is. If this is applied to a specific text and the text is NOT a special token then an error will be returned. If it is the default action no error will be returned, don't worry. */
  Special = 2
}
export function getTokenizer(): Tokenizer
export class Tokenizer {
  exactNumTokensCl100KNoSpecialTokens(text: string): Promise<number>
  exactNumTokens(text: string, encoding: SupportedEncoding, specialTokenDefaultAction: SpecialTokenAction, specialTokenOverrides: Record<string, SpecialTokenAction>): Promise<number>
  encodeCl100KNoSpecialTokens(text: string): Promise<Array<number>>
  approxNumTokens(text: string, encoding: SupportedEncoding): Promise<number>
  encode(text: string, encoding: SupportedEncoding, specialTokenDefaultAction: SpecialTokenAction, specialTokenOverrides: Record<string, SpecialTokenAction>): Promise<Array<number>>
  encodeSingleToken(bytes: Uint8Array, encoding: SupportedEncoding): Promise<number>
  decodeCl100K(encodedTokens: Array<number>): Promise<string>
}
export class SyncTokenizer {
  constructor()
  approxNumTokens(text: string, encoding: SupportedEncoding): number
}
