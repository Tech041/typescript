const ProductImageGallery = ({ imageUrls }: { imageUrls: string[] }) => {
  if (imageUrls.length === 0) return null;
  return (
    <ul>
      {imageUrls.map((url) => (
        <li key={url} className="">
          <img src={url} alt={`Product image ${url}`} className="" />
        </li>
      ))}
    </ul>
  );
};

export default ProductImageGallery;
