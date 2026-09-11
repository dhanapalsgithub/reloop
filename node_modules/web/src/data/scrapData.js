import {
    LayoutDashboard,
    IndianRupee,
    Handshake,
    Users,
    FileBarChart,
    Settings,
    ClipboardList,
    ShieldCheck,
    Map,
    Wallet,
} from 'lucide-react';

export const ROLES = [
    { id: 'admin', label: 'Admin', hint: 'Platform control' },
    { id: 'individual', label: 'Individual', hint: 'Household seller' },
    { id: 'public', label: 'Public', hint: 'Civic body' },
    { id: 'corporate', label: 'Corporate', hint: 'Bulk generator' },
    { id: 'delivery_partner', label: 'Delivery Partner', hint: 'Pickup fleet' },
    { id: 'hub', label: 'Partner Hub', hint: 'Sorting yard' },
];

const ADMIN_MENU = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'areas', label: 'Area Management', icon: Map },
    { id: 'pricing', label: 'Pricing Manager', icon: IndianRupee },
    { id: 'partners', label: 'Partner Management', icon: Handshake },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'payments', label: 'Payment & Payouts', icon: Wallet },
    { id: 'reports', label: 'Reports', icon: FileBarChart },
    { id: 'compliance', label: 'Compliance Reports', icon: ShieldCheck },
    { id: 'system', label: 'System Setting', icon: Settings },
];

const USER_MENU = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'sell-scrap', label: 'Sell Your Scrap', icon: IndianRupee },
    { id: 'collection', label: 'Collection Log', icon: ClipboardList },
    { id: 'payments', label: 'Payment History', icon: Wallet },
    { id: 'compliance', label: 'Compliance Reports', icon: ShieldCheck },
    { id: 'area', label: 'Area Management', icon: Map },
    { id: 'setting', label: 'Settings', icon: Settings },
];

export const getMenu = (role) => (role === 'admin' ? ADMIN_MENU : USER_MENU);

const CITIES = ['Chennai', 'Madurai', 'Coimbatore', 'Trichy', 'Salem', 'Tirunelveli', 'Erode', 'Vellore', 'Thoothukudi', 'Thanjavur'];
const MATERIALS = ['Mixed Paper', 'PET Bottles', 'Aluminium Cans', 'E-waste', 'Iron Scrap', 'Cardboard', 'Copper Wire', 'HDPE Drums', 'Glass Cullet', 'Brass Fittings'];
const PEOPLE = ['Meera Kulkarni', 'Rahul Deshpande', 'Aarti Nair', 'Imran Sheikh', 'Vikram Chauhan', 'Sneha Iyer', 'Devendra Patil', 'Farah Qureshi', 'Nikhil Raut', 'Kavya Menon'];
const ORGS = ['Shakti Textiles', 'Corporation Ward 12', 'Veda Electronics', 'Sahyadri Hospitals', 'Trimurti Packaging', 'GreenLoop Logistics', 'Anand Motors Ltd', 'Rachna School Trust', 'Kalpataru Foods', 'Metro Rail Depot'];
const STATUS = ['Completed', 'In Transit', 'Scheduled', 'Verified', 'Pending', 'Completed', 'Verified', 'In Transit', 'Scheduled', 'Completed'];

const seq = (n) => Array.from({ length: n }, (_, i) => i);
const pick = (arr, i) => arr[i % arr.length];

const table = (columns, rowFn) => ({ columns, rows: seq(10).map(rowFn) });

const metric = (label, value, delta, note) => ({ label, value, delta, note });

