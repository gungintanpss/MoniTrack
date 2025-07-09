import { useState } from "react";
import CardKas from "../../components/card/CardKas";
import { PlusIcon } from "../../icons";
import Button from "../../components/ui/button/Button";
import AddRekeningModal from "../../components/form/AddRekeningModal"; 
import PageMeta from "../../components/common/PageMeta";

export default function Calendar() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <PageMeta
        title="MoniTrack"
        description=""
      />
      
      <AddRekeningModal isOpen={isOpen} onClose={closeModal} />

      <div className="space-y-6 px-4 md:px-8 pt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Manajemen Kas dan Rekening
          </h2>

          <Button
            size="sm"
            variant="primary"
            startIcon={<PlusIcon />}
            className="px-4 py-2"
            onClick={openModal}
          >
            Tambah
          </Button>
        </div>

        <CardKas />
      </div>
    </>
  );
}
