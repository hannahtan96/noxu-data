
import { Button, Table as AntTable } from 'antd';
import { ArrowRightOutlined, InfoCircleOutlined, YuqueFilled } from "@ant-design/icons";

interface TableProps {
  headers: string[];
  data: (Record<string, string>)[];
  buttons: string[];
  caption?: string;
}

export default function Table({ headers, data, buttons, caption }: TableProps) {
  const columns = headers.map((header) => ({
    title: capitalizeId(header),
    dataIndex: camelize(header),
    key: capitalizeId(header),
  }));

  return (
    <div className="px-24 py-8 flex flex-col gap-4">
      <div className="flex my-3">
        <Button className="!rounded-none !m-0 flex items-center space-x-2">
          <InfoCircleOutlined />
          <span>Not Confident</span>
        </Button>
        <Button className="!rounded-none !m-0 flex items-center space-x-2">
          <span>Human Help</span>
          <ArrowRightOutlined />
        </Button>
      </div>

      <div className="flex items-start space-x-2 w-full">
        <div className="flex flex-col items-start">
          <YuqueFilled className="w-6 h-6" />
        </div>
        <div className="flex-1 mb-2">
          <span className="mb-4 block">To find out how many accounts you have, you can use the following query:</span>
          <div className="mt-4 w-full">
            <AntTable
              columns={columns}
              dataSource={data}
              pagination={false}
              summary={() => (
                <tr>
                  <td colSpan={headers.length} className="border-b py-2 bg-gray-200" style={{ lineHeight: '0.5', borderBottomColor: 'rgba(0,0,0,0.06)' }}> {/* Apply Tailwind CSS classes */}
                    <InfoCircleOutlined className="mr-2" />
                    <span>{caption}</span>
                  </td>
                </tr>
              )}
              footer={() => (
                <div className="bg-white flex justify-left space-x-4">
                  {buttons.map((description, index) => (
                    <Button key={index} style={{ borderRadius: '8px' }}>{description}</Button>
                  ))}
                </div>
              )}
              bordered
            />
          </div>
        </div>
      </div>
    </div >
  );
};

function camelize(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function capitalizeId(str: string) {
  const regex = /\bid\b/gi;
  return str.replace(regex, match => match.toUpperCase());
}


