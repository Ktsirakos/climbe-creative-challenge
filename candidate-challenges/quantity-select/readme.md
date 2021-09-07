# Styling challenge

Your ability to replicate UIs, manage ui state effectively, and component architecture will be tested during this challenege.

The challenge is to build a quantity select component. To complete this challenege, you may use any technologies you wish.

Designs can be found in the root of this folder. The name of the desgin file is design.xd
You may amend the UX of the provided design if you have a better solution. 
If you make changes that divert from the design, please add notes explaining why.

Below is an example response along with types that may help you with this challenege.


types:
```
type quantityResponseMeta {
    taxable: boolean,
    currencyCode: string,
    count: number,
}

type quantityWithPrice {
    quantity: number,
    exTaxPrice: string,
    incTaxPrice: string,
}

type quantityResponse {
    meta: quantityResponseMeta,
    data: quantityWithPrice[],
}
```

Example response from: `${api_url}/product-options/quantity

```
const response: quantityResponse = {
    meta: {
        taxable: true,
        currencyCode: "GBP",
        count: 5
    }
	data: [
        {
            quantity: 10,
            exTaxPrice: "10.00",
            incTaxPrice: "12.00",
            tax: "2.00"
        },
        {
            quantity: 20,
            exTaxPrice: "18.00",
            incTaxPrice: "21.60",
            tax: "3.60"
        },
    ]
}
```
