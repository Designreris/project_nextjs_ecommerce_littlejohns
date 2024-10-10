import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaMoneyBillAlt } from "react-icons/fa"
import { FaAddressCard, FaTrash } from "react-icons/fa6"

export default function WalletAccordian({ data }: { data: CardProps }) {
  const cardSplice = data.cardNo.toString().slice(12) || ""

  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value={`${data.id}`}
        className="flex flex-col justify-center items-center"
      >
        <AccordionTrigger className="text-clr_secondary [&>svg]:mr-2">
          <FaAddressCard />
          {`${data.name} - ${cardSplice}`}
        </AccordionTrigger>
        <AccordionContent>
          <button className="bg-clr_secondary p-2 m-2 rounded flex items-center justify-center [&>svg]:mr-2">
            <FaMoneyBillAlt />
            Set Default Card
          </button>
          <button className="bg-clr_secondary p-2 m-2 rounded flex items-center justify-center [&>svg]:mr-2">
            <FaTrash />
            Delete Card
          </button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