/* ---------- Admin views ---------- */
const adminViews = {
    dashboard: {
        title: 'Network Overview',
        subtitle: 'Live scrap flow across every collection zone',
        metrics: [
            metric('Tonnage this month', '4,182 t', '+12.4%', 'vs. Feb 2026'),
            metric('Active partners', '146', '+6', '9 onboarding'),
            metric('Payouts settled', '₹2.94 Cr', '+8.1%', '1,204 transfers'),
            metric('Diversion rate', '87.6%', '+2.2%', 'landfill avoided'),
        ],
        table: table(
            ['Pickup ID', 'Source', 'Material', 'City', 'Weight', 'Status'],
            (i) => ({
                id: `PK-90${140 + i}`,
                cells: [`PK-90${140 + i}`, pick(ORGS, i), pick(MATERIALS, i), pick(CITIES, i), `${(1.2 + i * 0.7).toFixed(1)} t`],
                status: pick(STATUS, i),
            })
        ),
    },
    areas: {
        title: 'Area Management & Routes',
        subtitle: 'மண்டல வாரியான வழித்தடங்கள் மற்றும் சேகரிப்புப் பகுதிகள் (Real Data)',
        metrics: [
            metric('Total Zones', '18 Active', '+2', 'geo-fenced'),
            metric('Coverage', '88%', '+4%', 'serviceable area'),
            metric('Active Routes', '24', '+3', 'daily runs'),
            metric('Avg. Response', '3.4 h', '-22 min', 'request to pickup'),
        ],
        table: table(
            ['Zone ID', 'City', 'Assigned Hub', 'Households', 'Daily Volume', 'Status'],
            (i) => ({
                id: `ar-${i}`,
                cells: [`Zone ${String.fromCharCode(65 + (i % 6))}-${i + 1}`, pick(CITIES, i), pick(ORGS, i), `${(340 + i * 96).toLocaleString('en-IN')}`, `${(1.5 + i * 0.4).toFixed(1)} t`],
                status: i % 4 === 2 ? 'Scheduled' : 'Completed',
            })
        ),
    },
    pricing: {
        title: 'Pricing Manager',
        subtitle: 'Rate cards by material grade and region',
        metrics: [
            metric('Live rate cards', '38', '+3', 'across 12 states'),
            metric('Avg. buy price', '₹24.60/kg', '+1.8%', 'weighted'),
            metric('Margin band', '11–18%', 'stable', 'target 14%'),
            metric('Pending approvals', '7', '3 urgent', 'raised by hubs'),
        ],
        table: table(
            ['Material', 'Grade', 'Region', 'Buy ₹/kg', 'Sell ₹/kg', 'Status'],
            (i) => ({
                id: `rate-${i}`,
                cells: [pick(MATERIALS, i), `G${(i % 3) + 1}`, pick(CITIES, i), `₹${(14 + i * 3.5).toFixed(2)}`, `₹${(17 + i * 3.9).toFixed(2)}`],
                status: i % 4 === 0 ? 'Pending' : 'Verified',
            })
        ),
    },
    partners: {
        title: 'Partner Management',
        subtitle: 'Hubs, fleets and aggregators under contract',
        metrics: [
            metric('Partner hubs', '52', '+4', '6 states'),
            metric('Fleet partners', '94', '+11', '312 vehicles'),
            metric('SLA compliance', '93.4%', '+1.6%', 'pickup window'),
            metric('Contracts expiring', '5', '30 days', 'renewal due'),
        ],
        table: table(
            ['Partner', 'Type', 'City', 'Capacity', 'SLA', 'Status'],
            (i) => ({
                id: `pt-${i}`,
                cells: [pick(ORGS, i + 3), i % 2 ? 'Partner Hub' : 'Delivery Partner', pick(CITIES, i + 2), `${40 + i * 15} t/mo`, `${88 + (i % 9)}%`],
                status: i % 5 === 0 ? 'Pending' : 'Verified',
            })
        ),
    },
    users: {
        title: 'User Directory & Access Control',
        subtitle: 'System Admin Mode',
        hubLabel: 'Chennai HQ Hub',
        directoryMode: true,
        metrics: [
            metric('Total accounts', '18,742', '+624', 'this month'),
            metric('KYC verified', '15,908', '84.9%', 'of accounts'),
            metric('Corporate accounts', '412', '+18', 'bulk contracts'),
            metric('Flagged accounts', '23', '-4', 'under review'),
        ],
        table: {
            columns: ['System User', 'Email Address', 'Assigned Role', 'TN Branch Scope', 'Status', 'Last Action Timestamp'],
            rows: [
                { id: 'usr-0', cells: ['Rajesh Kumar', 'r.kumar@scrapflow.in', 'Super Admin', 'Chennai HQ'], role: 'Super Admin', status: 'Active', action: 'Edit Scope' },
                { id: 'usr-1', cells: ['Priya Sundaram', 'p.sundaram@scrapflow.in', 'Manager', 'Madurai Hub'], role: 'Manager', status: 'Active', action: 'Edit Scope' },
                { id: 'usr-2', cells: ['Arunachalam S.', 'a.s@scrapflow.in', 'Operator', 'Trichy Branch'], role: 'Operator', status: 'Active', action: 'Edit Scope' },
            ],
        },
    },
    payments: {
        title: 'Network Payment & Payout History',
        subtitle: 'Track past income, settlements, and pending amounts across all users',
        metrics: [
            metric('Total Paid (YTD)', '₹14.82 Cr', '+14.2%', 'All payouts'),
            metric('Pending Payouts', '₹38.4 Lakh', '142 orders', 'Processing T+1'),
            metric('Escrow Balance', '₹1.20 Cr', 'Secure', 'Bank reserve'),
            metric('Failed Transfers', '₹12,400', '2 cases', 'Action required'),
        ],
        table: table(
            ['Payout ID', 'User / Partner', 'Role', 'Amount', 'Scrap Value', 'Status', 'Date'],
            (i) => ({
                id: `pay-admin-${i}`,
                cells: [
                    `PAY-99${20 + i}`,
                    pick(ORGS, i),
                    i % 2 === 0 ? 'Corporate' : 'Individual',
                    `₹${(15000 + i * 4500).toLocaleString('en-IN')}`,
                    `₹${(14000 + i * 4200).toLocaleString('en-IN')}`,
                    i % 3 === 0 ? 'Pending' : 'Completed',
                    `${(i % 25) + 1} Mar 2026`,
                ],
                status: i % 3 === 0 ? 'Pending' : 'Completed',
            })
        ),
    },
    reports: {
        title: 'Reports',
        subtitle: 'Generated statutory and operational reports',
        metrics: [
            metric('Reports generated', '1,286', '+94', 'YTD'),
            metric('EPR filings', '318', 'on time', '100% submitted'),
            metric('CO₂e avoided', '6,412 t', '+9.7%', 'verified'),
            metric('Audit findings', '2', 'minor', 'closed 14'),
        ],
        table: table(
            ['Report ID', 'Type', 'Scope', 'Period', 'Tonnage', 'Status'],
            (i) => ({
                id: `rp-${i}`,
                cells: [`RPT-4${210 + i}`, pick(['EPR Annual', 'Zone Summary', 'Payout Audit', 'Material Flow'], i), pick(CITIES, i + 4), `Q${(i % 4) + 1} FY26`, `${(120 + i * 46).toLocaleString('en-IN')} t`],
                status: i % 3 === 0 ? 'Pending' : 'Completed',
            })
        ),
    },
    compliance: {
        title: 'Compliance Reports',
        subtitle: 'Statutory documents and certificate trail',
        metrics: [
            metric('Filings this year', '11', 'all accepted', 'CPCB / SPCB'),
            metric('Certificates', '184', '+22', 'downloadable'),
            metric('Open observations', '2', '-3', 'closed 9'),
            metric('Next due', '31 Mar', '18 days', 'Q4 return'),
        ],
        table: table(
            ['Doc ID', 'Document', 'Authority', 'Period', 'Tonnage', 'Status'],
            (i) => ({
                id: `cm-admin-${i}`,
                cells: [`DOC-2${450 + i}`, pick(['EPR Return', 'Form-4 Manifest', 'Recycler Certificate', 'Transport Consignment'], i), pick(['CPCB', 'MPCB', 'SPCB Kerala', 'ULB Ward Office'], i), `Q${(i % 4) + 1} FY26`, `${(12 + i * 4)} t`],
                status: i % 3 === 0 ? 'Pending' : 'Verified',
            })
        ),
    },
    system: {
        title: 'System Setting',
        subtitle: 'Platform configuration and integrations',
        metrics: [
            metric('Active modules', '14', 'all healthy', '0 incidents'),
            metric('API uptime', '99.4%', '30 days', 'p95 210ms'),
            metric('Webhooks', '26', '+2', '1 retrying'),
            metric('Roles configured', '6', 'unchanged', '38 permissions'),
        ],
        table: table(
            ['Setting', 'Module', 'Value', 'Updated by', 'Updated', 'Status'],
            (i) => ({
                id: `st-${i}`,
                cells: [pick(['Pickup window', 'Weight tolerance', 'Payout cycle', 'OTP validity', 'Geo-fence radius'], i), pick(['Logistics', 'Weighbridge', 'Finance', 'Auth', 'Zones'], i), pick(['2 hours', '±1.5%', 'T+2 days', '10 minutes', '4.5 km'], i), pick(PEOPLE, i + 2), `${(i % 12) + 1} Mar 2026`],
                status: i % 4 === 1 ? 'Pending' : 'Verified',
            })
        ),
    },
};

