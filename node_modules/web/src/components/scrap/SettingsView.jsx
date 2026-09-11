import React, { useEffect, useState } from 'react';
import { Search, ChevronLeft, ChevronRight, User, Lock, Save, MapPin, RefreshCw } from 'lucide-react';

export default function SettingsView({ session }) {
  const [name, setName] = useState(session?.name || '');
  const [email] = useState(session?.email || '');
  const [assignedArea, setAssignedArea] = useState(session?.assignedArea || '');
  const [password, setPassword] = useState('');
  
  // Real data and pagination states
  const [hubs, setHubs] = useState([]);
  const [logs, setLogs] = useState([]);
  const [loadingHubs, setLoadingHubs] = useState(true);
  const [loadingLogs, setLoadingLogs] = useState(true);
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  
  // Pagination for Audit / Activity table
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const isAdmin = session?.role?.toLowerCase() === 'admin';

  const fetchData = async () => {
    try {
      setLoadingHubs(true);
      const hubRes = await fetch('http://localhost:5000/api/hubs');
      const hubData = await hubRes.json();
      if (hubRes.ok) setHubs(hubData);
    } catch (err) {
      console.error("Error fetching hubs:", err);
    } finally {
      setLoadingHubs(false);
    }

    if (isAdmin) {
      try {
        setLoadingLogs(true);
        const logRes = await fetch('http://localhost:5000/api/scrap/audit-logs');
        const logData = await logRes.json();
        if (logRes.ok) setLogs(logData);
      } catch (err) {
        console.error("Error fetching audit logs:", err);
      } finally {
        setLoadingLogs(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [isAdmin]);

  const handleSave = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/users/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          assignedArea,
          ...(password ? { password } : {})
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to update settings');

      setMessage('Profile and area management scope updated successfully!');
      setPassword('');
      setTimeout(() => setMessage(''), 4000);
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredLogs = logs.filter((log) =>
    Object.values(log).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredLogs.length / rowsPerPage) || 1;
  const paginatedLogs = filteredLogs.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 mb-1">Account & Area Management Settings</h2>
        <p className="text-xs text-slate-500 mb-6">Manage profile info, credentials, and live database regional hub scope allocation</p>

        {message && <div className="mb-4 p-3 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-medium">{message}</div>}
        {error && <div className="mb-4 p-3 rounded-xl bg-rose-50 text-rose-700 text-xs font-medium">{error}</div>}

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-4 outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">Email Address (Read-only)</label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-4 text-slate-400 cursor-not-allowed"
              />
            </div>
          </div>

          {isAdmin && (
            <div>
              <label className="block font-medium text-slate-700 mb-1">Assigned Area Management / Hub Scope</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <select
                  value={assignedArea}
                  onChange={(e) => setAssignedArea(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-4 outline-none focus:border-emerald-500 text-slate-700"
                >
                  <option value="">Select Operational Hub / District Zone...</option>
                  {loadingHubs ? (
                    <option disabled>Loading live hubs...</option>
                  ) : hubs.length > 0 ? (
                    hubs.map((hub) => (
                      <option key={hub.id || hub.name} value={hub.name}>
                        {hub.name} {hub.district ? `(${hub.district})` : ''}
                      </option>
                    ))
                  ) : (
                    <option disabled>No hubs found in database</option>
                  )}
                </select>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Populated dynamically from active database zones.</p>
            </div>
          )}

          <div>
            <label className="block font-medium text-slate-700 mb-1">New Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Leave blank to keep current password"
                className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-4 outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 font-medium text-white hover:bg-emerald-700 transition"
          >
            <Save className="h-4 w-4" /> Save Changes
          </button>
        </form>
      </div>

      {isAdmin && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-md font-semibold text-slate-800">System Audit & Activity Logs</h3>
              <p className="text-xs text-slate-500">Live database event tracking with complete pagination</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search logs..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  className="w-full sm:w-56 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-xs outline-none focus:border-emerald-500"
                />
              </div>
              <button
                onClick={fetchData}
                title="Refresh Logs"
                className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200 bg-slate-50 text-slate-600 font-medium">
                <tr>
                  <th className="p-3">Log ID</th>
                  <th className="p-3">Action Description</th>
                  <th className="p-3">Performed By</th>
                  <th className="p-3">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {loadingLogs ? (
                  <tr><td colSpan="4" className="p-6 text-center text-slate-400">Loading audit records...</td></tr>
                ) : paginatedLogs.length > 0 ? (
                  paginatedLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium">#{log.id}</td>
                      <td className="p-3">{log.action}</td>
                      <td className="p-3 text-slate-500">{log.performedBy}</td>
                      <td className="p-3 text-slate-500">{new Date(log.timestamp).toLocaleString('en-IN')}</td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="4" className="p-6 text-center text-slate-400">No matching activity log records found.</td></tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
            <span>
              Showing {filteredLogs.length > 0 ? (page - 1) * rowsPerPage + 1 : 0} to {Math.min(page * rowsPerPage, filteredLogs.length)} of {filteredLogs.length} entries
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronLeft className="h-3.5 w-3.5" /> Previous
              </button>
              <span className="px-2 font-medium text-slate-700">Page {page} of {totalPages}</span>
              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages || totalPages === 0}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40"
              >
                Next <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}