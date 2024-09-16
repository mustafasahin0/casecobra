import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";

const LoginModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return <Dialog onOpenChange={setIsOpen} open={isOpen}>
    <DialogContent className="absolute z-[999999]">
        <DialogHeader>
            <div className="relative mz"></div>
        </DialogHeader>
    </DialogContent>
  </Dialog>;
};

export default LoginModal;