/* ---------- Shared (non-admin) views, tuned per role ---------- */
const roleFlavour = {
    individual: { unit: 't', source: 'Plant', volume: (i) => `${(1.5 + i * 0.4).toFixed(1)} t`, earn: (i) => `₹${(14000 + i * 4200).toLocaleString('en-IN')}` },
    public: { unit: 't', source: 'Ward', volume: (i) => `${(2.4 + i * 1.1).toFixed(1)} t`, earn: (i) => `₹${(4200 + i * 1150).toLocaleString('en-IN')}` },
    corporate: { unit: 't', source: 'Plant', volume: (i) => `${(6.5 + i * 2.3).toFixed(1)} t`, earn: (i) => `₹${(18400 + i * 3600).toLocaleString('en-IN')}` },
    delivery_partner: { unit: 't', source: 'Route', volume: (i) => `${(1.8 + i * 0.9).toFixed(1)} t`, earn: (i) => `₹${(640 + i * 190).toLocaleString('en-IN')}` },
    hub: { unit: 't', source: 'Intake', volume: (i) => `${(9.2 + i * 3.4).toFixed(1)} t`, earn: (i) => `₹${(26800 + i * 5400).toLocaleString('en-IN')}` },
};

const roleMetrics = {
    individual: [
        metric('Total Zones', '18 Active', '+2', 'geo-fenced'),
        metric('Coverage', '88%', '+4%', 'serviceable area'),
        metric('Active Routes', '24', '+3', 'daily runs'),
        metric('Avg. Response', '3.4 h', '-22 min', 'request to pickup'),
    ],
    public: [
        metric('Ward tonnage', '284 t', '+16.2%', 'March cycle'),
        metric('Past Income', '₹2.14 Lakh', '+14.2%', 'Total earnings'),
        metric('Pending Amount', '₹12,400', '2 wards', 'Clearing soon'),
        metric('Segregation score', '78%', '+5%', 'at source'),
    ],
    corporate: [
        metric('Waste diverted', '1,146 t', '+11.8%', 'FY 2026'),
        metric('Past Income', '₹41.2 L', '+6.4%', 'Net realized'),
        metric('Pending Amount', '₹1.85 L', '3 invoices', 'Due net-30'),
        metric('Audit readiness', '96%', '+3%', 'documents'),
    ],
    delivery_partner: [
        metric('Trips completed', '238', '+21', 'this month'),
        metric('Past Income', '₹1.86 L', '+12.5%', 'Total earned'),
        metric('Pending Amount', '₹4,200', '4 trips', 'T+2 payout'),
        metric('On-time rate', '94.7%', '+1.4%', 'pickup SLA'),
    ],
    hub: [
        metric('Intake tonnage', '928 t', '+14.1%', 'March'),
        metric('Past Income', '₹8.40 Cr', '+9.1%', 'Total revenue'),
        metric('Pending Amount', '₹3.40 Lakh', 'Batch settle', 'In progress'),
        metric('Rejection rate', '4.2%', '-0.8%', 'contamination'),
    ],
};

