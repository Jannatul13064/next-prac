type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const sampleProducts: Product[] = [
  { id: 1, name: "Smart Watch", price: 120, image: "/images/watch.jpg" },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 80,
    image: "/images/headphones.jpg",
  },
  { id: 3, name: "Gaming Mouse", price: 45, image: "/images/mouse.jpg" },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 100,
    image: "/images/keyboard.jpg",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 100,
    image: "/images/keyboard.jpg",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 100,
    image: "/images/keyboard.jpg",
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 100,
    image: "/images/keyboard.jpg",
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 100,
    image: "/images/keyboard.jpg",
  },
];

export default function Products() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">${product.price}</p>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
