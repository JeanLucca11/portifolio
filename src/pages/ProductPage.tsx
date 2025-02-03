import { useParams } from "react-router-dom";
import ImageSlider from "@/components/ImageSlider";
import { CheckCircle } from "lucide-react";

const PRODUCTS = {
  1: {
    title: "Sistema de Gestão Web",
    description: "Uma plataforma completa para gestão empresarial que integra todas as áreas do seu negócio.",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    ],
    summary: "Desenvolvido para atender às necessidades específicas de empresas modernas, nosso sistema oferece uma interface intuitiva e recursos poderosos para otimizar seus processos.",
    features: [
      "Dashboard personalizado",
      "Relatórios em tempo real",
      "Integração com APIs",
      "Suporte 24/7",
      "Backup automático",
      "Atualizações constantes"
    ]
  }
  // Adicione mais produtos conforme necessário
};

const ProductPage = () => {
  const { id } = useParams();
  const product = PRODUCTS[Number(id)];

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="min-h-screen">
      <section className="w-full">
        <ImageSlider images={product.images} />
      </section>

      <section className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">{product.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {product.summary}
        </p>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Recursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="text-primary h-5 w-5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;