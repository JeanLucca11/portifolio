import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["Todos", "Web", "Mobile", "Desktop"];

const PRODUCTS = [
  {
    id: 1,
    title: "Sistema de Gestão Web",
    description: "Plataforma completa para gestão empresarial",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Web"
  },
  {
    id: 2,
    title: "App de Delivery",
    description: "Aplicativo mobile para delivery de produtos",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Mobile"
  },
  {
    id: 3,
    title: "Software de Análise",
    description: "Sistema desktop para análise de dados",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Desktop"
  },
  // Adicione mais produtos conforme necessário
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = PRODUCTS.filter(
    (product) => selectedCategory === "Todos" || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Nosso Portfólio</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conheça nossos projetos mais recentes e descubra como podemos
          transformar suas ideias em realidade.
        </p>
      </header>

      <div className="flex justify-center gap-2 mb-8">
        {CATEGORIES.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Index;