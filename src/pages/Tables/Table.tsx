import "./StyleTables.css";
import { FaSearch, FaFilter, FaCalendarAlt, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const Table = () => {
  const data = [
    {
      tanggal: "9 Juni 2025",
      kategori: "Gaji Karyawan",
      keterangan: "Lorem Ipsum",
      jumlah: "Rp 250.000,00",
      unitUsaha: "Lorem Ipsum",
      sumberDana: "Bank",
    },
    {
      tanggal: "9 Juni 2025",
      kategori: "Biaya Sewa",
      keterangan: "Lorem Ipsum",
      jumlah: "Rp 100.000,00",
      unitUsaha: "Lorem Ipsum",
      sumberDana: "E-Wallet",
    },
  ];

  return (
    <div className="tabel-container">
      <div className="table-card">
        {/* Search and Filter Bar */}
        <div className="table-toolbar">
          <div className="search-wrapper">
            <FaSearch className="search-icon" size={14} />
            <input
              type="text"
              placeholder="Cari Transaksi"
              className="input-search"
            />
          </div>

          <div className="filter-button">
            <FaFilter size={12} />
            Filter
          </div>

          <div className="date-button">
            <FaCalendarAlt size={12} />
            Date filter
          </div>
        </div>

        {/* Table */}
        <div style={{ overflow: 'auto' }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Kategori</th>
                <th>Keterangan</th>
                <th>Jumlah</th>
                <th>Unit Usaha</th>
                <th>Sumber Dana</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.tanggal}</td>
                  <td>{item.kategori}</td>
                  <td>{item.keterangan}</td>
                  <td>{item.jumlah}</td>
                  <td>{item.unitUsaha}</td>
                  <td>{item.sumberDana}</td>
                  <td>
                    <div className="action-icons">
                      <FaEye size={16} />
                      <FaEdit size={16} />
                      <FaTrash size={16} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination-container">
          <div className="pagination-controls">
            <button className="pagination-btn nav">‹</button>
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <span className="pagination-dots">...</span>
            <button className="pagination-btn">8</button>
            <button className="pagination-btn nav">›</button>
          </div>
          <div className="pagination-info">274 Results</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
