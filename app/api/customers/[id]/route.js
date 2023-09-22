import { NextResponse } from "next/server";

export async function GET(req, { params }) {

    const Customers = [
        {
            id: "111",
            name: "John Doe",
            phoneNumber: "+254123456789",
            profileImageUrl: "https://example.com/john_doe.jpg",
            email: "john.doe@example.com",
            shippingAddress: "123 Main Street, Nairobi"
        },
        {
            id: "112",
            name: "Jane Smith",
            phoneNumber: "+254987654321",
            profileImageUrl: "https://example.com/jane_smith.jpg",
            email: "jane.smith@example.com",
            shippingAddress: "456 Elm Street, Mombasa"
        },
        {
            id: "113",
            name: "Chris Johnson",
            phoneNumber: "+254789012345",
            profileImageUrl: "https://example.com/chris_johnson.jpg",
            email: "chris.johnson@example.com",
            shippingAddress: "789 Oak Avenue, Kisumu"
        },
        {
            id: "114",
            name: "Emily Davis",
            phoneNumber: "+254234567890",
            profileImageUrl: "https://example.com/emily_davis.jpg",
            email: "emily.davis@example.com",
            shippingAddress: "101 Pine Road, Eldoret"
        },
        {
            id: "115",
            name: "Michael Wilson",
            phoneNumber: "+254876543210",
            profileImageUrl: "https://example.com/michael_wilson.jpg",
            email: "michael.wilson@example.com",
            shippingAddress: "222 Cedar Lane, Nakuru"
        },
        {
            id: "116",
            name: "Olivia Brown",
            phoneNumber: "+254678901234",
            profileImageUrl: "https://example.com/olivia_brown.jpg",
            email: "olivia.brown@example.com",
            shippingAddress: "333 Maple Street, Thika"
        },
        {
            id: "117",
            name: "William Taylor",
            phoneNumber: "+254123456789",
            profileImageUrl: "https://example.com/william_taylor.jpg",
            email: "william.taylor@example.com",
            shippingAddress: "444 Birch Road, Kitale"
        },
        {
            id: "118",
            name: "Sophia Clark",
            phoneNumber: "+254987654321",
            profileImageUrl: "https://example.com/sophia_clark.jpg",
            email: "sophia.clark@example.com",
            shippingAddress: "555 Willow Drive, Nyeri"
        },
        {
            id: "119",
            name: "James White",
            phoneNumber: "+254789012345",
            profileImageUrl: "https://example.com/james_white.jpg",
            email: "james.white@example.com",
            shippingAddress: "666 Redwood Lane, Kericho"
        },
        {
            id: "120",
            name: "Ava Turner",
            phoneNumber: "+254234567890",
            profileImageUrl: "https://example.com/ava_turner.jpg",
            email: "ava.turner@example.com",
            shippingAddress: "777 Cedar Lane, Malindi"
        }
    ];

    const FilteredObject = Customers.filter(customer => customer.id === (params.id))
    if (FilteredObject.length != 0) {
        return NextResponse.json(FilteredObject[0])
    }
    else {
        return NextResponse.json({ error: "Not Found" })
    }
}
