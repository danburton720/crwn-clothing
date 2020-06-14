import { createSelector } from 'reselect';

const selectBag = state => state.bag;

export const selectBagItems = createSelector(
    [selectBag],
    (bag) => bag.bagItems
);

export const selectBagHidden = createSelector(
    [selectBag],
    bag => bag.hidden
);

export const selectBagItemsCount = createSelector(
    [selectBagItems],
    bagItems =>
    bagItems.reduce(
        (accumulatedQuantity, bagItem) =>
            accumulatedQuantity + bagItem.quantity,
        0
    )
);

export const selectBagTotal = createSelector(
    [selectBagItems],
    bagItems =>
        bagItems.reduce(
            (accumulatedQuantity, bagItem) =>
                accumulatedQuantity + bagItem.quantity * bagItem.price,
            0
        )
)