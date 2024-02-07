import Image from "next/image";

interface SliderProps {
  imageUrl: string;
  productName: string;
}

const Slider = ({ imageUrl, productName }: SliderProps) => {
  return (
    <div className="carousel-item">
      <Image
        alt={productName}
        width={400}
        height={400}
        src={imageUrl}
        className="rounded-box max-w-4xl object-cover lg:min-w-[600px]"
      />
    </div>
  );
};

export default Slider;
