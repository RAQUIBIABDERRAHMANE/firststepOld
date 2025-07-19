"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [actionResult, setActionResult] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (isAuthenticated !== 'true') {
        router.replace('/signin');
      }
    }
  }, [router]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('https://n8n.raquibi.space/webhook/bc73fe0d-8ca3-48c7-8406-a27b897564a2');
        if (!res.ok) throw new Error('Failed to fetch data');
        const json = await res.json();
        setData(Array.isArray(json) ? json : [json]);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError('Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  async function handleAction(row: Record<string, unknown>, rowIndex: number) {
    setActionLoading(rowIndex);
    setActionResult((prev) => ({ ...prev, [rowIndex]: '' }));
    try {
      const payload = {
        username: row.username,
        email: row.email,
        phone: row.phone,
        message: row.Message,
        createdAt: row['Created AT'],
      };
      const res = await fetch('https://n8n.raquibi.space/webhook/9a1210f3-4e62-48a9-b738-dc4b5805a510', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to send');
      setActionResult((prev) => ({ ...prev, [rowIndex]: 'Sent!' }));
    } catch (err: unknown) {
      setActionResult((prev) => ({ ...prev, [rowIndex]: err instanceof Error ? err.message : 'Error' }));
    } finally {
      setActionLoading(null);
    }
  }

  // Get table columns from first data row, excluding 'password'
  const columns = data.length > 0 ? Object.keys(data[0]).filter(col => col !== 'password') : [];

  // Optionally format date
  function formatDate(dateString: unknown) {
    if (typeof dateString !== 'string') return '';
    const date = new Date(dateString.replace(' ', 'T'));
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleString();
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-mesh animate-morphing" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45 animate-float neural-border" />
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-purple-400/30 rotate-12 animate-float delay-1000" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rotate-45 animate-morphing" />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-green-400/30 rounded-full animate-pulse-slow delay-500" />
      </div>
      {/* Welcome Card */}
      <div className="glass-card border neural-border shadow-2xl rounded-2xl p-10 backdrop-blur-strong w-full max-w-3xl text-center mt-16 mb-10 animate-fade-in-up">
        <h1 className="text-4xl font-bold mb-2 text-gradient-cyber">Dashboard</h1>
        <p className="text-lg text-gray-300 mb-2">Welcome! You are successfully signed in.</p>
        <p className="text-sm text-gray-400">Here you can view your latest service inquiries and messages.</p>
      </div>
      {/* Data Table Section */}
      <div className="w-screen px-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-white tracking-tight">Service Inquiries</h2>
        </div>
        <div className="overflow-x-auto rounded-none shadow-2xl glass-card border border-cyan-400/10 backdrop-blur-strong">
          {loading ? (
            <div className="text-center text-cyan-400 py-12 text-lg font-semibold">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-12 text-lg font-semibold">{error}</div>
          ) : data.length === 0 ? (
            <div className="text-center text-gray-400 py-12 text-lg">No data found.</div>
          ) : (
            <table className="min-w-full w-screen text-sm text-left text-gray-300">
              <thead className="sticky top-0 z-10 bg-gradient-to-r from-cyan-900/80 to-purple-900/80 text-cyan-300 uppercase text-xs font-bold">
                <tr>
                  {columns.map(col => (
                    <th key={col} className="px-6 py-4 border-b border-cyan-400/10">{col}</th>
                  ))}
                  <th className="px-6 py-4 border-b border-cyan-400/10 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-cyan-900/20 transition-colors">
                    {columns.map(col => (
                      <td key={col} className="px-6 py-4 border-b border-cyan-400/5">
                        {col === 'Created AT' ? formatDate(row[col]) : String(row[col])}
                      </td>
                    ))}
                    <td className="px-6 py-4 border-b border-cyan-400/5 text-center">
                      <button
                        onClick={() => handleAction(row, i)}
                        disabled={actionLoading === i}
                        className={`px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow ${actionLoading === i ? 'opacity-60 cursor-not-allowed' : ''}`}
                      >
                        {actionLoading === i ? 'Sending...' : 'Send'}
                      </button>
                      {actionResult[i] && (
                        <span className={`ml-2 text-sm ${actionResult[i] === 'Sent!' ? 'text-green-400' : 'text-red-400'}`}>{actionResult[i]}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
} 