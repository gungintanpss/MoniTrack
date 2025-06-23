import { CopyIcon } from "../../icons"; 

export default function CardKas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1 */}
      <div className="w-full rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-white/[0.03]">
        <div className="text-xs text-indigo-600 font-medium">Bank BCA</div>
        <div className="mt-1 text-sm text-indigo-800 font-semibold flex items-center gap-1">
          Rekening Operasional
        </div>
        <div className="text-sm text-indigo-800 flex items-center gap-1">
          0879898989898989
          <span className="text-indigo-500 cursor-pointer">
            <CopyIcon className="w-4 h-4" />
          </span>
        </div>

        <div className="mt-4 text-base font-semibold text-gray-800 dark:text-white">
          Ni Lorem Ipsum
        </div>

        <div className="mt-2 text-4xl font-bold text-black dark:text-white">
          Rp. 134.768.987,32
        </div>

        <a
          href="#"
          className="mt-6 text-sm text-right text-gray-700 dark:text-white cursor-pointer block"
          >
          Detail →
        </a>
      </div>

      {/* Card 2 */}
      <div className="w-full rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-white/[0.03]">
        <div className="text-xs text-indigo-600 font-medium">Bank BCA</div>
        <div className="mt-1 text-sm text-indigo-800 font-semibold flex items-center gap-1">
          Rekening Operasional
        </div>
        <div className="text-sm text-indigo-800 flex items-center gap-1">
          0879898989898989
          <span className="text-indigo-500 cursor-pointer">
            <CopyIcon className="w-4 h-4" />
          </span>
        </div>

        <div className="mt-4 text-base font-semibold text-gray-800 dark:text-white">
          Ni Lorem Ipsum
        </div>

        <div className="mt-2 text-4xl font-bold text-black dark:text-white">
          Rp. 134.768.987,32
        </div>

        <a
          href="#"
          className="mt-6 text-sm text-right text-gray-700 dark:text-white cursor-pointer block"
          >
          Detail →
        </a>
      </div>

      {/* Card 3 */}
      <div className="w-full rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-white/[0.03]">
        <div className="text-xs text-indigo-600 font-medium">Bank BCA</div>
        <div className="mt-1 text-sm text-indigo-800 font-semibold flex items-center gap-1">
          Rekening Operasional
        </div>
        <div className="text-sm text-indigo-800 flex items-center gap-1">
          0879898989898989
          <span className="text-indigo-500 cursor-pointer">
            <CopyIcon className="w-4 h-4" />
          </span>
        </div>

        <div className="mt-4 text-base font-semibold text-gray-800 dark:text-white">
          Ni Lorem Ipsum
        </div>

        <div className="mt-2 text-4xl font-bold text-black dark:text-white">
          Rp. 134.768.987,32
        </div>

        <a
          href="#"
          className="mt-6 text-sm text-right text-gray-700 dark:text-white cursor-pointer block"
          >
          Detail →
        </a>
      </div>

      {/* Card 4 */}
      <div className="w-full rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-white/[0.03]">
        <div className="text-xs text-indigo-600 font-medium">Bank BCA</div>
        <div className="mt-1 text-sm text-indigo-800 font-semibold flex items-center gap-1">
          Rekening Operasional
        </div>
        <div className="text-sm text-indigo-800 flex items-center gap-1">
          0879898989898989
          <span className="text-indigo-500 cursor-pointer">
            <CopyIcon className="w-4 h-4" />
          </span>
        </div>

        <div className="mt-4 text-base font-semibold text-gray-800 dark:text-white">
          Ni Lorem Ipsum
        </div>

        <div className="mt-2 text-4xl font-bold text-black dark:text-white">
          Rp. 134.768.987,32
        </div>

        <a
          href="#"
          className="mt-6 text-sm text-right text-gray-700 dark:text-white cursor-pointer block"
          >
          Detail →
        </a>
      </div>
    </div>
  );
}
