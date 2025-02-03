import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProductCard = ({ id, title, description, image, category }: ProductCardProps) => {
  return (
    <Card className="product-card">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/product/${id}`}>
          <Button>Ver mais</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;