import { getAllInvoices } from "@/actions/Invoices/getAllInvoices"
import DashboardWidgets from "@/components/Admin/DashboardWidgets"


const page = async() => {
    const data=JSON.parse(JSON.stringify(await getAllInvoices()))
  return (
    <div>
        <DashboardWidgets data={data}/>
    </div>
  )
}

export default page