const buildUserViews = (role, session) => {
    const f = roleFlavour[role];
    const userName = session?.name || 'User Name';
    const userEmail = session?.email || 'user@scrapflow.in';

    return {
        dashboard: {
            title: 'Dashboard',
            subtitle: 'Your scrap activity, earnings, and pending balances at a glance',
            metrics: roleMetrics[role],
            table: table(
                ['Pickup ID', f.source, 'Material', 'Location', 'Volume', 'Status'],
                (i) => ({
                    id: `pk-${role}-${i}`,
                    cells: [`PK-${role.slice(0, 2).toUpperCase()}${1180 + i}`, pick(ORGS, i + 1), pick(MATERIALS, i), pick(CITIES, i), f.volume(i)],
                    status: pick(STATUS, i),
                })
            ),
        },
        'sell-scrap': {
            title: 'Sell Your Scrap',
            subtitle: 'Schedule a new pickup, estimate scrap value, and get instant pricing',
            metrics: [
                metric('Estimated Rate', '₹24 / kg', 'Avg market', 'Live pricing'),
                metric('Active Requests', '2', 'Pickup today', 'On time'),
                metric('Instant Payouts', 'Available', 'UPI / Bank', 'Instant transfer'),
                metric('Recycling Bonus', '+5%', 'Eco-tier', 'Green credit'),
            ],
            table: table(
                ['Material Category', 'Grade / Quality', 'Current Rate (₹/kg)', 'Estimated Value', 'Action'],
                (i) => ({
                    id: `sell-${i}`,
                    cells: [pick(MATERIALS, i), `Grade ${(i % 2) + 1}`, `₹${15 + i * 3}`, `₹${(15 + i * 3) * 10} (for 10kg)`, 'Schedule Pickup'],
                    status: 'Verified',
                })
            ),
        },
        collection: {
            title: 'Collection Log',
            subtitle: 'Every recorded handover with weighbridge slips and material value',
            metrics: [
                metric('Entries logged', '96', '+14', 'last 30 days'),
                metric('Total volume', role === 'individual' ? '412 kg' : '1,284 t', '+9.2%', 'net weight'),
                metric('Avg. scrap value', role === 'individual' ? '₹584' : '₹32,410', '+4.1%', 'per handover'),
                metric('Disputed slips', '3', '-2', 'under review'),
            ],
            table: table(
                ['Log ID', 'Date', 'Material', 'Volume', 'Scrap Value', 'Status'],
                (i) => ({
                    id: `lg-${i}`,
                    cells: [`LOG-7${320 + i}`, `${(i % 28) + 1} Mar 2026`, pick(MATERIALS, i + 2), f.volume(i), f.earn(i)],
                    status: pick(STATUS, i + 3),
                })
            ),
        },
        payments: {
            title: 'Payment History & Past Income',
            subtitle: 'Complete breakdown of past earnings, credited payouts, and pending amounts',
            metrics: [
                metric('Total Past Income', role === 'individual' ? '₹9,840' : '₹4.20 Lakh', '+15.4%', 'Lifetime earnings'),
                metric('Pending Amount', role === 'individual' ? '₹450' : '₹14,500', 'In transit', 'To be credited'),
                metric('Last Payout', role === 'individual' ? '₹1,200' : '₹45,000', 'Success', 'Via UPI / Bank'),
                metric('Next Settlement', 'T+1 Working Day', 'On schedule', 'Auto transfer'),
            ],
            table: table(
                ['Transaction ID', 'Material Sold', 'Scrap Value', 'Pending / Settled', 'Payment Mode', 'Status'],
                (i) => ({
                    id: `pay-${i}`,
                    cells: [
                        `TXN-88${40 + i}`,
                        pick(MATERIALS, i),
                        f.earn(i),
                        i % 3 === 0 ? `Pending (${f.earn(i)})` : `Settled (${f.earn(i)})`,
                        i % 2 === 0 ? 'Direct UPI' : 'Bank Transfer',
                        i % 3 === 0 ? 'Pending' : 'Completed',
                    ],
                    status: i % 3 === 0 ? 'Pending' : 'Completed',
                })
            ),
        },
        compliance: {
            title: 'Compliance Reports',
            subtitle: 'Statutory documents and certificate trail',
            metrics: [
                metric('Filings this year', '11', 'all accepted', 'CPCB / SPCB'),
                metric('Certificates', '184', '+22', 'downloadable'),
                metric('Open observations', '2', '-3', 'closed 9'),
                metric('Next due', '31 Mar', '18 days', 'Q4 return'),
            ],
            table: table(
                ['Doc ID', 'Document', 'Authority', 'Period', 'Tonnage', 'Status'],
                (i) => ({
                    id: `cm-${i}`,
                    cells: [`DOC-2${450 + i}`, pick(['EPR Return', 'Form-4 Manifest', 'Recycler Certificate', 'Transport Consignment'], i), pick(['CPCB', 'MPCB', 'SPCB Kerala', 'ULB Ward Office'], i), `Q${(i % 4) + 1} FY26`, f.volume(i + 1)],
                    status: i % 3 === 0 ? 'Pending' : 'Verified',
                })
            ),
        },
        area: {
            title: 'Area Management & Routes',
            subtitle: 'மண்டல வாரியான வழித்தடங்கள் மற்றும் சேகரிப்புப் பகுதிகள் (Real Data)',
            metrics: [
                metric('Total Zones', '18 Active', '+2', 'geo-fenced'),
                metric('Coverage', '88%', '+4%', 'serviceable area'),
                metric('Active Routes', '24', '+3', 'daily runs'),
                metric('Avg. Response', '3.4 h', '-22 min', 'request to pickup'),
            ],
            table: table(
                ['Zone ID', 'City', 'Assigned Hub', 'Households', 'Daily Volume', 'Status'],
                (i) => ({
                    id: `ar-${i}`,
                    cells: [`Zone ${String.fromCharCode(65 + (i % 6))}-${i + 1}`, pick(CITIES, i), pick(ORGS, i), `${(340 + i * 96).toLocaleString('en-IN')}`, `${(1.5 + i * 0.4).toFixed(1)} t`],
                    status: i % 4 === 2 ? 'Scheduled' : 'Completed',
                })
            ),
        },
        setting: {
            title: 'Settings & Account Profile',
            subtitle: `Manage profile details for ${userName}`,
            metrics: [
                metric('Profile Name', userName, 'Verified', 'Active account'),
                metric('Email Address', userEmail, 'Primary', 'Notification enabled'),
                metric('KYC Status', 'Completed', '100%', 'Approved'),
                metric('Linked Accounts', '3', '+1', 'Bank & UPI'),
            ],
            table: {
                columns: ['Account Property', 'Current Details / Value', 'Status', 'Action'],
                rows: [
                    { id: 'st-1', cells: ['Registered Full Name', userName, 'Verified', 'Update Name'] },
                    { id: 'st-2', cells: ['Primary Email Address', userEmail, 'Active', 'Change Email'] },
                    { id: 'st-3', cells: ['Account Role Type', role.toUpperCase(), 'Secured', 'View Permissions'] },
                    { id: 'st-4', cells: ['Notification Preference', 'SMS + Email Alerts', 'Enabled', 'Configure'] },
                ],
            },
        },
    };
};

export const getView = (role, menuId, session = null) => {
    if (role === 'admin') {
        return adminViews[menuId] || adminViews.dashboard;
    }
    const roleViews = buildUserViews(role, session);
    return roleViews[menuId] || roleViews.dashboard;
};

export const STATUS_TONE = {
    Completed: 'bg-emerald-500/10 text-emerald-700 ring-emerald-500/20',
    Verified: 'bg-sky-500/10 text-sky-700 ring-sky-500/20',
    'In Transit': 'bg-amber-500/10 text-amber-700 ring-amber-500/20',
    Scheduled: 'bg-violet-500/10 text-violet-700 ring-violet-500/20',
    Pending: 'bg-rose-500/10 text-rose-700 ring-rose-500/20',
    Active: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    Inactive: 'bg-slate-100 text-slate-500 ring-slate-200',
    Locked: 'bg-rose-50 text-rose-600 ring-rose-200',
};