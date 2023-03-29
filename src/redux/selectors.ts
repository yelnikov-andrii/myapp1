import { createSelector } from 'reselect';
import { Good, IntState } from '../redux/store';

export const selectGoods = ((state: IntState) => state.goods.goods);
export const selectQuery = ((state: IntState) => state.goods.searchQuery);
export const selectAll = ((state: IntState) => state.goods);

export const selectFilteredGoods = createSelector(
  [selectGoods, selectQuery],
  (goods, query) => {
    if (!query) {
      return goods;
    } else {
      return goods.filter((good: Good) => good.title.toUpperCase().includes(query.toUpperCase()) || good.category.toUpperCase().includes(query.toUpperCase()));
    }
  }
)