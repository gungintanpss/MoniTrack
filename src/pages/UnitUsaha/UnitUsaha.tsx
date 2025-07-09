import { useState } from "react";
import CardUnit from "../../components/card/CardUnit";
import { PlusIcon } from "../../icons";
import Button from "../../components/ui/button/Button";
import AddUnitUsahaModal from "../../components/form/AddUnitUsahaModal"; 
import PageMeta from "../../components/common/PageMeta";

export default function UnitUsaha() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <PageMeta
        title="MoniTrack"
        description=""
      />
      
      <AddUnitUsahaModal isOpen={isOpen} onClose={closeModal} />

      <div className="space-y-6 px-4 md:px-8 pt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Unit Usaha
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

        <CardUnit />
      </div>
    </>
  );
}
