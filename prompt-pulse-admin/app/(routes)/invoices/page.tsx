import AllInvoices from '@/components/Admin/AllInvoices'
import { getAllInvoices } from '@/actions/Invoices/getAllInvoices'

const page = async() => {
    const data=JSON.parse(JSON.stringify(await getAllInvoices()))
  return (
    <div>
        <AllInvoices isDashboard={false} data={data}/>
    </div>
  )
}

export default page