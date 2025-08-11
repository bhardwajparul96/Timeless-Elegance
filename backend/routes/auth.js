// server/routes/auth.js

const express = require('express');
const pool = require('../db');
const router = express.Router();
const generateOTP = require('../utils/generateOtp');
const axios = require('axios');

// 1️⃣ Send OTP route
router.post('/send-otp', async (req, res) => {
  const { mobile } = req.body;
  const otp = generateOTP();

  try {
    await pool.query('INSERT INTO otps (mobile, otp) VALUES ($1, $2)', [mobile, otp]);

    // Send OTP using Fast2SMS (Replace API Key)
    await axios.post('https://www.fast2sms.com/dev/bulkV2', {
      variables_values: otp,
      route: 'otp',
      numbers: mobile
    }, {
      headers: {
        authorization: process.env.FAST2SMS_API_KEY
      }
    });

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error sending OTP' });
  }
});

// 2️⃣ Verify OTP route
router.post('/verify-otp', async (req, res) => {
  const { mobile, otp } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM otps WHERE mobile = $1 ORDER BY created_at DESC LIMIT 1',
      [mobile]
    );

    if (result.rows.length === 0 || result.rows[0].otp !== otp) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'OTP verification failed' });
  }
});

// 3️⃣ Register user route
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, mobile, password, otp } = req.body;

  try {
    // First verify OTP again before registering
    const result = await pool.query(
      'SELECT * FROM otps WHERE mobile = $1 ORDER BY created_at DESC LIMIT 1',
      [mobile]
    );

    if (result.rows.length === 0 || result.rows[0].otp !== otp) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    const user = await pool.query(
      'INSERT INTO users (first_name, last_name, email, mobile, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [firstName, lastName, email, mobile, password]
    );

    res.status(201).json(user.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

module.exports = router;

// // server/routes/auth.js
// const express = require('express');
// const pool = require('../db');
// const router = express.Router();

// router.post('/register', async (req, res) => {
//   const { firstName, lastName, email, mobile, password } = req.body;

//   try {
//     const result = await pool.query(
//       'INSERT INTO users (first_name, last_name, email, mobile, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
//       [firstName, lastName, email, mobile, password]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error registering user' });
//   }
// });

// module.exports = router;
