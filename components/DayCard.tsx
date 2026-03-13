type Props = {
  day: number;
  activities: string[];
};

export default function DayCard({ day, activities }: Props) {

  return (

    <div className="bg-white border rounded-xl p-5 shadow-sm">

      <h3 className="text-lg font-semibold mb-3">
        Day {day}
      </h3>

      <ul className="space-y-2">

        {activities.map((activity, index) => (

          <li key={index} className="flex items-start gap-2">

            <span>📍</span>
            <span>{activity}</span>

          </li>

        ))}

      </ul>

    </div>

  );

}