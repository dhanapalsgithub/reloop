import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors';
import pool from './apps/web/src/db.js';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/signup', async (req, res) => {
  try {
    const { 
      name, 
      email, 
      personalEmail, 
      mobile, 
      password, 
      role, 
      organizationName,
      scrapTypes,
      deliveryPartnerDetails,
      addressDetails 
    } = req.body;
    
    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const labelName = addressDetails?.labelName || '';
    const streetName = addressDetails?.streetName || '';
    const postTaluk = addressDetails?.postTaluk || '';
    const state = addressDetails?.state || '';
    const district = addressDetails?.district || '';
    const zonal = addressDetails?.zonal || '';
    const pincode = addressDetails?.pincode || '';
    const vehicleNo = deliveryPartnerDetails?.vehicleNo || null;

    const query = `
      INSERT INTO users (
        name, email, personal_email, mobile, password, role, 
        organization_name, label_name, street_name, post_taluk, 
        state, district, zonal, pincode, scrap_types, vehicle_no
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) 
      RETURNING *;
    `;
    
    const values = [
      name || '', 
      email || '', 
      personalEmail || null, 
      mobile || '', 
      hashedPassword, 
      role || 'admin', 
      organizationName || null, 
      labelName, 
      streetName, 
      postTaluk, 
      state, 
      district, 
      zonal || null, 
      pincode, 
      Array.isArray(scrapTypes) ? scrapTypes : [], 
      vehicleNo
    ];
    
    const newAddition = await pool.query(query, values);
    res.status(201).json({ message: 'User registered successfully', user: newAddition.rows[0] });
  } catch (err) {
    console.error("Signup Error Details:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const userQuery = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userQuery.rows.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = userQuery.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);
    
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid Password' });
    }

    res.json({ 
      message: 'Login successful', 
      role: user.role, 
      name: user.name, 
      email: user.email 
    });
  } catch (err) {
    console.error("Login Error Details:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// 1. Sell Scrap படிவத் தரவை சேமிக்க (POST API)
// ==========================================
app.post('/api/scrap/pickup', async (req, res) => {
  try {
    const { material, weight, ratePerKg, totalAmount, district, address, userEmail, paymentStatus, paymentMode, transactionId } = req.body;

    const query = `
      INSERT INTO "ScrapPickup" (material, weight, "ratePerKg", "totalAmount", district, address, "userEmail", "paymentStatus", "paymentMode", "transactionId", "createdAt")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())
      RETURNING *;
    `;
    const values = [
      material, 
      weight, 
      ratePerKg, 
      totalAmount, 
      district, 
      address, 
      userEmail, 
      paymentStatus || 'Pending', 
      paymentMode || 'Online', 
      transactionId || ('TXN-' + Date.now())
    ];

    const result = await pool.query(query, values);
    res.status(201).json({ message: 'Scrap pickup request saved successfully', data: result.rows[0] });
  } catch (err) {
    console.error("Scrap Insert Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// 2. அட்மின் டேஷ்போர்டுக்காக மாவட்ட வாரியாகப் பெற (GET API)
// ==========================================
app.get('/api/scrap/pickups', async (req, res) => {
  try {
    const { district } = req.query; 
    
    let query = 'SELECT * FROM "ScrapPickup"';
    let values = [];

    if (district && district !== 'All') {
      query += ' WHERE district = $1';
      values.push(district);
    }

    query += ' ORDER BY "createdAt" DESC';

    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error("Fetch Pickups Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// 3. அனைத்து பயனர்களின் அல்லது குறிப்பிட்ட யூசர் டேட்டாவைப் பெற (GET API)
// ==========================================
app.get('/api/scrap/pickups/all', async (req, res) => {
  try {
    const { role, email } = req.query;
    
    let query = 'SELECT * FROM "ScrapPickup"';
    let values = [];

    if (role && role !== 'admin' && email) {
      query += ' WHERE "userEmail" = $1';
      values.push(email);
    }

    query += ' ORDER BY "createdAt" DESC';

    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error("Fetch All Pickups Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// 4. Payment History பெற (GET API)
// ==========================================
app.get('/api/scrap/payments/history', async (req, res) => {
  try {
    const { role, email } = req.query;
    
    let query = `
      SELECT 
        id, 
        "transactionId", 
        material, 
        weight, 
        "totalAmount" AS amount, 
        COALESCE("paymentStatus", 'Pending') AS status, 
        COALESCE("paymentMode", 'Online Gateway') AS "paymentMode", 
        "userEmail", 
        "createdAt" 
      FROM "ScrapPickup"
    `;
    let values = [];

    if (role && role !== 'admin' && email) {
      query += ' WHERE "userEmail" = $1';
      values.push(email);
    }

    query += ' ORDER BY "createdAt" DESC';

    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error("Fetch Payment History Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// 5. Area Management & Hub Data (GET API - Admin Only)
// ==========================================
app.get('/api/scrap/areas/all', async (req, res) => {
  try {
    const { role } = req.query;

    if (role && role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admin only.' });
    }

    let query = `
      SELECT 
        COALESCE(district, 'General Zone') AS "zoneId",
        COALESCE(district, 'Unassigned City') AS city,
        COALESCE(address, 'ReLoop Central Hub') AS "hubName",
        COUNT(id) * 150 AS households,
        CAST(SUM(weight) AS TEXT) || ' Kg' AS "dailyVolume",
        CASE 
          WHEN MAX("createdAt") >= NOW() - INTERVAL '1 day' THEN 'Completed'
          WHEN COUNT(id) > 0 THEN 'In Transit'
          ELSE 'Scheduled'
        END AS status
      FROM "ScrapPickup"
      GROUP BY district, address 
      ORDER BY households DESC
    `;

    const result = await pool.query(query);
    
    if (result.rows.length === 0) {
      const fallbackData = [
        { id: 1, zoneId: 'ZONE-CHN-01', city: 'Chennai', hubName: 'Velachery Hub', households: 1240, dailyVolume: '450 Kg', status: 'Completed' },
        { id: 2, zoneId: 'ZONE-CBE-02', city: 'Coimbatore', hubName: 'RS Puram Hub', households: 980, dailyVolume: '320 Kg', status: 'In Transit' },
        { id: 3, zoneId: 'ZONE-MDU-03', city: 'Madurai', hubName: 'Anaiyur Hub', households: 750, dailyVolume: '210 Kg', status: 'Scheduled' }
      ];
      return res.json(fallbackData);
    }

    res.json(result.rows);
  } catch (err) {
    console.error("Fetch Areas Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// 6. Unified Dashboard & Menu Stats Summary API (All Users & All Menus)
// ==========================================
app.get('/api/scrap/dashboard/summary', async (req, res) => {
  try {
    const { role, email, menu } = req.query;
    
    let baseQuery = 'FROM "ScrapPickup"';
    let values = [];

    if (role && role.toLowerCase() !== 'admin' && email) {
      baseQuery += ' WHERE "userEmail" = $1';
      values.push(email);
    }

    const statsQueries = [
      `SELECT COUNT(id) AS total_pickups, COALESCE(SUM(weight), 0) AS total_weight ${baseQuery}`,
      `SELECT SUM("totalAmount") AS total_income ${baseQuery} ${values.length > 0 ? 'AND' : 'WHERE'} ("paymentStatus" ILIKE 'Success' OR "paymentStatus" ILIKE 'Paid')`,
      `SELECT SUM("totalAmount") AS pending_amount ${baseQuery} ${values.length > 0 ? 'AND' : 'WHERE'} ("paymentStatus" ILIKE 'Pending' OR "paymentStatus" ILIKE 'In transit')`,
      `SELECT "totalAmount", "paymentMode" ${baseQuery} ${values.length > 0 ? 'AND' : 'WHERE'} ("paymentStatus" ILIKE 'Success' OR "paymentStatus" ILIKE 'Paid') ORDER BY "createdAt" DESC LIMIT 1`,
      `SELECT COUNT(DISTINCT district) AS active_zones ${baseQuery}`
    ];

    const [pickupsRes, incomeRes, pendingRes, lastPayoutRes, zonesRes] = await Promise.all([
      pool.query(statsQueries[0], values),
      pool.query(statsQueries[1], values),
      pool.query(statsQueries[2], values),
      pool.query(statsQueries[3], values),
      pool.query(statsQueries[4], values)
    ]);

    const totalPickups = Number(pickupsRes.rows[0]?.total_pickups || 0);
    const totalWeight = Number(pickupsRes.rows[0]?.total_weight || 0).toFixed(2);
    const totalIncome = Number(incomeRes.rows[0]?.total_income || 0);
    const pendingAmount = Number(pendingRes.rows[0]?.pending_amount || 0);
    const lastPayout = Number(lastPayoutRes.rows[0]?.totalAmount || 0);
    const lastPayoutMode = lastPayoutRes.rows[0]?.paymentMode || 'Online';
    const activeZones = Number(zonesRes.rows[0]?.active_zones || 0);

    let customMetrics = [];

    if (menu === 'payments' || menu === 'payment-history') {
      customMetrics = [
        { label: 'Total Past Income', value: `₹ ${totalIncome.toLocaleString('en-IN')}`, change: 'Lifetime earnings', trend: 'up' },
        { label: 'Pending Amount', value: `₹ ${pendingAmount.toLocaleString('en-IN')}`, change: 'To be credited', trend: 'neutral' },
        { label: 'Last Payout', value: `₹ ${lastPayout.toLocaleString('en-IN')}`, change: `Via ${lastPayoutMode}`, trend: 'up' },
        { label: 'Next Settlement', value: 'T+1 Day', change: 'Auto transfer', trend: 'up' }
      ];
    } else if (menu === 'areas' || menu === 'area') {
      customMetrics = [
        { label: 'Active Zones', value: activeZones, change: 'Operating districts', trend: 'up' },
        { label: 'Total Pickups Mapped', value: totalPickups, change: 'Across regions', trend: 'up' },
        { label: 'Total Volume', value: `${totalWeight} Kg`, change: 'Processed scrap', trend: 'up' },
        { label: 'Hub Status', value: 'Active', change: '100% operational', trend: 'up' }
      ];
    } else {
      customMetrics = [
        { label: 'Total Pickups', value: totalPickups, change: '+12% this month', trend: 'up' },
        { label: 'Total Weight', value: `${totalWeight} Kg`, change: 'Collected volume', trend: 'up' },
        { label: 'Total Earnings', value: `₹ ${totalIncome.toLocaleString('en-IN')}`, change: 'Successful payouts', trend: 'up' },
        { label: 'Pending Payouts', value: `₹ ${pendingAmount.toLocaleString('en-IN')}`, change: 'Processing', trend: 'neutral' }
      ];
    }

    res.json({
      metrics: customMetrics,
      raw: { totalPickups, totalWeight, totalIncome, pendingAmount, lastPayout, activeZones }
    });

  } catch (err) {
    console.error("Dashboard Summary Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});