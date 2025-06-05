import { X } from "lucide-react"
import { Dialog, DialogContent } from "../ui/dialog"
import { ReactElement } from "react"
import { cn } from "@/lib/utils"

interface modalProps {
    isOpen?: boolean
    onClose?: () => void
    body?: ReactElement
    isEdditing?: boolean
}

const Modal = ({isOpen, onClose, isEdditing, body}: modalProps) => {
    return (
    <div>
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className={cn("bg-black p-2", isEdditing && "overflow-x-hidden overflow-y-hidden")} >
            <div className="mt-4">{body}</div>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default Modal