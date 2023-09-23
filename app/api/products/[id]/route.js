import { NextResponse } from "next/server";

export async function GET(req, { params }) {

    const products = [
        {
            id: 1,
            title: "Classic Black Backpack",
            description: "A versatile and stylish backpack, perfect for daily use. It features multiple compartments for easy organization and comfortable padded shoulder straps. Made from durable materials.",
            price: 5000, // Price in Kenyan Shillings
            discountPrice: 4000, // Discounted Price in Kenyan Shillings
            variants: ["Black", "Red", "Blue"], // Multiple color variants
            imageUrl: "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600",
            discouted: false
        },
        {
            id: 2,
            title: "Striped Canvas Tote Bag",
            description: "A trendy tote bag with a striped pattern. This spacious and eco-friendly bag is great for shopping and beach outings. It has sturdy handles and a zippered pocket.",
            price: 3000,
            discountPrice: 2500,
            variants: ["Striped", "Green", "Yellow"],
            imageUrl: "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=600",
            discouted: false

        },
        {
            id: 101,
            title: "Premium Leather Backpack",
            description: "Crafted from high-quality leather, this spacious backpack is both stylish and functional. It features multiple compartments, padded straps for comfort, and a sleek design.",
            price: 1500, // Price in Kenyan Shillings
            discountPrice: 1200, // Discounted Price in Kenyan Shillings
            variants: ["Black", "Brown", "Gray"], // Multiple color variants
            imageUrl: "https://images.pexels.com/photos/2422476/pexels-photo-2422476.png?auto=compress&cs=tinysrgb&w=600",
            discouted: false

        },
        {
            id: 102,
            title: "Striped Beach Tote Bag",
            description: "Head to the beach in style with this striped tote bag. It's roomy enough for your beach essentials, has a secure zippered closure, and comes with a detachable shoulder strap.",
            price: 2800,
            discountPrice: 2400,
            variants: ["Blue Stripes", "Red Stripes", "Green Stripes"],
            imageUrl: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600",
            discouted: true
        },
        {
            id: 103,
            title: "Classic Leather Wallet",
            description: "A timeless leather wallet with a slim profile. It features card slots, a bill compartment, and a coin pocket. Perfect for everyday use.",
            price: 1800,
            discountPrice: 1500,
            variants: ["Black", "Brown", "Tan"],
            imageUrl: "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=600",
            discouted: false

        },
        {
            id: 104,
            title: "Gym Duffel Bag",
            description: "This durable duffel bag is designed for the gym enthusiast. It has a spacious main compartment, shoe compartment, and multiple pockets for your gear.",
            price: 3200,
            discountPrice: 2800,
            variants: ["Black", "Gray", "Navy"],
            imageUrl: "https://images.pexels.com/photos/10076380/pexels-photo-10076380.jpeg?auto=compress&cs=tinysrgb&w=600",
            discouted: false

        },
        {
            id: 105,
            title: "Elegant Evening Clutch",
            description: "Make a statement at special occasions with this elegant evening clutch. It features a satin finish, a detachable chain strap, and a secure clasp closure.",
            price: 2500,
            discountPrice: 2100,
            variants: ["Silver", "Gold", "Black"],
            imageUrl: "https://images.pexels.com/photos/10640258/pexels-photo-10640258.jpeg?auto=compress&cs=tinysrgb&w=600",
            discouted: false

        },
        {
            id: 106,
            title: "Canvas Slip-On Shoes",
            description: "Comfortable and casual canvas slip-on shoes for everyday wear. They have a cushioned insole and a rubber outsole for traction.",
            price: 1800,
            discountPrice: 1500,
            variants: ["Blue", "Red", "Gray"],
            imageUrl: "https://images.pexels.com/photos/12115342/pexels-photo-12115342.jpeg?auto=compress&cs=tinysrgb&w=600",
            discouted: false

        },
        {
            id: 107,
            title: "Leather Belt with Buckle",
            description: "A classic leather belt with a stylish buckle. It's made from genuine leather and can be easily adjusted for a perfect fit.",
            price: 1200,
            discountPrice: 1000,
            variants: ["Black", "Brown", "Navy"],
            imageUrl: "https://images.pexels.com/photos/6786706/pexels-photo-6786706.jpeg?auto=compress&cs=tinysrgb&w=600",
            discouted: false

        },
        {
            id: 108,
            title: "Designer Sunglasses",
            description: "Elevate your style with these designer sunglasses. They offer UV protection and a trendy design to complete your look.",
            price: 3500,
            discountPrice: 2900,
            variants: ["Tortoise", "Black", "Clear"],
            imageUrl: "https://images.pexels.com/photos/842963/pexels-photo-842963.jpeg?auto=compress&cs=tinysrgb&w=600",
            discouted: false

        },
        {
            id: 109,
            title: "Laptop Sleeve Case",
            description: "Keep your laptop safe and stylish with this slim sleeve case. It's made from water-resistant material and has a soft interior lining.",
            price: 2000,
            discountPrice: 1700,
            variants: ["Gray", "Blue", "Pink"],
            imageUrl: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
            discouted: false

        },
        {
            id: 110,
            title: "Sports Water Bottle",
            description: "Stay hydrated during workouts with this sports water bottle. It has a leak-proof design, a convenient handle, and a large capacity.",
            price: 800,
            discountPrice: 650,
            variants: ["Green", "Blue", "Purple"],
            imageUrl: "https://images.pexels.com/photos/9475239/pexels-photo-9475239.jpeg?auto=compress&cs=tinysrgb&w=600",
            discouted: false

        }
    ];

    const FilteredObject = products.filter(product => product.id === parseInt(params.id))
    if (FilteredObject.length != 0) {
        return NextResponse.json(FilteredObject[0])
    }
    else {
        return NextResponse.json({ error: "Not Found" }, { status: 500 })
    }
}
