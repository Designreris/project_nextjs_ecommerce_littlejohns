import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaAddressCard, FaHome, FaMoneyBillAlt, FaTrash } from "react-icons/fa"

export default function AddressAccordion({ data }: { data: AddressProps }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value={`${data.id}`}
        className="flex flex-col justify-center items-center"
      >
        <AccordionTrigger className="text-clr_secondary [&>svg]:mr-2">
          <FaAddressCard />
          {`${data.number} ${data.firstLine}`}
        </AccordionTrigger>
        <AccordionContent>
          <button className="bg-clr_secondary p-2 m-2 rounded flex items-center justify-center [&>svg]:mr-2">
            <FaHome />
            Set Default Address
          </button>
          <button className="bg-clr_secondary p-2 m-2 rounded flex items-center justify-center [&>svg]:mr-2">
            <FaMoneyBillAlt />
            Set Default Billing
          </button>
          <button className="bg-clr_secondary p-2 m-2 rounded flex items-center justify-center [&>svg]:mr-2">
            <FaTrash />
            Delete Address
          </button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
