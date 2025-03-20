type CardHeaderProps = {
  title: string;
  subtitle: string;
};

const CardHeader = ({ title, subtitle }: CardHeaderProps) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600 text-xs italic">{subtitle}</p>
    </div>
  );
};

export default CardHeader;
