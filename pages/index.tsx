
import Footer from '../components/Footer';
import Header from '../components/Header';
import Table from '../components/Table';

export default function Home() {
  const headers = [
    'id',
    'Name',
    'Industry',
    'City',
    'State',
    'Segment',
    'Owner Id'
  ]

  const rowData = {
    id: '477',
    name: 'Abbott - Pacocha',
    industry: 'IT',
    city: 'Colorado',
    state: 'CO',
    segment: 'Entertainment',
    ownerId: '7'
  };

  const caption = 'Only X rows are shown. View full list for more.'
  const data = Array(5).fill(rowData).map((row, index) => ({ key: index, ...row }));
  const buttons = [
    'Show Full List',
    'Show Full Query',
    'Show Full Chart',
    'Pin to Dashboard',
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex-grow bg-blue-100">
        <Table headers={headers} data={data} buttons={buttons} caption={caption} />
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
};

