type Props = {
  title: string;
  image: string;
  description: string;
  link: string;
};

export default function DestinationCard({ title, image, description, link }: Props) {
  return (
    <a
      href={link}
      className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>

        <p className="text-sm text-gray-600 mt-2">
          {description}
        </p>
      </div>
    </a>
  );
}