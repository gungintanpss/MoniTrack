import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
import InputGroup from "../../components/form/form-elements/InputGroup";
import DropzoneComponent from "../../components/form/form-elements/DropZone";
import CheckboxComponents from "../../components/form/form-elements/CheckboxComponents";
import RadioButtons from "../../components/form/form-elements/RadioButtons";
import ToggleSwitch from "../../components/form/form-elements/ToggleSwitch";
import FileInputExample from "../../components/form/form-elements/FileInputExample";
import SelectInputs from "../../components/form/form-elements/SelectInputs";
import TextAreaInput from "../../components/form/form-elements/TextAreaInput";
import InputStates from "../../components/form/form-elements/InputStates";
import PageMeta from "../../components/common/PageMeta";

export default function FormElements() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Modal (Popup) */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="rounded-xl bg-white p-6 shadow-2xl w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Ini Popup!</h2>
            <p className="mb-6 text-gray-700">
              Konten popup bisa berupa formulir, info, dll.
            </p>
            <button
              onClick={closeModal}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Konten Halaman */}
      <div>
        <PageMeta
          title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
          description="This is React.js Form Elements Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
        />

        <PageBreadcrumb pageTitle="Form Elements" />

        <button
          onClick={openModal}
          className="mb-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Buka Popup
        </button>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="space-y-6">
            <DefaultInputs />
            <SelectInputs />
            <TextAreaInput />
            <InputStates />
          </div>
          <div className="space-y-6">
            <InputGroup />
            <FileInputExample />
            <CheckboxComponents />
            <RadioButtons />
            <ToggleSwitch />
            <DropzoneComponent />
          </div>
        </div>
      </div>
    </>
  );
}
