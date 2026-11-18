/**
 * The 1-based `aria-rowindex` of an emoji row, counting the header row of its
 * category and of every earlier category.
 */
export function getEmojiRowAriaIndex(rowIndex: number, categoryIndex: number) {
  return rowIndex + categoryIndex + 2;
}
