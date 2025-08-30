import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Download } from 'lucide-react';
import { portfolioReturns, sampleNAVData } from '../data';
import { processNAVData } from '../utils/processNavData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const equityCurveData = processNAVData(sampleNAVData);

const PortfolioPage = () => {
  const [dateRange, setDateRange] = useState({
    fromDate: '2015-05-24',
    toDate: '2024-04-24'
  });

  const filteredData = equityCurveData.filter(item => {
    const itemDate = new Date(item.date);
    const fromDate = new Date(dateRange.fromDate);
    const toDate = new Date(dateRange.toDate);
    return itemDate >= fromDate && itemDate <= toDate;
  });

  const tableHeaders = ['NAME', 'YTD', '1D', '1W', '1M', '3M', '6M', '1Y', '3Y', 'SI', 'DD', 'MAXDD'];

  return (
    <Box sx={{ mx: '8%', backgroundColor: '#ffffff' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, mx: 2 }}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          Trailing Returns
        </Typography>
        <Button startIcon={<Download />}/>
      </Box>

      <TableContainer component={Box} sx={{ mb: 4, mx: 2, maxWidth: '95%',display: 'flex', justifyContent: 'space-between' }}>
        <Table >
          <TableHead sx={{ backgroundColor: '#fafafa' }}>
            <TableRow>
              {tableHeaders.map(header => (
                <TableCell key={header} sx={{ fontWeight: 'bold' }}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(portfolioReturns).map(([name, returns]) => (
              <TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ fontWeight: 'medium' }}>
                  {name}
                </TableCell>
                {Object.values(returns).map((value, index) => (
                  <TableCell key={index} sx={{ color: value >= 0 ? 'success.main' : 'error.main' }}>
                    {value}%
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box variant="outlined" sx={{ p: 3, mx: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
            Equity Curve
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              label="From date"
              type="date"
              size="small"
              variant="outlined"
              value={dateRange.fromDate}
              onChange={e => setDateRange({ ...dateRange, fromDate: e.target.value })}
              sx={{ minWidth: 140, mr: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="To date"
              type="date"
              size="small"
              variant="outlined"
              value={dateRange.toDate}
              onChange={e => setDateRange({ ...dateRange, toDate: e.target.value })}
              sx={{ minWidth: 140 }}
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </Box>
        <Box sx={{ height: 400, mb: 4 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} label={{ value: 'NAV (₹)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Line type="monotone" dataKey="nav" stroke="#10b981" strokeWidth={2} dot={false} name="NAV" />
              <Line type="monotone" dataKey="benchmark" stroke="#3b82f6" strokeWidth={2} dot={false} name="Benchmark" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
        <Typography variant="h6" component="h3" fontWeight="medium" gutterBottom>
          Drawdown
        </Typography>
        <Box sx={{ height: 150 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip formatter={(value: number) => [`${value.toFixed(2)}%`, 'Drawdown']} />
              <Area type="monotone" dataKey="drawdown" stroke="#ef4444" fill="rgba(239, 68, 68, 0.3)" strokeWidth={1} />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioPage;