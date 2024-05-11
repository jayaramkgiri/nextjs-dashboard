import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/market/buttons';
import InvoiceStatus from '@/app/ui/market/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  // const invoices = await fetchFilteredInvoices(query, currentPage);
  const invoices = [
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
    {id: "1", name: "test", status: "true", email: "test", amount: 100, date: '10/2/2024', },
  ];

  return (
    <div className="pt-6 flow-root">
      <div className="inline-block max-w-full align-middle">
        <div className="rounded-lg p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden relative w-full md:table overflow-auto border-collapse ml-0 scroll-smooth">
            <thead className="rounded-lg relative text-left text-darkgray text-sm font-normal">
              <tr className='sticky top-[152px] bg-white z-10'>
                <th scope="col" className="px-3 z-10 bg-white sticky left-0 top-[142px] py-5 font-medium">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium sticky" >
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium sticky ">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium sticky  ">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium sticky  ">
                  Status
                </th>                
                <th scope="col" className="px-3 py-5 font-medium sticky  ">
                  Status
                </th>                
                <th scope="col" className="px-3 py-5 font-medium sticky  ">
                  Status
                </th>                
                <th scope="col" className="px-3 py-5 font-medium sticky  ">
                  Status
                </th>
                <th scope="col" className="px-4 py-5 font-medium sticky  ">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium sticky  ">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium sticky  ">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium sticky  ">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium sticky  ">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium sticky  ">
                  Status
                </th>                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white overflow-x-auto text-secondary divide-y">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap border-l-0 border-spacing-x-1 shadow-r-inner border border-solid border-gray-200 bg-white sticky left-0 px-3 py-3 mx-0">
                    {invoice.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 border border-solid border-gray-200">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 border border-solid border-gray-200">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 border border-solid border-gray-200">
                    {invoice.date}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 border border-solid border-gray-200">
                    {invoice.status}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.status}
                  </td>                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.status}
                  </td>                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.status}
                  </td>                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.status}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.date}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.status}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.status}
                  </td>                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.status}
                  </td>                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.status}
                  </td>                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
