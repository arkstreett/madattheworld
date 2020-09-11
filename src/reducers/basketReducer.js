import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        YungLeanPoster: {
            name: "Yung Lean Poster",
            tagName: 'YungLeanPoster',
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        FuturePoster: {
            name: "Future Hendrixx Poster",
            tagName: 'FuturePoster',
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        DrakeoPoster: {
            name: "Drakeo Poster",
            tagName: 'DrakeoPoster',
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        PostPoster: {
            name: "Post Malone Poster",
            tagName: 'PostPoster',
            price: 35.00,
            numbers: 0,
            inCart: false
        },
        ThugPoster: {
            name: "Young Thug Poster",
            tagName: 'ThugPoster',
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        FrankPoster: {
            name: "Frank Ocean Poster",
            tagName: 'FrankPoster',
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        DuggPoster: {
            name: "42 Dugg Poster",
            tagName: 'DuggPoster',
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        BrentPoster: {
            name: "Brent Faiyaz Poster",
            tagName: "BrentPoster",
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        UziPoster: {
            name: "Lil Uzi Vert Poster",
            tagName: "UziPoster",
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        CartiPoster: {
            name: "Playboicarti Poster",
            tagName: "CartiPoster",
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        PeepPoster: {
            name: "Lil Peep Poster",
            tagName: "PeepPoster",
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        JuicePoster: {
            name: "Juice WRLD Poster",
            tagName: "JuicePoster",
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        PharrellPoster: {
            name: "Pharrell Poster",
            tagName: "PharrellPoster",
            price: 40.00,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = { ...state.products[action.payload]};

            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
            
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }

        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    // YungLeanPoster: productSelected
                    [action.payload]: productSelected
                }
            }


        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]};
            let newCartCost = 0;
            let newBasketNumbers = 0;

            // This is so the the quantity never gets below 0
            if ( productSelected.numbers === 0) {
                productSelected.numbers = 0
                newCartCost = state.cartCost
                newBasketNumbers = state.basketNumbers
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
                newBasketNumbers = state.basketNumbers - 1;
            }
            

            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    // FuturePoster: productSelected
                    [action.payload]: productSelected
                }
            }


            case CLEAR_PRODUCT:
                productSelected = { ...state.products[action.payload]};
                let numbersBackup = productSelected.numbers;

                productSelected.numbers = 0;
                productSelected.inCart = false;

                return {
                    ...state,
                    basketNumbers: state.basketNumbers - numbersBackup,
                    cartCost: state.cartCost - ( numbersBackup * productSelected.price ),
                    products: {
                        ...state.products,
                        // FuturePoster: productSelected
                        [action.payload]: productSelected
                    }
                }
        default:
            return state;
    }
}