import React, { useEffect, useState } from 'react';
import { Search, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

export default function ComplianceReport() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    fetch('http://localhost:5000/api/scrap/compliance')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching compliance:", err);
        setLoading(false);
      });
  }, []);

  const filteredData = data.filter((item) => 
    Object.values(item).some((val) => 
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage) || 1;
  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  if (loading) return <div className="p-6 text-sm text-slate-500">Loading compliance reports...</div>;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">Compliance & Certificates</h2>
          <p className="text-xs text-slate-500">Real-time regulatory tracking and environmental clearances</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search compliance..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full sm:w-64 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-xs outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-slate-100 bg-slate-50 text-slate-600 font-medium">
            <tr>
              <th className="p-3">Certificate No</th>
              <th className="p-3">Category</th>
              <th className="p-3">Status</th>
              <th className="p-3">Issued Date</th>
              <th className="p-3">User Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {paginatedData.length > 0 ? (
              paginatedData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/50">
                  <td className="p-3 font-medium flex items-center gap-1.5">
                    <FileText className="h-4 w-4 text-emerald-600" />
                    {row.certificateNo}
                  </td>
                  <td className="p-3">{row.category}</td>
                  <td className="p-3">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                      row.status === 'Verified' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-3">{row.issuedDate ? new Date(row.issuedDate).toLocaleDateString() : '-'}</td>
                  <td className="p-3 text-slate-500">{row.userEmail}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-6 text-center text-slate-400">No compliance records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4 text-xs text-slate-500">
        <span>Page {page} of {totalPages}</span>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="p-2 border rounded-lg hover:bg-slate-50 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="p-2 border rounded-lg hover:bg-slate-50 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}