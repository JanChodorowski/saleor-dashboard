import { deleteGiftCard, getGiftCardsWithTag } from "../apiRequests/giftCards";

export function deleteGiftCardsWithTagStartsWith(tag) {
  getGiftCardsWithTag(100, tag).then(resp => {
    const giftCardArray = resp.body.data.giftCards;
    if (giftCardArray) {
      giftCardArray.edges.forEach(element => {
        deleteGiftCard(element.node.id);
      });
    }
  });
}
