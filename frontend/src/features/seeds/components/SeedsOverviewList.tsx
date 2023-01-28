import { SeedDTO } from '@/bindings/definitions';
import { useNavigate } from 'react-router-dom';

interface SeedsOverviewListProps {
  seeds: SeedDTO[];
}

const SeedsOverviewList = ({ seeds }: SeedsOverviewListProps) => {
  const navigate = useNavigate();

  const handleSeedClick = (seed: SeedDTO) => {
    navigate(`/seeds/${seed.id}`);
  };

  return (
    <section className="">
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-zinc-800 text-xs uppercase text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Art
              </th>
              <th scope="col" className="px-6 py-3">
                Sorte
              </th>
              <th scope="col" className="px-6 py-3">
                Bezugsjahr
              </th>
              <th scope="col" className="px-6 py-3">
                Zuletzt verändert
              </th>
            </tr>
          </thead>
          <tbody>
            {seeds.map((seed) => (
              <tr
                key={seed.id}
                className="-z-100 cursor-pointer bg-primary-textfield hover:bg-neutral-800"
                onClick={() => {
                  handleSeedClick(seed);
                }}
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {seed.name}
                </th>
                <td className="px-6 py-4">{seed.name}</td>
                <td className="px-6 py-4">{seed.harvest_year}</td>
                <td className="px-6 py-4">{seed.updated_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SeedsOverviewList;
