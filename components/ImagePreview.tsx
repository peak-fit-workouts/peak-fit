type ImagePreviewProps = {
  src: string;
};

const ImagePreview = ({ src }: ImagePreviewProps) => {
  return (
    <div className="w-22">
      <h3 className="text-base text-white mb-1">Image preview: </h3>
      <img className="w-20 h-20 object-cover" src={src} alt="Image preview" />
    </div>
  );
};

export default ImagePreview;
