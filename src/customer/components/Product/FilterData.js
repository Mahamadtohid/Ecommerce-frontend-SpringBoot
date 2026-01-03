export const color = [
    "white",
    "black",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Pink",
    "Purple",
    "Orange",
    "Brown",
    "Marun"
]


export const filters = [
    {
        id: "color",
        name: "Color",

        options: [
            { value: "White", label: "White" },
            { value: "black", label: "Black" },
            { value: "red", label: "Red" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
            { value: "yellow", label: "Yellow" },
            { value: "pink", label: "Pink" },
            { value: "purple", label: "Purple" },
            { value: "orange", label: "Orange" },
            { value: "brown", label: "Brown" },
            { value: "marun", label: "Marun" },
        ]
    },


    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
        ]
    }

];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159 - 399", label: "₹159 - ₹399" },
            { value: "400 - 699", label: "₹400 - ₹699" },
            { value: "700 - 999", label: "₹700 - ₹999" },
            { value: "1000 - 1499", label: "₹1000 - ₹1499" },
            { value: "1500 - 1999", label: "₹1500 - ₹1999" },
            { value: "2000+", label: "₹2000+" },
        ]
    },

    {
        id: "discount",
        name: "Discount Range",
        options: [{
            value: "10",
            label: "10% or Above",
        },
        { value: "20", label: "20% or Above" },
        { value: "30", label: "30% or Above" },
        { value: "40", label: "40% or Above" },
        { value: "50", label: "50% or Above" },
        { value: "60", label: "60% or Above" },
        { value: "70", label: "70% or Above" },
        ]
    },

    {
        id: "stock",
        name: "Availability",
        options: [{
            value: "inStock",
            label: "In Stock",
        },
        { value: "out_of_stock", label: "Out of Stock" },
        ]

    }
]

