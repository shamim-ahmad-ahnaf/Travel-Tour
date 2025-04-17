const Pricing = () => {
    const packages = [
      { name: "Basic", price: "$299", features: ["3 Days Tour", "Hotel Included", "Free Guide"] },
      { name: "Standard", price: "$499", features: ["5 Days Tour", "Hotel + Meals", "Free Guide", "2 Activities"] },
      { name: "Premium", price: "$799", features: ["7 Days Tour", "All Inclusive", "Personal Guide", "5 Activities"] }
    ];
  
    return (
      <section className="py-16 " id="pricing">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 "><span className="text-amber-400">Pricing</span> Plans</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="border  rounded-xl border-amber-400 shadow-md p-6 text-center hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold  mb-2">{pkg.name}</h3>
                <p className="text-yellow-500 text-3xl font-bold mb-4">{pkg.price}</p>
                <ul className="space-y-2 mb-4 ">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>✔️ {feature}</li>
                  ))}
                </ul>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;
  